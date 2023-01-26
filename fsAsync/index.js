const fs = require("fs");

fs.writeFile("read.txt", "hello world", (error) => {
    console.log("files are created");
    console.log(error);
});

function abc(err)
{
    console.log(err);
}

abc();

fs.appendFile("read.txt", "the world is advancing day by day", (err) => {
    console.log("appended");
});