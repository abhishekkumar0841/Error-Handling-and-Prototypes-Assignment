class User {
  constructor(userName, password) {
    this.userName = userName;
    this._password = password;
  }

  getPassword(){
    return this._password.replace(/./g, "*")
  }

  setPassword(newPassword){
    if(newPassword.length >= 8 && /\d/.test(newPassword) && /[A-Z]/.test(newPassword)){
        this._password = newPassword;
    }else{
        console.log("Error : Password must be at least 8 characters long and contain at least one number and one uppercase latter.")
    }
  }
}

const user = new User("abhi", "Abhishek@3000030");
console.log(user.getPassword());

// trying to set invalid password less than 8 character
user.setPassword("Abhis");

// trying to set invalid password greater than 8 character
user.setPassword("Abcd1919");

// Test the set password it is set or not
console.log(user.getPassword());