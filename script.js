const button = document.getElementsByClassName("sign_up")[0];
const signup_options = document.getElementsByClassName('signup_options')[0];

button.addEventListener("click", function () {
    signup_options.style.display = "block";
});

function handleGoogleAtuh(){
    fetch("http://localhost:8080/auth", { method: "GET" })
    .then((res) => res.json())
    .then((data) => console.log());
}

function handleSignUp(){
    location.href = "./admin/index.html"
}
