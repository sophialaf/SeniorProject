function toggleFormVisibility() {
    var formContainer = document.getElementById("formContainer");

    if (formContainer.style.display === "none") {
        formContainer.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var getInvolvedButton = document.getElementById('gib');

    getInvolvedButton.addEventListener('click', function() {
        toggleFormVisibility();
    });
});

document.getElementById('getInvolvedForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('/submitForm', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Optional: Log the response from the server
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
