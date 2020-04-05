function login() {
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    //console.log(email+password);
    $.ajax({
        type: "GET",
        url: SERVER_URL+"/user?email="+email+"&Password="+password,
        dataType: "json",
        success: function (data) {
            if (data.code === 0){
                sessionStorage.setItem("userEmail",data.data.userEmail);
                window.location.href="login.html";
            }else {
                confirm(data.msg);
            }
        }
    });
}

function resetPassword() {
    let email = document.getElementById("emailToResetPassword").value;
    $.ajax({
        type: "POST",
        url: SERVER_URL+"/user/"+email+"/12345678",
        dataType: "json",
        success: function (data) {
            if (data.code === 0){
                confirm("your Password is Reset to 12345678.");
                window.location.href="login.html";
            }else {
                confirm(data.msg);
            }
        }
    });
}