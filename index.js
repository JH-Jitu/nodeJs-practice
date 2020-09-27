const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var app = express();

app.use(cors());

app.use(bodyParser.json());

const users = ["Jitu", "Rafi", "Sakib", "Fardin", "Sunny"];

app.get("/", (req, res) => {
    const fruit = {
        product: "ada",
        price: 221
    }
    res.send(fruit);
});

app.get("/fruit/banana", (req, res) => {
    const fruit2 = {
        product: "banana",
        price: 224
    }
    res.send(fruit2);
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    name = users[id];
    res.send({id, name});
})

// Post
app.post("/addUser", (req, res) => {
    // console.log("Data received", req.body)
    // save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, () => console.log('Listening to port 3000'));