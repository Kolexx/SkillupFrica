var fs = require('fs');

fs.mkdir('Data', function() {
  fs.readFile('data.json', function(err, data){
    fs.writeFile('./Data/object.json', data, () => {});
  });
});

fs.unlink('./Data/object.json', function() {
  fs.rmdir('Data', () => {})
})
