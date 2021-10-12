 function validation()  
            {  
                var id=document.f1.user.value;  
                var ps=document.f1.pass.value;  
                if(id.length=="" && ps.length=="") {  
                    alert("User Name and Password fields are empty");  
                    return false;  
                }  
                else  
                {  
                    if(id.length=="") {  
                        alert("User Name is empty");  
                        return false;  
                    }   
                    if (ps.length=="") {  
                    alert("Password field is empty");  
                    return false;  
                    }  
                }                             
            }  

//   function signUp(){
// 	var email=document.getElementById("email");
// 	var password=document.getElementById("password");
	
// 	const promise=auth.createUserWithEmailAndPassword(email.value, password.value);
// 	promise.catch(e=>alert(e.message));
// 	alert("Welcome You have Successfully Signed Up");
// 	}
//   function LogIn(){
// 	var email=document.getElementById("email");
// 	var password=document.getElementById("password");
	
// 	const promise=auth.signInWithEmailAndPassword(email.value, password.value);
// 	promise.catch(e=>alert(e.message));
	
// 	//Take user to homepage
// 	}
//   function LogOut(){
// 	auth.signOut();
// 	alert("Thank You. Visit again.")
// 	}

//   auth.onAuthStateChanged(function(user){
// 	if(user){
// 		var email=user.email;
// 		alert("Welcome to your page. You have successfully Logged In "+email);			
// 	}
// 	else{
// 		alert("No active User");
// 	}
// 	});
