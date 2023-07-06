
const section = document.getElementsByTagName("section")[0];
const token = localStorage.token;
const formEle = document.forms[0];
const BASE_URL = "https://clockin-be.onrender.com";
// const BASE_URL = "http://localhost:8080";



fetch(`${BASE_URL}/record/all`, {
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    // const code = document.createElement("p");
    // code.textContent = "Organization code: " + data.org_code;
    
    // section.append(code);
  });

// fetch(`${BASE_URL}/user/profile`, {
//   method: "GET",
//   headers: { Authorization: `Bearer ${token}` },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     const p = document.createElement("p");
//     const name = document.createElement("p");
//     p.textContent = data.email;
//     name.textContent = "Organization Name: " + data.name;
//     section.append(name, p);
//   });
