exports.index= function(req, res){   //funcao index recebe uma req e res , é responsavel por renderizar a view index
	res.render('index');
}

exports.lista= function(req,res){
	res.json({
		titulo:'Gangues de Nova Iorque',
		diretor: 'Martin Scorsese',
		ano: 2002
	});
};