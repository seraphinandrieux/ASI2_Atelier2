const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io');
const ioServer = io(server);

users = []; 
ioServer.on('connection', function(socket){
    console.log('a user connected');
    
    
    
    socket.on('setNewUser', function(data) {
        // Do stuff    
        //socket.emit('getNewUser', data);  
        //ioServer.emit('broadcast',"a new user is connected");
        //socket.join(toString(data.id));
        

        users.push({
            idSocket : socket.id,
            idRoom    : data.id,
            username : data.login
            
        });

        let len = users.length;
        len--;

        
        ioServer.emit('getNewUser', users,users[len].userName);
    });

    socket.on('INVITATION_BATTLE',function(data,msgInvitation,senderUser){
        let resp;
        resp = {
            msg:msgInvitation,
            sender:socket.id,
            senderUser:senderUser
        }
        socket.broadcast.to(data.idSocket).emit('SEND_INVITATION_BATTLE',
        resp);
        /*ioServer.to(toString(data.idRoom)).emit('SEND_INVITATION_BATTLE',
        msgInvitation);*/
    });

    

    socket.on('SEND_INVITATION_RESPONSE',function(data){
        socket.broadcast.to(data.dest).emit('GET_INVITATION_RESPONSE',
        data);
        
    });

    socket.on('DISCONNECT',function(data){
        console.log(users);  
        for(let i=0; i < users.length; i++){
            
            if(users[i].idSocket === socket.id){
                users.splice(i,1); 
            }
        }
        console.log(users);
        ioServer.emit('updateUserList', users);
    });
        
});


server.listen(8089);