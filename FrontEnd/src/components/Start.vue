<template>
  <div class="body">
    <div class="top-slider" ref="slider">
      <div class="slider-track" ref="track">
        <img
          v-for="(img, index) in images"
          :key="index"
          :src="img"
          draggable="false"
        />
        <img
          v-for="(img, index) in images"
          :key="'clone-' + index"
          :src="img"
          draggable="false"
        />
      </div>
    </div>

    <div class="heading">
      <h1>Willkommen bei den Löschzwergen!</h1>
    </div>

    <div class="wrapper content-section">
      <div class="box">
        <h2 class="box-heading">Feuerwehrauto</h2>
        <p>
          Weißt du schon, was alles auf einem Einsatzfahrzeug verladen ist? Mit
          dem <a href="/LoeschZwerge/car">interaktiven Feuerwehrauto</a> kannst
          du dir einen Einblick verschaffen.
        </p>
      </div>

      <div class="img-wrapper">
        <a href="/LoeschZwerge/car">
          <img class="image" src="images/lf10-front-sq.png" />
        </a>
      </div>
    </div>

    <div class="wrapper content-section">
      <div class="img-wrapper">
        <a href="/LoeschZwerge/quiz">
          <img class="image" src="images/lz-quiz-icon.png" />
        </a>
      </div>

      <div class="box">
        <h3 class="box-heading">Quiz</h3>
        <p>
          Hier kannst du dein Wissen auf die Probe stellen! Bei unseren
          <a href="/LoeschZwerge/quiz">Quizzes</a> werden interessante Fragen
          zur Feuerwehr gestellt. Kannst du sie richtig beantworten?
        </p>
      </div>
    </div>

    <div class="wrapper content-section">
      <div class="box">
        <h4 class="box-heading">Lernvideos</h4>
        <p>
          Spannende Videos zum Thema Feuerwehr findest du
          <a href="/LoeschZwerge/lernvideos">hier</a>.
        </p>
      </div>

      <div class="img-wrapper">
        <a href="/LoeschZwerge/lernvideos">
          <img class="image" src="images/lz-videos-icon.png" />
        </a>
      </div>
    </div>

    <div class="wrapper content-section">
      <div class="img-wrapper">
        <a href="/LoeschZwerge/hydrantdemo">
          <img class="image" src="images/hydrantenschild.png" />
        </a>
      </div>

      <div class="box">
        <h5 class="box-heading">Hydrantenspiel</h5>
        <p>
          Die Feuerwehr braucht deine Hilfe! Die Mannschaft will eine
          Wasserversorgung aufbauen, kannst du den
          <a href="/LoeschZwerge/hydrantdemo">Hydranten</a> finden?
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = [
  "images/slider-images/img-1.jpg",
  "images/slider-images/img-2.jpg",
  "images/slider-images/img-3.jpg",
  "images/slider-images/img-4.jpg",
  "images/slider-images/img-5.jpg",
  "images/slider-images/img-6.jpg",
  "images/slider-images/img-7.jpg",
  "images/slider-images/img-8.jpeg",
  "images/slider-images/img-9.jpg",
];

const track = ref(null);
const slider = ref(null);

onMounted(() => {
  let offset = 0;
  const speed = 0.23;
  const trackEl = track.value;

  function animate() {
    offset -= speed;
    if (Math.abs(offset) >= trackEl.scrollWidth / 2) {
      offset = 0;
    }
    trackEl.style.transform = `translateX(${offset}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
</script>

<style scoped>
p {
  font-size: 1.2rem;
  line-height: 1.6;
}

a {
  color: rgb(128 149 243);
  text-decoration: none;
  transition: color 0.3s ease-out;
}

a:hover {
  color: rgb(179 197 255);
  transition: color 0.3s ease;
}

.body {
  padding-top: 5vw;
  display: flex;
  flex-direction: column;
  gap: 3vw;
  color: white;
  font-family: Consolas, monospace;
  padding-bottom: 7vw;
}

.heading h1 {
  color: white;
  text-align: center;
  font-size: 4rem;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 15vw;
  gap: 3vw;
}

.content-section {
  align-items: stretch;
}

.box {
  flex: 1 1 300px;
  background: linear-gradient(to top left, #161616, #414141);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 0 7px rgb(255 255 255 / 50%);
}

.box-heading {
  color: lightcoral;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.center {
  justify-content: center;
  text-align: center;
}

.image {
  height: 300px;
  transition: transform 0.3s ease-out;
}

.image:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.img-wrapper {
  display: flex;
  justify-content: center;
  width: 33.5vw;
}

.top-slider {
  width: 100vw;
  height: 230px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 5px 10px rgb(255 255 255 / 70%);
}

.slider-track {
  display: flex;
  height: 100%;
  will-change: transform;
}

.slider-track img {
  height: 100%;
  flex-shrink: 0;
  width: auto;
  pointer-events: none;
  user-select: none;
  margin-right: 5px;
}
</style>
