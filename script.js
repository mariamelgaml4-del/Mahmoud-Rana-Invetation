function openInvitation() {

    const welcomeScreen =
        document.getElementById("welcome-screen");

    welcomeScreen.style.display = "none";


    const music =
        document.getElementById("wedding-music");


    // Try to play the music
    music.play().catch(function () {

        console.log("Music playback requires user interaction.");

    });

}



// ==========================================
// SHOW WEDDING DETAILS
// ==========================================

function showDetails() {

    const details =
        document.getElementById("details");

    details.style.display = "block";

}



// ==========================================
// COUNTDOWN
// ==========================================

function updateCountdown() {


    // Friday, 20 August 2027 - 8:00 PM
    const weddingDate =
        new Date("August 20, 2027 20:00:00").getTime();


    const now =
        new Date().getTime();


    const difference =
        weddingDate - now;



    // If the wedding date has arrived
    if (difference <= 0) {

        document.getElementById("countdown").innerHTML =
            "<h2>It's our special day! ❤️</h2>";

        return;

    }



    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60))
            /
            1000
        );



    document.getElementById("days").textContent =
        days;


    document.getElementById("hours").textContent =
        hours;


    document.getElementById("minutes").textContent =
        minutes;


    document.getElementById("seconds").textContent =
        seconds;

}



// Start countdown
updateCountdown();


// Update every second
setInterval(
    updateCountdown,
    1000
);



// ==========================================
// GUEST WHATSAPP MESSAGE
// ==========================================

document
    .getElementById("sendMessage")
    .addEventListener("click", function () {


        const message =
            document
                .getElementById("guestMessage")
                .value;


        const status =
            document.getElementById("messageStatus");



        // Check if message is empty
        if (message.trim() === "") {

            alert(
                "Please write a message first."
            );

            return;

        }



        // WhatsApp phone number
        const phoneNumber =
            "201289330859";



        // Create WhatsApp link
        const whatsappURL =
            "https://wa.me/" +
            phoneNumber +
            "?text=" +
            encodeURIComponent(message);



        // Open WhatsApp
        window.open(
            whatsappURL,
            "_blank"
        );


        // Clear message box
        document
            .getElementById("guestMessage")
            .value = "";


        status.textContent =
            "Your message is ready to send ❤️";

    });