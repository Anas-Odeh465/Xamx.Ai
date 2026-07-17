export function validateEmail(email){

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = {}

    if(!email || email.trim() === ""){
        errors.emailError = "Please enter your email."
        return errors; 
    }

    const trimmed = email.trim();

    if(trimmed.length > 255){
        errors.emailError = "Email is too long.";
        return errors;
    } 

    if(!emailPattern.test(trimmed)){
        errors.emailError = "Please enter a valid email."
    }

    return errors; 
}