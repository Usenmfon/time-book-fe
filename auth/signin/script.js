const form = document.forms[0];
const BASE_URL = "https://clockin-be.onrender.com";
// const BASE_URL = "http://localhost:8080";

form.addEventListener('submit', function(e){
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData.entries());
    SignIn(obj);
})

function SignIn(data){
    fetch(`${BASE_URL}/auth/signin`, {
        method: "Post",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(data => {
        localStorage.setItem("token", data.token);
        if(data.role === "org"){
            location.href = "../../admin/profile/index.html";
        }else{
            location.href = "../../users/profile/index.html";
        }
    })
}