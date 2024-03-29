document.addEventListener('DOMContentLoaded', function () {
    // Get DOM elements
    var getInvolvedButton = document.getElementById('gib'); // Get "Get Involved" button
    var submitButton = document.getElementById('submitButton'); // Get submit button
    var formContainer = document.getElementById('formContainer'); // Get form container

    // Display form container when "Get Involved" button is clicked
    getInvolvedButton.addEventListener('click', function () {
        formContainer.style.display = 'block';
    });

    // Hide form container when submit button is clicked
    submitButton.addEventListener('click', function () {
        formContainer.style.display = 'none';
    });
});

function fillContent(url, elem) {
    // Remove 'current' class from all links
    document.querySelectorAll('#topnav a').forEach(link => {
        link.classList.remove('current');
        link.classList.add('notCurrent');
    });

    // Add 'current' class to the clicked link
    elem.classList.remove('notCurrent');
    elem.classList.add('current');

    // Fetch and display content
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector('#content').innerHTML = data;
        });
}

let slideIndex = 1;

window.onload = function () {
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
