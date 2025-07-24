
let userPassword = document.getElementById("userpassword") as HTMLInputElement;

let imgUser = document.getElementById("imgUser") as HTMLImageElement;


const password = () => {

    if (userPassword.type === "password") {
        userPassword.type = "text";
        imgUser.src = "image/img2.png"
        imgUser.style.top = "2px"
    } else {
        imgUser.src = "image/img1.png"
        userPassword.type = "password";
        imgUser.style.top = "6px"
    }

}