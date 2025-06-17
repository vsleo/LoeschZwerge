<template>
    <div class="body">
        <div class="heading" style="text-align: center;">
            <h1>
                Willkommen bei den Löschzwergen!
            </h1>
        </div>
        <div class="wrapper">
            <div>
                <p class="paragraph" style="text-align: center";>
                    Was genau ist die Feuerwehr? Und was macht sie überhaupt? Bei den Löschzwergen lernst du mit Spiel und Spaß alles rund ums Feuerwehrauto!
                </p>
            </div>
        </div>
        <div class="wrapper">
            <div class="box">
                <h1 class="heading" style="color:lightcoral;">
                    Die Feuerwehr
                </h1>
                <p class="paragraph">
                    Die Feuerwehr hat einige wichtige Aufgaben zu erfüllen.
                    Dazu gehören Brandschutz, technische Hilfeleistung und 
                    Katastrophenschutz - Dabei steht Menschenrettung immer 
                    an erster Stelle.
                </p>
            </div>
            <div>
                <div class="image-slider">
                    <img src="/images/slider-images/img-1.jpg" class="slide active" />
                    <img src="/images/slider-images/img-2.jpg" class="slide" />
                    <img src="/images/slider-images/img-3.jpg" class="slide" />
                </div>
            </div>
        </div>
    </div>
</template>




<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showNextSlide() {
    console.log('Switching slides')
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }

  setInterval(showNextSlide, 3000);
});
</script>




<style scoped>

.body {
    position: relative;
    top: 7vw;
}

.wrapper {
    display: flex;
    margin-left: 7vw;
    margin-right: 7vw;
}

.heading {
    color: white;
    font-size: x-large;
    font-family: Consolas, monospace;
}

.box {
    flex: 1;
    padding: 2rem;
    margin: 0 2vw;
    background: linear-gradient(to top left, #161616, #414141);
    border-radius: 12px;
    box-shadow: 2.5px 2.5px 2.5px #414141;
}

.paragraph {
    color: white;
    font-size: x-large;
    font-family: Consolas, monospace;
}

.image-slider {
  position: relative;
  width: 50vw;  
  height: 20vw;
  overflow: hidden;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide.active {
  opacity: 1;
  z-index: 1;
}

</style>