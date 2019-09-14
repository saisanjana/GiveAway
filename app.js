var db= firebase.firestore();


/*firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("forget_div").style.display = "none";
    document.getElementById("register_div").style.display = "none";
    var user = firebase.auth().currentUser;

    if(user != null){
        var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
       
      user.sendEmailVerification().then(function() {
        window.alert("Please check inbox : " + user.email);
      }).catch(function(error) {
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


} */

function blogpst() {
  var name2= document.getElementById("name1").value;
  var title2=document.getElementById("descname").value;
  var  descp2=document.getElementById("descp").value;
  
db.collection("users").doc("usr").set({
    name2: name,
    title: title2,
    descp: descp2
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
} 


db.collection("users").document(usr).onSnapshot(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
       row.innerHTML+="<div class='post-content-area'> <h3>"+doc.data().title+"</h3> <p>"+doc.data().descp"</p></div>"
    });
  }




  