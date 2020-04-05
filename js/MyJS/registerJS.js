$(document).ready(function () {
    $.ajax({
        type:"GET",
        url: SERVER_URL+"/national",
        dataType: "json",
        success: function (data) {
            var str ="<div><select>"
            for(i=0;i<data.data.length;i++){
                str +="<option value='"+data.data[i].nationalDtlName+"'>"+data.data[i].nationalDtlName+"</option>";
            }
            str +="</select></div>"
            $("#nation").html(str)
        }
    });
})
function showProvince(nationInput) {
    $.ajax({
        type: "GET",
        url: SERVER_URL+"/province/"+nationInput,
        dataType: "json",
        success: function (data) {
            var str ="<div><select>"
            for(i=0;i<data.data.length;i++){
                str +="<option value='"+data.data[i].provinceDtlName+"'>"+data.data[i].provinceDtlName+"</option>";
            }
            str +="</select></div>"
            $("#province").html(str);
        }
    });
}
function showCity(provinceInput) {
    $.ajax({
        type: "GET",
        url: SERVER_URL+"/city/"+provinceInput,
        dataType: "json",
        success: function (data) {
            var str ="<div><select>"
            for(i=0;i<data.data.length;i++){
                str +="<option value='"+data.data[i].cityDtlName+"'>"+data.data[i].cityDtlName+"</option>";
            }
            str +="</select></div>"
            $("#city").html(str);
        }
    });
}

function registerUser() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeatPassword = document.getElementById("repeatPassword").value;
    let IdNumber = document.getElementById("IdNumber").value;
    let cityName = document.getElementById("city").value;
    let roleDesc = document.getElementById("role").value;
    console.info(firstName+lastName+email+password+repeatPassword+IdNumber+cityName+roleDesc);
    if(password == repeatPassword){
        $.ajax({
            type: "POST",
            url: SERVER_URL+"/user?IdNumber="+IdNumber+
                "&Password="+password+"&email="+email+"&firstName="+firstName+
                "&lastName="+lastName+"&roleDesc="+roleDesc+"&cityName="+cityName+"&department",
            dataType: "json",
            success: function (data) {
                if(data.code == 0){
                    console.log(data);
                    window.location.href="login.html";
                }else {
                    console.log(data.msg);
                }
            }
        });
    }else {
        alert("password are not same");
    }
}