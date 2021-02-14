class Auth{
    constructor(){
        this.authenticated = false;
    }
    login(cb) {
        // Put login method here
        this.authenticated = true;
        cb()
    }
    
    logout(cb){
        // Put log out call to server logic here
        this.authenticated = false;
        cb()
    }
    isAuthenticated(){
        // Put session from server logic here
        return this.authenticated;
    }
}

// Singleton pattern
export default new Auth()