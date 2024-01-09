function login()
{
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    if(email=='jeevkumar579@gmail.com' && pass=="12345678"){
        swal('Welcome Back',email,'success',{
            button:'Continue'
        });

}else{

    swal('Not Match','Given data not found','error')
    
}

}