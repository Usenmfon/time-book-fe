const section = document.getElementsByTagName("section")[0];
const token = localStorage.token;
const formEle = document.forms[0];
const BASE_URL = "https://clockin-be.onrender.com";
// const BASE_URL = "http://localhost:8080";

// const time = document.getElementsByTagName('div')[0];
// let geoLocation;

const successCallback = async(position) => {
  geoLocation(position.coords.latitude, position.coords.longitude);
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// let date = new Date();
// time.textContent = " Signed in at: " + date;
function geoLocation(latitude, longitude) {
  formEle.addEventListener("submit", function (event) {
    event.preventDefault();
    const code = event.target.code.value;
   
    fetch(`${BASE_URL}/org`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}`,
     "Content-Type": "application/json"},
      body: JSON.stringify({ org_code: code, latitude: latitude, longitude: longitude})
    })
      .then((res) => res.json())
      .then((data) => location.reload());
      // formEle.reset();
  });

}

fetch(`${BASE_URL}/org`, {
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
})
  .then((res) => res.json())
  .then((data) => {
    const code = document.createElement("p");
    code.textContent = "Organization code: " + data.org_code;
    
    section.append(code);
  });

fetch(`${BASE_URL}/user/profile`, {
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
})
  .then((res) => res.json())
  .then((data) => {
    const p = document.createElement("p");
    const name = document.createElement("p");
    p.textContent = data.email;
    name.textContent = "Organization Name: " + data.name;
    section.append(name, p);
  });
