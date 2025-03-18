let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
// Funkcija za pomicanje slajdova
function moveSlide(direction) {
    // Sakrij trenutnu sliku
    slides[currentSlide].style.display = "none";

    // Računanje nove pozicije slajda
    currentSlide += direction;

    // Petlja na kraju
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Petlja na početku
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Prikazivanje nove slike
    slides[currentSlide].style.display = "flex";

    // Animacija (klizanje) slika
    if (direction > 0) {  // Ako pomičemo prema naprijed
        slides[currentSlide].classList.add("slide-left");
    } else {  // Ako pomičemo prema nazad
        slides[currentSlide].classList.add("slide-right");
    }
}

// Event listeneri za strelice
document.querySelector(".next").addEventListener("click", function () {
    moveSlide(1); // Pomakni na sljedeći slajd
});

document.querySelector(".prev").addEventListener("click", function () {
    moveSlide(-1); // Pomakni na prethodni slajd
});

// Inicijalno prikazivanje prve slike
slides[currentSlide].style.display = "flex";


