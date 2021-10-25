// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginBtn = loginForm.querySelector("button");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    if(username === "") {
        alert("Please write your name");
    } else if(username.length > 15) {
        alert("Your name is too long");
    }
    console.log(loginInput.value);
    console.log("click!!!");
}

loginBtn.addEventListener("click", onLoginBtnClick);

