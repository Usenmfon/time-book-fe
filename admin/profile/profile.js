const section = document.getElementsByTagName("section")[0];
const token = localStorage.token;
const formEle = document.forms[0];

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
   
    fetch("http://localhost:8080/org", {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}`,
     "Content-Type": "application/json"},
      body: JSON.stringify({ org_code: code, latitude: latitude, longitude: longitude})
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
}

fetch("http://localhost:8080/user/profile", {
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
})
  .then((res) => res.json())
  .then((data) => {
    const p = document.createElement("p");
    const name = document.createElement("p");
    p.textContent = data.email;
    name.textContent = data.name;
    section.append(name, p);
  });
