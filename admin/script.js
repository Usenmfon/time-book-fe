const form = document.forms[0];
const BASE_URL = "https://clockin-be.onrender.com";
// const BASE_URL = "http://localhost:8080";

form.addEventListener('submit', function(e){
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData.entries());
    SignUp(obj);
})

function SignUp(data){
    fetch(`${BASE_URL}/auth/signup`, {
        method: "Post",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(data => {
        localStorage.setItem("token", data.token);
        location.href = "./profile/index.html"
    })
}