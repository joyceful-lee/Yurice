import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 1000,
    offset: 100,
});

var modal = document.getElementById("myModal");
var img = document.querySelectorAll(".sub img");
var modalImg = document.getElementById("img01");

img.forEach((imgA) => {
    imgA.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    )
});

var span = document.getElementsByClassName("close-full")[0];
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}