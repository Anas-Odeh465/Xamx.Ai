export function validatePassword({password = "", confirm = ""}){

    const mainPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    const noSpacesPattern = /^(?!.*\s)/;
    let errors = {}

    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirm.trim();

    if(!trimmedPassword){
        errors.password = "Please enter your password.";
        return errors;
    }

    if(!trimmedConfirmPassword){
        errors.confirm = "Please confirm your password.";
        return errors;
    }
    
    if(trimmedPassword.length < 8){
        errors.password = "Password must be at least 8 characters.";
        return errors;
    }

    if(trimmedPassword.length > 128){
        errors.password = "Password is too long.";
        return errors;
    }

    if(!noSpacesPattern.test(trimmedPassword)){
        errors.password = "Password must not contain spaces.";
        return errors;
    }

    if(!mainPattern.test(trimmedPassword)){
        errors.password = "Password must contain 8 characters uppercase, lowercase, number and special character.";
        return errors;
    } 

    if(trimmedConfirmPassword !== trimmedPassword){
        errors.confirm = "Passwords do not match.";
        return errors;
    }

    return errors; 
}