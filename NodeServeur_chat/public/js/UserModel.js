class UserModel {
    static getType() { return "com.cpe.springboot.user.model.UserModel" }

    constructor({id, login,pwd,account,lastName,surName,email}) {
        this.id=id;
        this.login=login;
        this.pwd=pwd;
        this.account=account;
        this.lastName=lastName;
        this.surName=surName;
        this.email=email;
    }
    toString(){
        return "id :"+id +"login"+ this.login
    }
    
}

module.exports = UserModel;