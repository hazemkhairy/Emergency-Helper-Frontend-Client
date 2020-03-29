export class SignInUser {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

export class SignUpUser {
    constructor(firstname='',lastname='',phonenumber='',email='', password='',confirmpassword='' ) {
        this.firstname=firstname;
        this.lastname=lastname;
        this.phonenumber=phonenumber;
        this.email = email;
        this.password = password;
        this.confirmpassword=confirmpassword;
        
    }
}