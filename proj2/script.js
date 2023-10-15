document.addEventListener('DOMContentLoaded', function () {
    var getInvolvedButton = document.getElementById('gib');
    var submitButton = document.getElementById('submitButton');
    var formContainer = document.getElementById('formContainer');

    getInvolvedButton.addEventListener('click', function () {
        formContainer.style.display = 'block';
    });

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