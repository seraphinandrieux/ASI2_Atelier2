//Consumer
const stompit = require('stompit');
const UserModel = require('./public/js/UserModel');
var list="";


class consumer{

    constructor({destination, headers}) {
        this.headers = {
            persistent: true,
            _type: UserModel.getType()
        };
        if (headers) {
            Object.keys(headers).forEach((key) => { this.headers[key] = src[key]; });
        }

        this.headers.destination = destination;

    }

    userList(){
            stompit.connect({'host': 'localhost','port': 61613}, (error, client) => {

                if (error) {
                    return console.error(error);
                }

                client.subscribe(this.headers, (error, message) => {

                    if (error) {
                        returnconsole.error(error);        
                    }     

                    message.readString('utf-8', (error, body) => {

                        if (error) {
                            return console.error(error);            
                        }
                        list=body;
                        });


        });

    });
    }
  getListUser(){
    return list;
}
    
}

module.exports = consumer;