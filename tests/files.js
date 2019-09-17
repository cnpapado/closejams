const q = require('../misc/quickselect');
const fs = require('fs');
var foo = 0, k;
a = [];
var lineReader = require('readline').createInterface({
  input: fs.createReadStream('quickselect.in')
});

lineReader.on('line', function (line) {
  if (foo++%2==0) { k = Number(line); console.log(k); }
  else { console.log(line.split(',').map(Number)); a.push(q.quickselect(line.split(',').map(Number), k)); }
});

lineReader.on('close', function (line) {
   var file = fs.createWriteStream('js-quickselect.out');
   file.on('error', function(err) { if(err) {return console.log(err);} });
   a.forEach(function(v) { file.write(v + '\n'); });
   file.end();
});
