const express = require('express')
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const res = require('express/lib/response');
const ejs = require('ejs');
var path = require('path');
const connectDB = require('./server/database/connection')



dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log request
app.use(morgan('tiny'));

//mongo connection
connectDB();

//parse na request
app.use(bodyparser.urlencoded({ extended: true}))

//setar view engine
app.set("view engine", "ejs")

//carregar assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))















// mongoose.connect("mongodb+srv://lojaint:leo123456@lojaint.fwxfp1f.mongodb.net/lojaint")

// //schema

// const lojaSchema = {
//     nome: String,
//     fabric: String,
//     categ: String,
//     quant: String,
//     val: String
// }



// const Loja = mongoose.model('Loja', lojaSchema);

// app.get("/", (req,res) => {
//     Loja.find({}, function(err, loja) {
//         res.render('index.ejs', {
//             listaProdu: loja
//         })
//     })
// })


// app.post("/", function(req, res) {
//     let newLoja = new Loja({
//         nome: req.body.nome,
//         fabric: req.body.fabric,
//         categ: req.body.categ,
//         quant: req.body.quant,
//         val: req.body.val
//     });
//     newLoja.save();
//     res.redirect("/");
// })

//carregar routes
app.use('/', require("./server/routes/router"));


app.listen(PORT, function() {
     console.log('server ta rodando em https://localhost:${PORTA}')
 });
