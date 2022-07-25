var Prodb = require('../model/model');

// criar e salvar novo produto

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message: "Campos não podem estar vazios"})
        return;
    }

    //novo produto

         const produto = new Prodb({
         nome: req.body.nome,
         fabric: req.body.fabric,
         categ: req.body.categ,
         quant: req.body.quant,
         val: req.body.val
     })

     produto
     .save(produto)
     .then(data =>{
        //res.send(data)
        res.redirect('/')
     })
     .catch(err =>{
        res.status(500).send({
            message: err.message || "Um erro inesperado ocorreu"
        })
     })

}

//get e retorna os produtos e tambem só 1 produto

exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;

        Prodb.findById(id)
        .then(data=>{
            if(!data){
                res.status(400).send({message:"Nao foi encontrado produto com id" + id})
            }else{
                res.send(data)
            }
        }).catch(err =>{
            res.status(500).send({message:"Erro ao buscar produto com id "+id})
        })
}else{
    Prodb.find()
    .then(produto => {
    res.send(produto)
    })
    .catch(err => {
    res.status(500).send({message: err.message ||"um erro inesperado ocorreu"})
    })
    }

    }





//atualizar um produto identificado pelo ID

exports.update = (req, res) => {
    if(!req.body){
        return res
        .status(400)
        .send({message:"Os dados para atualizar não podem estar vazios"})
    }
    const id = req.params.id;
    Prodb.findByIdAndUpdate(id, req.body, {returnDocument: 'after'})
    .then(data=>{
    if(!data){
        res.status(400).send({message:`Não foi possivel atualizar o produto com a id ${ID}`})
    }else{
        res.send(data)
    }
})
.catch(err=> {
    res.status(500).send({message:"erro ao atualizar informações"})
})
}

//deletar um produto pelo ID

exports.delete = (req, res) => {
    const id = req.params.id;
    Prodb.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({message:`Não foi possivel deletar com id ${id}`})
        }else{
            res.send({
                message:"Produto deletado com sucesso"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message + id
        })
    })

}
