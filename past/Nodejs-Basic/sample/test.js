var fs = require('fs');
var EventEmitter = require('events').EventEmitter;

var pos = 0;
var messenger = new EventEmitter();

// Listener for EventEmitter
messenger.on("message", function(msg) {
    console.log(++pos + " MESSAGE: " + msg);
});
// (A) FIRST
console.log(++pos + " FIRST");
//  (B) NEXT
process.nextTick(function() {
  console.log(++pos + " NEXT")
})
// (C) QUICK TIMER
setTimeout(function() {
  console.log(++pos + " QUICK TIMER")
}, 0)
// (D) LONG TIMER
setTimeout(function() {
  console.log(++pos + " LONG TIMER")
}, 10)
// (E) IMMEDIATE
setImmediate(function() {
  console.log(++pos + " IMMEDIATE")
})
// (F) MESSAGE HELLO!
messenger.emit("message", "Hello!");
// (G) FIRST STAT
fs.stat(__filename, function() {
    console.log(++pos + " FIRST STAT");
});
// (H) LAST STAT
fs.stat(__filename, function() {
    console.log(++pos + " LAST STAT");
});
// (I) LAST
console.log(++pos + " LAST");