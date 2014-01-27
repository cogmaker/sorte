
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express',prev: 'aaa' });
};

var storage = require('node-persist');

storage.initSync();

if(!storage.getItem('events')){
        storage.setItem('events',[]);
}
console.log("events: " + storage.getItem('events'));


exports.turn = function(req, res) {
  var events = storage.getItem('events')
  
  var random_n = Math.floor(Math.random() * events.length) 
  var event = events[random_n]
  
  var prev = req.params.prev
  if(prev > events.length || prev < 0)
    res.render('init')
  var dado = Math.floor(Math.random()*2)//0 ou 1: 0 azar, 1 sorte
  console.log("dado: " + dado);
  if(dado == 1)
    var outcome = events[prev].sorte
  if(dado == 0)
    var outcome = events[prev].azar 
    
  res.render('index', { title: 'Sorte ou Reves?',
                        outcome: outcome,
                        event: event			 
            });
};
