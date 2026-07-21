
// =================================
// FIRE & SMOKE BBQ
// MAIN JAVASCRIPT
// =================================


// =================================
// MOBILE MENU
// =================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// Open and close mobile menu

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when clicking a navigation link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// =================================

document.addEventListener("click", function (event) {

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        navLinks.classList.remove("active");

    }

});


// =================================
// NAVBAR EFFECT ON SCROLL
// =================================

const header = document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =================================
// BACK TO TOP BUTTON
// =================================


// Create button

const backToTop = document.createElement("button");


// Button content

backToTop.innerHTML = "↑";


// Add CSS class

backToTop.classList.add("back-to-top");


// Accessibility

backToTop.setAttribute(
    "aria-label",
    "Back to top"
);


// Add button to page

document.body.appendChild(backToTop);


// =================================
// SHOW / HIDE BACK TO TOP
// =================================

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


// =================================
// BACK TO TOP ACTION
// =================================

backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =================================
// RESERVATION FORM
// =================================

const reservationForm =
    document.querySelector("#reservation-form");

const reservationMessage =
    document.querySelector("#reservation-message");


reservationForm.addEventListener("submit", function (event) {

    // Prevent page reload

    event.preventDefault();


    // Get form values

    const name =
        document.querySelector("#name").value.trim();

    const phone =
        document.querySelector("#phone").value.trim();

    const guests =
        document.querySelector("#guests").value;

    const date =
        document.querySelector("#date").value;

    const time =
        document.querySelector("#time").value;

    const message =
        document.querySelector("#message").value.trim();


    // Format date

    const formattedDate =
        new Date(date + "T00:00:00")
        .toLocaleDateString("en-US");


    // Create reservation message

  
// Create reservation message

let whatsappMessage =

    `NEW RESERVATION - FIRE & SMOKE BBQ\n\n` +

    `Name: ${name}\n` +

    `Phone: ${phone}\n` +

    `Guests: ${guests}\n` +

    `Date: ${formattedDate}\n` +

    `Time: ${time}`;


// Add additional message

if (message !== "") {

    whatsappMessage +=

        `\n\nAdditional Request:\n${message}`;

}




    // WhatsApp number

    const whatsappNumber =
        "50253461308";


    // Encode entire message

    const encodedMessage =
        encodeURIComponent(whatsappMessage);


    // Create WhatsApp URL

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


    // Show confirmation message

    reservationMessage.style.display =
        "block";


    // Open WhatsApp

    setTimeout(function () {

        window.open(
            whatsappURL,
            "_blank"
        );

    }, 800);


});

