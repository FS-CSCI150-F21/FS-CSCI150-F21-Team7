function validateForm(){
    var user = document.fbox.userid;
    var passw = document.fbox.pass;
    var repass = document.fbox.check;
    var mail = document.fbox.email;
    var nam = document.fbox.nm;
    var gender = document.fbox.gender;
    var location = document.fbox.region;
    //alert("form is running");

    if(validateUserN(user,5,14)){
        if(validatePass(passw,repass,5,14)){
            if(validateEmail(mail)){
                if(validateName(nam)){
                    if(selectGender(gender)){
                        if(selectRegion(location)){
                            return false;
                        }
                    }
                }
            }
        }
    }
    
    /* Completed Tests
   if(validateUserN(user,5,14)){
       return false;
   } 
  
   if(validatePass(passw,repass,5,14)){
    return false;
   }

   if(validateEmail(mail)){
       return false;
   }
  
   if(validateName(nam)){
       return false;
   }
   
   
   if(selectGender(gender)){
       return false;
   }
   
   
   if(selectRegion(location)){
       return false;
   }
   */
}

function validateUserN(userid,min,mx){
    var len = userid.value.length;
    var letter = /^[0-9a-zA-Z]+$/;
    if(len == 0){
        alert("Must have a Username");
        userid.focus();
        return false;
    }
    if(len < min || len > max){
        alert("Username must be between 5 and 14");
        userid.focus();
        return false;
    }
    if(userid.value.match(letter)){
        return true;
    }
    else{
        alert("Username cannot have special characters");
        userid.focus();
        return false;  
    }
    
}

function validatePass(password,repass, min, max){
    var len = password.value.length;
    if(len == 0){
        alert("A PASSWORD is required");
        pass.focus();
        return false;
    }
    if(len < min || len > max){
        alert("Password must be between 5 and 14");
        pass.focus();
        return false;
    }
    if(repass != password){
        alert("Password must be confirmed / The ReEnter section must have the same password");
        check.focus();
        return false;
    }
    return true;
}

function validateEmail(email){// must fix
    var letters = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{1,4}$/;
    var len = email.value.length;
    if(len == 0){
        alert("Must enter an Email Address");
        email.focus();
        return false;
    }
    if(email.value.match(letters)){
        return true;
    }
    else{
        alert("Email cannot have special characters");
        email.focus();
        return false;
    }
}

function validateName(name){
    var len = name.value.length;
    if(len == 0){
        alert("Must enter a Name");
        name.focus();
        return false;
    }
}

function selectGender(gen){
    if(gen.value == "Default"){
        alert("Gender: Please Select from the List");
        gen.focus();
        return false;
    }
    else{
        return true;
    }
}

function selectRegion(locate){
    if(locate.value == "Default"){
        alert("Region: Please Select from the List")
        locate.focus();
        return false;
    }
    else{
        return true;
    }
}