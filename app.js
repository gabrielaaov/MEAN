
//IMPORTAMOS AS DEPENDENCIAS 
var express = require('express'); //dependencia
var path = require('path'); // dependencia path
var routes = require('./routes'); //importamos arquivo rotas

//APP RETORNA O  EXPRESS
var app = express(); //uso o express, atribuo a app


//
app.set('views', path.join(__dirname,'views')); // o caminho para views é o diretório views

app.set('view engine', 'ejs'); //ending de template, usaremos ejs

app.get('/', routes.index); // qdo recebermos uma req na url "/" invocamos o index de routes


//SERVIDOR
app.set('port', process.env.PORT || 3000); //escute na porta 3000, ao deploy pode ser q nao esteja disponivel...pega a porta de uma variavel de ambiente ou 3000

var server = app.listen(app.get('port'),function(){
	console.log('Servidor foi startado na porta' + server.address().port);
});