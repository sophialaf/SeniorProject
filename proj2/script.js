function toggleFormVisibility() {
    var formContainer = document.getElementById("formContainer");
    var thankYouMessage = document.getElementById("thankYouMessage");

    if (formContainer.style.display === "none" || formContainer.style.display === "") {
        formContainer.style.display = "none";
        thankYouMessage.style.display = "block";
    } else {
        formContainer.style.display = "block";
        thankYouMessage.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var getInvolvedButton = document.getElementById('gib');

    getInvolvedButton.addEventListener('click', function () {
        toggleFormVisibility();
    });

    document.getElementById('getInvolvedForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(this);

        fetch('/submitForm', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                console.log(data); // Optional: Log the response from the server
                toggleFormVisibility(); // Close the form
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
    var slides = document.querySelectorAll('.slideshow img');
    var currentIndex = 0;

    function showSlide(index) {
        slides.forEach(function (slide) {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);

    var stickyOffset = document.getElementById('topnav').offsetTop;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= stickyOffset) {
            document.getElementById('topnav').classList.add('sticky');
            document.getElementById('content').style.marginTop = document.getElementById('topnav').offsetHeight + 'px';
        } else {
            document.getElementById('topnav').classList.remove('sticky');
            document.getElementById('content').style.marginTop = '0';
        }
    });

