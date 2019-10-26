//Créer un serveur HTTP avec express qui sert le contenu statique contenu dans un répertoire

var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io');
var ioServer = io(server);
var express = require('express');
var cors = require('cors');
const corsOptions={
	origin: true,
	credentials:true,
}
app.use(express.static('public'));
//app.use(cors(corsOptions));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", 'http://localhost:3333'); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });


const axios = require('axios').default;
var list_users = "";
const Consumer = require('./Consumer');
const headers = {destination: 'RESULT_BUS_MNG'};
const userConsumer = new Consumer(headers);

server.listen(3333);


//listen on every connection
ioServer.sockets.on('connection', function(socket){
	   //listen on new_user
	   console.log('connection')
	   axios.get("http://127.0.0.1:8082/usersList")  .then(function ({data}) {
		 userConsumer.userList();

	  }).catch(function (error) {
		console.log('Error ' + error.message)
	  });
	socket.on('new_user', function(pseudo ) {
		console.log('new_user')

		socket.pseudo=pseudo;
		console.log("list_users: "+list_users)
		list_users = userConsumer.getListUser();
		socket.emit('getListUsers',list_users);
		socket.broadcast.emit('new_user2', pseudo);
	
	
   });
 

   socket.on('message', function(message) {
	   console.log("message passe: "+message)
	socket.broadcast.emit('message', {pseudo: socket.pseudo, message: message}); 

	});

	/*socket.on('DISCONNECT',function(data){
         
        for(let i=0; i < users.length; i++){
            
            if(users[i].idSocket === socket.id){
                users.splice(i,1); 
            }
        }
        console.log(users);
        ioServer.emit('updateUserList', users);
    });*/
});

