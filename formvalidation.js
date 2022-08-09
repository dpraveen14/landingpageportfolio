//display error code 
function seterror(id, error){
    
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
    element.getElementsByClassName('formerror')[0].style.color = "white";
    // element.getElementsByClassName('formerror')[0].style.fontsize = "30px";
}

function Validation(){
    var returnval =true;
//email validation
    var email = document.forms['Myform']['Email'].value;

    if( email.length > 20 ){
        seterror("email","*Email can not be more than 20 char!" )
        returnval = false;
    }
    if( email.length <= 0 ){
        seterror("email","*Enter email address!" )
        returnval = false;
    }
//Company validation
    var company = document.forms['Myform']['Compname'].value;

    if( company.length <= 0 ){
        seterror("Cname","*Field can not be empty!" )
        returnval = false;
    }
//password evaluation
    var password = document.forms['Myform']['Compname'].value;

    if( password.length >= 8 ){
        seterror("password","*Password must be 8 charecter!" )
        returnval = false;
    }
    if( password.length <= 0 ){
        seterror("password","*Please Enter Password!" )
        returnval = false;
    }
   return returnval;
}
