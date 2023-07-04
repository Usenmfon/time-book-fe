const button = document.getElementsByClassName("sign_up")[0];
const signup_options = document.getElementsByClassName('signup_options')[0];
const BASE_URL = "https://clockin-be.onrender.com";
// const BASE_URL = "http://localhost:8080";

button.addEventListener("click", function () {
    signup_options.style.display = "block";
});

function handleGoogleAtuh(){
    fetch(`${BASE_URL}/auth`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => console.log());
}

function handleSignUp(){
    location.href = "./admin/index.html"
}
