const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const cors = require('cors');



//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Variáveis de ambiente
const PASSWORD = process.env.PASSWORD;
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Servidor rodando na PORT:${PORT}`);
});

mongoose.connect(PASSWORD).then(() => {
    console.log('Banco de dados conectado')
}).catch((error)=>{
    console.log(error)
})