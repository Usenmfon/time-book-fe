const auth_btn = document.getElementsByClassName("auth_btns")[0];
const extra_btn = document.getElementsByClassName("extra_btns")[0];
const signup_options = document.getElementsByClassName('signup_options')[0];
const signup = document.getElementById("signup");
const token = localStorage.token;
const BASE_URL = "https://clockin-be.onrender.com";
// const BASE_URL = "http://localhost:8080";

signup.addEventListener("click", function () {
    signup_options.style.display = "block";
});

// function handleGoogleAtuh(){
//     fetch(`${BASE_URL}/auth`, { method: "GET" })
//     .then((res) => res.json())
//     .then((data) => console.log());
// }

// function handleSignUpOrg(){
//     location.href = "./admin/index.html"
// }

function logout(){
    localStorage.token = null;
    location.reload();
}

function login(){
    location.href = "./auth/signin/index.html";
}

if(token == "null"){
    auth_btn.style.display = "block";
    extra_btn.style.display = "none";
}else{
    extra_btn.style.display = "block";
    auth_btn.style.display = "none";
}

function handleSignUp(role){
    localStorage.setItem("role", role)
    location.href = "./auth/signup/index.html";
}

// function onSignIn(googleUser){
//     console.log(googleUser.getBasicProfile())
// }
