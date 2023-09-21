const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nome: {
        type: String,
        required:true,
    },
    descricao: {
        type: String,
        required:true,
    },
    preco: {
        type:Number,
        default: 0.00,
    },
    categoria: {
        type: String,
        required:true,
    },
    estoque: {
        type: Number,
        required:true,
    },
})

module.exports = mongoose.model('Produtos', productSchema)