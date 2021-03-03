var UserProfile = (function() {
    var getUsername = function() {
        return localStorage.getItem('username');    
    };
  
    var setUsername = function(name) {
        localStorage.setItem('username', name)
    };

    var getEmail = function(){
        return localStorage.getItem('email');
    }
    var setEmail = function(email){
        localStorage.setItem('email', email)
    }
    var clear = function(){
        localStorage.removeItem('username')
        localStorage.removeItem('email')
    }
  
    return {
        getUsername: getUsername,
        setUsername: setUsername,
        setEmail: setEmail,
        getEmail: getEmail,
        clear: clear
    }
  })();
  
  export default UserProfile;