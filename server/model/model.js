const mongoose = require('mongoose');

 const lojaSchema = {
     nome: String,
     fabric: String,
     categ: String,
     quant: String,
     val: String
}


const Prodb = mongoose.model('prodb', lojaSchema);

module.exports= Prodb;
