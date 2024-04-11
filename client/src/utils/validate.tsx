export interface registerDataError {
    allRequired : boolean;
    email : string;
    username : string;
    password : string;
    confirmPassword : string;

}

export const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

export const validRegisterData = (data : any): registerDataError=>{
    let err : registerDataError = {
        allRequired: false,
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    }
    if(!data){
        err.allRequired = true
    }
    if(!data.email){
        err.email = "Email must be provided"
    }else{
        const res = isValidEmail(data.email)
       if(!res){
        err.email = "Invalid email"
       }
    }
    if(!data.username){
        err.username = "Username must be provided"
    }
    if(!data.password){
        err.password = "Password must be provided"
    }
    if(data.password !== data.confirmPassword){
        err.confirmPassword = "Password did not match"
    }
    return err
}
