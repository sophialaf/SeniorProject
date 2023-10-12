document.addEventListener('DOMContentLoaded', function() {
    /*-----------------------------------------
    Navigation Event Listeners
    -----------------------------------------*/

    // Add an event listener to each navigation link
    const navLinks = document.querySelectorAll('#topnav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.getAttribute('href'); // Get the target route

            // Update content based on the selected route
            getContent(page);

            // Add logic to update the active navigation link if needed
            // ...
        });
    });

    function getContent(page) {
        /*-----------------------------------------
        Fetch Content for Selected Page
        -----------------------------------------*/

        // Fetch the content for the selected page
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.querySelector('#content').innerHTML = data;
            });
    }

    /*-----------------------------------------
    Image Slideshow Functionality
    -----------------------------------------*/

    var images = document.querySelectorAll('.slideshow img');
    var currentIndex = 0;
    var intervalTime = 3000; // 3 seconds

    setInterval(function () {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, intervalTime);

    // Add your other script code here...
});


/*-----------------------------------------
Form Display and Submission Handling
-----------------------------------------*/

var images = document.querySelectorAll('.slideshow img');
var currentIndex = 0;
var intervalTime = 3000; // 2 seconds

document.getElementById('gib').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('formContainer').style.display = 'block';
});

document.getElementById('getInvolvedForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    console.log(formData);
    fetch('http://localhost:3001/submitForm', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert('Thank you for your interest!');
        document.getElementById('formContainer').style.display = 'none';
        document.getElementById('getInvolvedBtn').style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
});


$(document).ready(function () {
    /*-----------------------------------------
    Image Slideshow Functionality (using jQuery)
    -----------------------------------------*/

    var slides = $('.slideshow img');
    var currentSlide = 0;

    function showSlide(index) {
        slides.removeClass('active');
        slides.eq(index).addClass('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);
});


$(document).ready(function () {
    /*-----------------------------------------
    Sticky Navigation
    -----------------------------------------*/

    var stickyOffset = $('#topnav').offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() >= stickyOffset) {
            $('#topnav').addClass('sticky');
            $('#content').css('margin-top', $('#topnav').height() + 'px');
        } else {
            $('#topnav').removeClass('sticky');
            $('#content').css('margin-top', '0');
        }
    });
});


setInterval(function () {
    /*-----------------------------------------
    Image Slideshow Functionality
    -----------------------------------------*/

    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}, intervalTime);


function fillContent(url, elem) {
    /*-----------------------------------------
    Content Filling Logic
    -----------------------------------------*/

    document.querySelector("#one").className = "notCurrent";//Changes menu all to black
    document.querySelector("#two").className = "notCurrent";
    document.querySelector("#three").className = "notCurrent";

    elem.className = "current";//Sets the current page to red highlight

    fetch(url)//fetches html for content for each page
        .then(function (response) { return response.text(); })
        .then(function (data) {
            document.querySelector('#content').innerHTML = data;
        });
}

/*---------------sturman code--------------------------------------------------*/
const listItems = document.querySelectorAll("#topnav li");
for (i=0; i<listItems.length; i++) {
    listItems[i].addEventListener("click", select);
}
getContent("home");

function select(event) {
    /*-----------------------------------------
    Navigation Item Selection Handling
    -----------------------------------------*/

    const item = event.target;
    getContent(event.taret.id);
}

function getContent(page) {
    /*-----------------------------------------
    Fetch Content for Selected Page (sturman code)
    -----------------------------------------*/

    fetch(page+".html")
        .then(response => response.text()) // we are expecting a text response
        .then(data => {
            document.querySelector('#content').innerHTML = data;
            setMenuItem(page);
        });
}

function setMenuItem(selectedItem) {
    /*-----------------------------------------
    Set Active Menu Item
    -----------------------------------------*/

    for (i=0; i<listItems.length; i++) {
        if (listItems[i].id == selectedItem) {
            listItems[i].classList.add("item-selected");
        } else {
            listItems[i].classList.remove("item-selected");
        }
    }
}
