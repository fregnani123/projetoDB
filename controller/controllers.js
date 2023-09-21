const Produto = require('../model/newProduto');


module.exports = { 
    findProduts: async (req, res)=>{
        const produtos = await Produto.find(); 
        res.json(produtos)
    }
}