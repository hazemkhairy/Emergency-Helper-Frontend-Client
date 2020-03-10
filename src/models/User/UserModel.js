export class SignInUser {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

export class SignUpUser {
    constructor(email, password , gender) {
        this.email = email;
        this.password = password;
        this.gender=  gender ;
    }
}