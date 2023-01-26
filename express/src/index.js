const path = require('path');
const express = require('express');

const app = express();

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

//app.get(route, callback);
//express is mostly used for routing and API
app.get("/", (req, res) => {
    res.send("hello from the world");
});

app.get("/about", (req, res) => {
    res.status(200).send("hello from the about page");
});

app.get("/contact", (req, res) => {
    res.status(200).send("hello from the contact page");
});

app.get("/temp", (req, res) => {
    res.send([{
        id: 1,
        name: 'jigyasa',

        id: 2,
        name: 'jigyasa',

        id: 3,
        name: 'jigyasa',

        id: 4,
        name: 'jigyasa',
    }]);
});

app.listen(8000, () => {
    console.log("listening the port at 8000");
});