const path = require("path");

console.log(path.dirname(''));
console.log(path.extname(''));
console.log(path.basename('')); //filename

const myPath = console.log(path.parse('')); //returns all the elements of the path
console.log(myPath.dirname); //returning just one element
console.log(myPath.basename);



