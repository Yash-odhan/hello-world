  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAmGzXjb19PQlORXyT4J3msHvnywHu3A2c",
    authDomain: "form-a5006.firebaseapp.com",
    projectId: "form-a5006",
    storageBucket: "form-a5006.appspot.com",
    messagingSenderId: "968167459125",
    appId: "1:968167459125:web:e9859c3500a4a8c22ee47c",
    measurementId: "G-QF1ZLEBJQW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();

  function signUp(){
	var email=document.getElementById("email");
	var password=document.getElementById("password");
	
	const promise=auth.createUserWithEmailAndPassword(email.value, password.value);
	promise.catch(e=>alert(e.message));
	alert("Welcome You have Successfully Signed Up");
	}
  function LogIn(){
	var email=document.getElementById("email");
	var password=document.getElementById("password");
	
	const promise=auth.signInWithEmailAndPassword(email.value, password.value);
	promise.catch(e=>alert(e.message));
	
	//Take user to homepage
	}
  function LogOut(){
	auth.signOut();
	alert("Thank You. Visit again.")
	}

  auth.onAuthStateChanged(function(user){
	if(user){
		var email=user.email;
		alert("Welcome to your page. You have successfully Logged In "+email);			
	}
	else{
		alert("No active User");
	}
	});
