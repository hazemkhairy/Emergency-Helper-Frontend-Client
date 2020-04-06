export class SignInUser {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

export class SignUpUser {
    constructor(firstName='',lastName='',phonenumber='',email='', password='',confirmpassword='' ) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.phonenumber=phonenumber;
        this.email = email;
        this.password = password;
        this.confirmpassword=confirmpassword;
        
    }
}