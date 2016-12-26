var fs = require('fs');

var file = fs.createReadStream('lipsum.txt');
var newfile = fs.createWriteStream('newfile.txt');

//file.on('data', function(chunk){
//  console.log(chunk.toString());
//});

//file.pipe(newfile);

file.pipe(process.stdout);
