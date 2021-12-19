const firebaseConfig = {
    apiKey: "AIzaSyA4SQqCf3U2vvTr_Bkbfl3bHZnGNxr1SMI",
    authDomain: "inductionio-event.firebaseapp.com",
    projectId: "inductionio-event",
    storageBucket: "inductionio-event.appspot.com",
    messagingSenderId: "101950700286",
    appId: "1:101950700286:web:96dd44a34780fe43c143af",
    measurementId: "G-4DYMK46ZVJ",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

// Challenge completed notice
if (localStorage.getItem("fullName")) {
    const mainHolder = document.querySelector("main");
    mainHolder.innerHTML =
        "<h2>You already finished this challenge.<br/> Proceed for the other ones</h2>";
} else {
    // New Participant
    const loginForm = document.querySelector("#loginForm");
    const fullNameInput = document.querySelector(".fullName");
    const fullRollNumInput = document.querySelector(".fullRollNum");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        localStorage.setItem("fullName", fullNameInput.value);
        localStorage.setItem("fullRollNum", fullRollNumInput.value);
        location.assign("/pages/result.html");
    });
}
