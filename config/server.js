//importar o mpodulo do framework express
var express = require('express');

//importar o módulo do consign
var consign = require('consign');

//importar o body-parser
var bodyParser = require('body-parser');

//importar o modulo do express-validator
var expressValidator = require('express-validator');

//iniciar o objeto do expressValidator
var app = express();

//setar as variavveis 'view engine' e 'views' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//configurar o middlewere express.static
app.use(express.static('./app/public'));

//configurar body-parser
app.use(bodyParser.urlencoded({extended: true}));

//configurar express validator
app.use(expressValidator());

//efetua o autoload das rotas, dos models e dos controllers para o objeto app
consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);

// exportar o objeto app
module.exports = app;
