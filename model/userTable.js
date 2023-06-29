class UserTable{
    static usersList = []
    static saveUser = async  (user)=>{
        //console.log(user)
        this.usersList.push(user)
        console.log(this.usersList)
    }

    static getAllUsers = async()=>{
        return this.usersList
    }

    static findUserByEmail= async(email)=>{
        return null;
    }
}



export default UserTable