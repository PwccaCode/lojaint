const axios = require('axios');



exports.homeRoutes = (req, res) => {
    //get request para api
    axios.get('http://localhost:3000/api/prods')
    .then(function(response){
    res.render('index', {prods:response.data});
    })
    .catch(err =>{
        res.send(err)
    })
}


exports.novoprod = (req, res) => {
    res.render('novoprod')
}

exports.updateprod = (req, res) => {
    axios.get('http://localhost:3000/api/prods', { params: {id: req.query.id}})
    .then(function(dados){
        res.render("updateprod",{prods:dados.data})
    })
    .catch(err =>{
        res.send(err)
    })
}
