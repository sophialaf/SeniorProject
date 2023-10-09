
var images = document.querySelectorAll('.slideshow img');
var currentIndex = 0;
var intervalTime = 3000; // 2 seconds

setInterval(function () {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}, intervalTime);

function fillContent(url, elem) {
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
                const item = event.target;
                getContent(event.target.id);
            }

            function getContent(page) {
                fetch(page+".html")
                    .then(response => response.text()) // we are expecting a text response
                    .then(data => {
                        document.querySelector('#content').innerHTML = data;
                        setMenuItem(page);
                    });
            }

            function setMenuItem(selectedItem) {
                for (i=0; i<listItems.length; i++) {
                    if (listItems[i].id == selectedItem) {
                        listItems[i].classList.add("item-selected");
                    } else {
                        listItems[i].classList.remove("item-selected");
                    }
                }
            }
