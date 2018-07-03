
var ted         = require('tedious');
var Connection  = ted.Connection;
var Request     = ted.Request;

var config = {
  userName: 'linkable', // update me
  password: '!LinkAble@', // update me
  server: '14.63.163.170',
  options: {
    database: 'BT_DB'
  }
}

var connection = new Connection(config);

connection.on('connect', function(err) {
    if (err) {
        console.log(err);
    } else {
        executeStatement();
    }
});

function executeStatement() {
    request = new Request("select * from tbl_aaa", function(err, rowCount) {

        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + ' rows');
        }

        connection.close();
    });

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            if (column.value === null) {
                console.log('NULL');
            } else {
                console.log(column.value);
            }
        });
    });

    connection.execSql(request);
}
