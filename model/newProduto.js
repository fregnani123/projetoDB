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
        type:String,
    },
    estoque: {
        type: Number,
        default:0,
    }
})

module.exports = mongoose.model('Produto', productSchema)