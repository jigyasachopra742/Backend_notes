const fs = require("fs");
const bioData = {
    name: "vinod",
    age:27,
    channel:"thapa"
};

// console.log(bioData.channel);
// console.log(bioData.name);

const jsonData = JSON.stringify(bioData); //object to JSON 
fs.writeFile("json1.json", jsonData, (err) => {
    console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
   
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});


//console.log(jsonData); //{"name":"vinod","age":27,"channel":"thapa"}

// const objData = JSON.parse(jsonData); //JSON format to Object format
// console.log(objData); //{ name: 'vinod', age: 27, channel: 'thapa' }