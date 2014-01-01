
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express',prev: 'aaa' });
};

var Sequelize = require('sequelize-sqlite').sequelize;
var db = new Sequelize("sorte", "sorteuser", "sortepassword",
    { dialect: "sqlite",
      logging: false,
      storage: "/home/vic/leozin/sorte/db" }); 

var Event = db.define("Event", {
  text: Sequelize.STRING,
  sorte: Sequelize.STRING,
  reves: Sequelize.STRING,
  img: Sequelize.STRING });

exports.turn = function(req, res) {
  var t = 'Sorte';
  var e = 'Monstro';
  res.render('index', { title: 'a',
			prev: req.query.prev,
                        turn: req.params.turn,
                        evento: e			 
});
};
