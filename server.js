const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Inicia o APP
const app = express();
app.use(express.json());
app.use(cors());

//Inicia o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

require("./src/models/Product");

app.use('/api', require('./src/routes'));

app.listen(3001);