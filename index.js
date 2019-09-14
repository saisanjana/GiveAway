firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("forget_div").style.display = "none";
    document.getElementById("register_div").style.display = "none";
    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      // var user = firebase.auth().currentUser;
        window.location.href="E:\sih\blog.html";
      user.sendEmailVerification().then(function() {
        // Email sent.
        window.alert("Please check inbox : " + user.email);
      }).catch(function(error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage);
      })

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("forget_div").style.display = "block";
    document.getElementById("register_div").style.display = "block";
    

  }
});


function forgetPass(){
  var auth = firebase.auth();
  var emailAddress = document.getElementById("forget_email").value;

  auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
    window.alert("Please check Email inbox and reset password : " + emailAddress);
  }).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
function register(){
  var regEmail = document.getElementById("reg_email").value;
  var regPass = document.getElementById("reg_pass").value;
  firebase.auth().createUserWithEmailAndPassword(regEmail, regPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("Error : " + errorMessage);
  });


}

function logout(){
  firebase.auth().signOut();
}

function blog() {
  window.location = "blog-home.html";
  
}
function loging()
{
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().languageCode = 'pt';
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
