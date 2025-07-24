"use strict";
let userPassword = document.getElementById("userpassword");
let imgUser = document.getElementById("imgUser");
function password() {
    if (userPassword.type === "password") {
        userPassword.type = "text";
        imgUser.src = "image/img2.png";
        imgUser.style.top = "2px";
    }
    else {
        imgUser.src = "image/img1.png";
        userPassword.type = "password";
        imgUser.style.top = "6px";
    }
}
