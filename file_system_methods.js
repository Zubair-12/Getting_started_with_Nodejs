var fs = require('fs');

'fs.appendFile'
'fs.writeFile'
'fs.open'
'fs.rename'
fs.writeFile('my.txt','This is mine',function(err){
    if(err) throw err;
    console.log('Saved!');
});