const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://mateus:mateus@cluster0-p32wr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology: true,
})

//req.quey = acessar query params (para filtros)
//req.params = acessar route params (para edição, delete)
//req.body = acessar corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));
app.use(routes);

app.listen(3333);