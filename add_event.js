var storage = require('node-persist');

storage.initSync();

if(!storage.getItem('events')){
        storage.setItem('events',[]);
}

console.log("events: " + storage.getItem('events'));
               
var events = storage.getItem('events');

//fazer pagina p isso
events.push({"num":"0",//ler tam do bd
"text":"dragaozao",
"img":"http://2.bp.blogspot.com/-3SKoBSklqGI/UaDPID_bhII/AAAAAAAAD_U/XSF6H-jxTRk/s1600/dragao.jpg",
"sorte":{
 "text":"voce matou ele", "img":"http://wiki.advfn.com/images/br/a/a1/Ouro.png"},
"azar":{
 "text":"voce morreu", "img":"http://1.bp.blogspot.com/-6NLCUCgL148/UEEC4OmTmiI/AAAAAAAAC58/Erofb1Ynudw/s1600/fotos+de+esqueletos+05.jpg"}
});

storage.setItem('events',events);
console.log("events: " + storage.getItem('events'));
