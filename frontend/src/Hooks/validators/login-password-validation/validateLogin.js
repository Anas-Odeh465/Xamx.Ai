export function validatePassword(password = ""){

    const trimmedPassword = password.trim();
    let errors = {}

    if(!trimmedPassword){
        errors.password = "Please enter your password.";
        return errors;
    }

    return errors; 
}