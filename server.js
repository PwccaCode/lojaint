const express = require('express')
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const { request } = require('http');

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://lojaint:leo123456@lojaint.fwxfp1f.mongodb.net/lojaint")

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html")
})

//schema

const lojaSchema = {
    nome: String,
    fabric: String,
    categ: String,
    quant: String,
    val: String
}

const Loja = mongoose.model("Loja", lojaSchema);

app.post("/", function(req, res) {
    let newLoja = new Loja({
        nome: req.body.nome,
        fabric: req.body.fabric,
        categ: req.body.categ,
        quant: req.body.quant,
        val: req.body.val
    });
    newLoja.save();
    res.redirect("/");
})

app.listen(3000, function() {
    console.log("server na 3000")
})
