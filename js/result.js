const fullName = localStorage.getItem("fullName");
const fullRollNum = localStorage.getItem("fullRollNum");

if (!fullName || !fullRollNum) {
    location.assign("/");
}

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

if (localStorage.getItem("challenge_done") === "true") {
    location.assign("/");
} else {
    const loading = document.querySelector(".loading");
    const success = document.querySelector(".success");
    const failure = document.querySelector(".failure");
    const main = document.querySelector("main");

    setTimeout(() => {
        loading.style.display = "none";
        main.style.display = "block";
        localStorage.setItem("challenge_done", "true");
        // Check adblock
        if (document.getElementById("ACuKYIxkzEtb")) {
            document.querySelector(".rickroll").innerHTML = `<iframe
                        width="500"
                        height="295"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1"
                        title="rICK rOLLED..."
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>`;
            failure.style.display = "block";
            firestore.collection("adblocked_failure").doc(fullRollNum).set({
                challenge: "AdBlocked??",
                fullRollNum: fullRollNum,
                fullName: fullName,
            });
        } else {
            success.style.display = "block";
            firestore.collection("adblocked_success").doc(fullRollNum).set({
                challenge: "AdBlocked??",
                fullRollNum: fullRollNum,
                fullName: fullName,
            });
        }
    }, 5000);
}
