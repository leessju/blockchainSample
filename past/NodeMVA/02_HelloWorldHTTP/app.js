var http = require('http');
const sql = require('mssql');

const config = {
    user: 'sa',
    password: '1111',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'DB_GAME',
 
    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}

var server = http.createServer(function (request, response) {


    async () => {
    try {
        const pool = await sql.connect(config);
        const result = await sql.query('select * from tbl_code');
        console.dir(result);
        //response.end(result + "\n");
        } catch (err) {
            // ... error checks
        }
    }

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World\n");
});

server.addListener('connection', function(socket){  
    console.log('connected...');





});



//(async function () {
//    try {
//        let pool = await sql.connect('mssql://sa:1111@localhost/DB_GAME')
//        let result1 = await pool.request()
//            .input('input_parameter', sql.Int, value)
//            .query('select * from tbl_code')
            
//        console.dir(result1)
    
//        // Stored procedure
        
//        let result2 = await pool.request()
//            .input('input_parameter', sql.Int, value)
//            .output('output_parameter', sql.VarChar(50))
//            .execute('procedure_name')
        
//        console.dir(result2)
//    } catch (err) {
//         ... error checks
//    }
//})()

//sql.on('error', err => {
//    // ... error handler
//})



server.listen(7000);
