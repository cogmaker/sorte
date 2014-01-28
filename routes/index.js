
/*
 * GET home page.
 */
 
var storage = require('node-persist');

storage.initSync();

if(!storage.getItem('events')){
        storage.setItem('events',[]);
}

console.log("events: " + storage.getItem('events')); 
 

exports.index = function(req, res){
  res.render('index', { title: 'Sorte ou Revez',prev: 'aaa' });
};

exports.init = function(req, res){
  res.render('init');
};

exports.newpost = function(req, res){
  
  var events = storage.getItem('events')
  console.log("tam:" + events.length);
  events.push({"num":events.length,
	"text":req.body.event.text,
	"img":req.body.event.img,
	"sorte":{
	 "text":req.body.sorte.text, 
	 "img":req.body.sorte.text
	 },
	"reves":{
	 "text":req.body.reves.text, 
	 "img":req.body.reves.text
	 }
  });
  storage.setItem('events',events);
  console.log("adicionado com sucesso! tam:" + events.length);
  res.render('newevent')
};

exports.newget = function(req, res){
  res.render('newevent');
};


exports.turn = function(req, res) {
  var events = storage.getItem('events')
  
  var random_n = Math.floor(Math.random() * events.length) 
  var event = events[random_n]
  
  var prev = req.params.prev
  if(prev > events.length || prev < 0)
    res.render('init')
  var dado = Math.floor(Math.random()*2)//0 ou 1: 0 azar, 1 sorte
  if(dado == 1)
    var outcome = events[prev].sorte
  if(dado == 0)
    var outcome = events[prev].reves 
    
  res.render('index', { title: 'Sorte ou Reves?',
                        outcome: outcome,
                        event: event			 
            });
};
