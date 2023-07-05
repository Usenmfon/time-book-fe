const section = document.getElementsByTagName("section")[0];
const token = localStorage.token;
const formEle = document.forms[0];
const button = document.getElementsByTagName("button")[1];
// const BASE_URL = "https://clockin-be.onrender.com";
const BASE_URL = "http://localhost:8080";

// const time = document.getElementsByTagName('div')[0];
// let geoLocation;

const successCallback = async(position) => {
  geoLocation(position.coords.latitude, position.coords.longitude);
  console.log(position.coords.latitude, position.coords.longitude);
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// let date = new Date();
// time.textContent = " Signed in at: " + date;

formEle.addEventListener("submit", function(event){
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const obj = Object.fromEntries(formData.entries());
  
  fetch(`${BASE_URL}/user/profile/code`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}`,
   "Content-Type": "application/json"},
    body: JSON.stringify(obj)
  })
    .then((res) => res.json())
    .then(() => location.reload());
})

function geoLocation(latitude, longitude) {
    button.addEventListener("click", function(){
      console.log("clicked")
        fetch(`${BASE_URL}/record`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}`,
         "Content-Type": "application/json"},
          body: JSON.stringify({latitude: latitude, longitude: longitude})
        })
          .then((res) => res.json())
          // .then(() => location.reload());
    })
  }


fetch(`${BASE_URL}/record`, {
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
})
  .then((res) => res.json())
  .then((data) => {
    if(data.statusCode != 400){
      const time = document.getElementsByTagName("div")[0];
      time.textContent = "You came in today at: " + data.sign_in;
      section.append(time);
    }
  }).catch(e => console.log(e));


fetch(`${BASE_URL}/user/profile`, {
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
})
  .then((res) => res.json())
  .then((data) => {
    const p = document.createElement("p");
    p.textContent = data.email;
    section.append(p);
  });
