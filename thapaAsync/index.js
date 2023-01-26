const fs = require("fs");

fs.writeFile("bio.txt", "this is asynchronous file ", (err) => {
    console.log("file bio created successfully");
    console.log(err);
});

fs.appendFile("bio.txt","asynchronous is preferred more", (err) => {
    console.log("data appended successfully");
    console.log(err);
});

fs.readFile("bio.txt", "utf-8",(err, data) => {
    console.log(data);
});

fs.rename("bio.txt", "mybio.txt", (err) =>{
    console.log("renaming successful");
    console.log(err);
});

fs.unlink("mybio.txt", (err) => {
    console.log("unlinking successfull");
});