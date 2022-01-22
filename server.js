// Server side Javascript

const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express();
const port = 3000;

app.use(urlencoded({extended: true}));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);

    let bmi = weight / (height * height);

    res.send("Your BMI is --> " + bmi.toFixed(2));
})

app.listen(port, () => {
    console.log("Server connected at " + port);
})