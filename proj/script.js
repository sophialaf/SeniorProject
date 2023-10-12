const $ = require('jquery');

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('#topnav a');
    
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const page = event.target.getAttribute('href');
                getContent(page);
            });
        });
    
        function getContent(page) {
            fetch(page)
                .then(response => response.text())
                .then(data => {
                    document.querySelector('#content').innerHTML = data;
                });
        }
    
        var slides = $('.slideshow img');
        var currentIndex = 0;
    
        function showSlide(index) {
            slides.removeClass('active');
            slides.eq(index).addClass('active');
        }
    
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }
    
        setInterval(nextSlide, 3000);
    
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
    
        setInterval(function () {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, intervalTime);
    });
})