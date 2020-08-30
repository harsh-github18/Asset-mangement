function Register()
{
    var name = document.forms["RegForm"]["Name"].value;    
    var phone = document.forms["RegForm"]["Number"].value;  
    var username =  document.forms["RegForm"]["UserName"].value;  
    var password = document.forms["RegForm"]["Password"].value;
    var cpassword = document.forms["RegForm"]["ConfirmPassword"].value;

    if (name == null || name == '')                                  
    { 
        window.alert("Please enter your name.");  
        return false; 
    } 

    if (phone == null || phone == '')                               
    { 
        window.alert("Please enter your mobile number.");  
        return false; 
    } 
    
    if (username == null || username == '')                                   
    { 
        window.alert("Please enter a valid username."); 
        return false; 
    } 

    if (password == null || password == '')                        
    { 
        window.alert("Please enter your password"); 
        return false; 
    } 

    if (cpassword == null || cpassword == '')                  
    { 
        alert("Please enter your confirm password."); 
        return false; 
    } 

    if(password.length < 8)
    {
        alert("Password is less than 8 charactor");
        return false;
    }

    if(password != cpassword)
    {
        alert("Confirm Password is different");
        return false;
    }

    return true;
}