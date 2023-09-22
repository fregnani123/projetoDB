const Produto = require('../model/newProduto');


module.exports = { 
    findProduts: async (req, res)=>{
        const produtos = await Produto.find() 
       return res.json(produtos)
    },

    createProduct: async (req, res) => {
        const newProduto = req.body
        try {
            const produto = await Produto.create(newProduto);
            res.json(produto);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Erro ao criar o usuário' });
        }
    },

    findOne: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await Produto.findOne({ _id: id });
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },

}