// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginBtn = loginForm.querySelector("button");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log(loginInput.value);
    console.log("click!!!");
}

loginBtn.addEventListener("click", onLoginBtnClick);

