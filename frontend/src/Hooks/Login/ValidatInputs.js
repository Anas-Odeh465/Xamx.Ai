export function validate_inputs(email){

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = {}

    if(email.trim() === ""){
        errors.email_error = "Please enter your email."
    }

    if(email.length > 255){
        errors.email_error = "Email is too long.";
    }

    else if(!email_pattern.test(email)){
        errors.email_error = "Please enter a vaild email."
    }

    return errors; 
}

export function validate_input_password(password, pageType){

    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    let errors = {}

    if(!pageType){
        if(password.trim() === ""){
           errors.password_error = "Please enter your password."
        }

        else if(password.length > 128){
            errors.password_error = "Password is too long.";
        }

        else if(!password_pattern.test(password)){
            errors.password_error = "Password must contain uppercase, lowercase, number and special character."
        }
    }else{
        if(password.trim() === ""){
            errors.password_error = "Please enter your password."
        }
    }

    return errors; 
}