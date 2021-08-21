var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// replace content file if file exits
// fs.writeFile('mynewfile1.txt', 'Nguyen Duc Hieu!', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// Delete file

fs.unlink('mynewfile1.txt', function(err) {
    if (err) throw err;
    console.log('saved');
})