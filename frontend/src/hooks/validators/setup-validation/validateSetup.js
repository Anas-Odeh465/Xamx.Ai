export function validateSetupProfile(data){
    const noSpacesPattern = /^(?!.*\s)/;
    const {name, age} = data;

    let errors = {}

    if((!name || String(name).trim() === "") && (!age || age === undefined || age === null || String(age).trim() === "")){
        errors.data = "Please enter your name and age."
    }else{
        if(!name || name.trim() === ""){
            errors.name = "Please enter your name."
        }else if(typeof name !== "string"){
            errors.name = "Please enter a vaild name."
        }else {
            const trimmedName = name.trim();
            const nameRegex = /^[a-zA-Z\s\u0600-\u06FF]+$/; 
            
            if (!nameRegex.test(trimmedName)) {
                errors.name = "Name can only contain letters.";
            } else if (trimmedName.length < 3) {
                errors.name = "Name is too short.";
            } else if (trimmedName.length > 38) {
                errors.name = "Name is too long.";
            }
        }

        if(!age || age === undefined || age === null || String(age).trim() === ""){
            errors.age = "Please enter your age."
        }if(!noSpacesPattern.test(age)){
            errors.age = "Age must not contain spaces.";
            return errors;
        }if(!Number.isInteger(Number(age))){
            errors.age = "Age must be a whole number.";
            return errors;
        }else {
            const ageNum = Number(age);

            if (isNaN(ageNum)) {
                errors.age = "Please enter your age as a number.";
            } else if (ageNum > 120 || ageNum <= 5) {
                errors.age = "Please enter your real age.";
            }
        }
    }

    return errors; 
}