const time = document.getElementsByTagName('div')[0];

const successCallback = (position) => {
    console.log(position);
}

const errorCallback = (error) => {
    console.log(error)
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback)

let date = new Date();
time.textContent = " Signed in at: " + date;