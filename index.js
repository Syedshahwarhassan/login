function login() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  if (email == "jeevkumar579@gmail.com" && pass == "12345678") {
    swal("Welcome Back", email, "success", {
      button: "Continue",
    });
  } else {
    swal("Not Match", "Given data not found", "error");
  }
}
function signbtn() 
{
    var a=1;
    var name=document.getElementById('name').value;
    var email=document.getElementById('sign-email').value;
var pass=document.getElementById('sign-password').value;
if(pass.length = 6){
    swal("Welcome" ,name ,"success");
}    else{
    swal("Error","Password have max 6 Character", "error");
}
}
function loginbtn() {
        var y=document.getElementById("login-back-");
    if(y.style.display=="none"){
        y.style.display="block";
    }else{
        y.style.display="block";
    }
  var x = document.getElementById("sign-form-");
  if (x.style.display == "none") {
    x.style.display = "block";
    document.getElementById("login-back-").style.height="20%";
    document.getElementById("login-back-").style.width="20%";
    // document.getElementById("login-back-").style.backgroundColor="rgba(0,0,0,0.6)";
    document.getElementById("login-form-").style.display = "none";
    document.getElementById("loginbtn").style.backgroundColor = "white";
    document.getElementById('loginbtn').innerHTML="Sign In";
    document.getElementById('cancelbtn').style.display="block";


  } else {
    var y=document.getElementById("login-back-");
    if(y.style.display=="none"){
        y.style.display="block";
    }else{
        y.style.display="block";
    }
    var y=document.getElementById("login-back-").style.display="block;";
    x.style.display = "none";

    document.getElementById("login-form-").style.display = "block";
    document.getElementById("loginbtn").style.backgroundColor = "lightgray";
    document.getElementById('loginbtn').innerHTML="Login";
    document.getElementById('cancelbtn').style.display="block";
    
}
}
function cancelbtn() {
    document.getElementById("login-back-").style.display="none";
    
}



// function loginbtn() {
//     var x = document.getElementById("login-form-");
//     if (x.style.display == "none") {
//       x.style.display = "block";
//       document.getElementById("sign-form-").style.display = "none";
//       document.getElementById("loginbtn").style.backgroundColor = "white";}
//     // } else {
//     //   x.style.display = "none";
  
//     //   document.getElementById("sign-form-").style.display = "block";
//     //   document.getElementById("signbtn").style.backgroundColor = "lightgray";
//     // }
//   }
