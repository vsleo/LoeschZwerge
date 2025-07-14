<!-- <template>
  <div class="image-wrapper">
    <div class="image-container">
      <img
        src="images/Feuerwehrauto-LF10.svg"
        alt="Feuerwehrauto"
        class="firetruck"
      />

      <!-- Sichtbarer Hotspot (prozentual positioniert)
      <a
        href="/LoeschZwerge/g1"
        class="hotspot"
        style="top: 42%; left: 47%; width: 14%; height: 20%"
      >
        RolltorTH
      </a>
      <a
        href="/LoeschZwerge/g3"
        class="hotspot"
        style="top: 42%; left: 62%; width: 12.5%; height: 19%"
      >
        RolltorAGT
      </a>
      <a
        href="/LoeschZwerge/g5"
        class="hotspot"
        style="top: 42%; left: 75.7%; width: 13%; height: 20%"
      >
        RolltorAT
      </a>
      <a
        class="hotspot sirene-hotspot"
        style="top: 36.2%; left: 9.7%; width: 2.3%; height: 1.9%"
      >
        Sirene
        <img
          src="images/Sirene-Animation.gif"
          alt="Sirene"
          class="sirene-gif"
        />
      </a>
    </div>
  </div>
</template> -->

<template>
  <div class="image-wrapper">
    <div class="image-container">
      <img
        :src="images[currentIndex].image"
        alt="Feuerwehrauto"
        class="firetruck"
      />

      <a
        v-for="(hotspot, index) in images[currentIndex].hotspots"
        :key="index"
        :class="['hotspot', currentIndex === 3 ? 'hotspot-front' : '']"
        :href="hotspot.href"
        :style="{
          top: hotspot.top,
          left: hotspot.left,
          width: hotspot.width,
          height: hotspot.height,
        }"
      >
        {{ hotspot.label }}

        <div v-if="currentIndex === 3" class="front-box" style="left:-80%">
          <h1 class="box-heading">LF-10</h1>
          <p class="box-paragraph">
            Das abgebildete Fahrzeug basiert auf dem 26/42/1, dem LF-10 (Löschgruppenfahrzeug) des LB26 Eschringen.<br>
            Ein Löschgruppenfahrzeug ist für Brände und einfache technische Hilfeleistungen ausgestattet.
            Das Fahrzeug kann eine Löschgruppe unterbringen, was einer Mannschaft von 9 Personen entspricht.
          </p>
        </div>

        <div v-if="currentIndex === 3" class="front-box" style="left:180%">
          <h2 class="box-heading">Technische Daten</h2>
          <p class="box-paragraph">
             Leergewicht:<br>
             Gesamtgewicht: 14t<br>
             Leistung:<br>
             Pumpe: FPN 10-1000<br>
             Wassertank: 1200l<br>
             Schaumtank: 120l<br>
             Fahrgestell: Volvo<br>
             Aufbau: Schlingmann
          </p>
        </div> 
      </a>
    </div>
    <!-- Navigation -->
    <button class="nav-button left" @click="prev">
      <img src="images/arrow_left.png" />
    </button>
    <button class="nav-button right" @click="next">
      <img src="images/arrow_right.png" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentIndex = ref(3);

const images = [
  {
    image: "images/LF-10/Feuerwehrauto-LF10-left.png",
    hotspots: [
      {
        top: "35%",
        left: "48.5%",
        width: "16.8%",
        height: "24.5%",
        href: "/LoeschZwerge/g1",
        label: "G1",
      },
      {
        top: "35%",
        left: "66%",
        width: "15.3%",
        height: "22.6%",
        href: "/LoeschZwerge/g3",
        label: "G3",
      },
      {
        top: "35%",
        left: "82%",
        width: "16%",
        height: "24.5%",
        href: "/LoeschZwerge/g5",
        label: "G5",
      },
    ],
  },
  {
    image: "images/LF-10/Feuerwehrauto-LF10-rear.png",
    hotspots: [
      {
        top: "33%",
        left: "42.4%",
        width: "15.3%",
        height: "26%",
        href: "/LoeschZwerge/gr",
        label: "GR",
      },
    ],
  },
  {
    image: "images/LF-10/Feuerwehrauto-LF10-right.png",
    hotspots: [
      {
        top: "35%",
        left: "34.7%",
        width: "16.8%",
        height: "24.5%",
        href: "/LoeschZwerge/g2",
        label: "G2",
      },
      {
        top: "35%",
        left: "18.7%",
        width: "15.3%",
        height: "22.6%",
        href: "/LoeschZwerge/g4",
        label: "G4",
      },
      {
        top: "35%",
        left: "2%",
        width: "16%",
        height: "24.5%",
        href: "/LoeschZwerge/g6",
        label: "G6",
      },
    ],
  },
  {
    image: "images/LF-10/Feuerwehrauto-LF10-front.png",
    hotspots: [
      {
        top: "30.5%",
        left: "32.3%",
        width: "35.9%",
        height: "39.2%",
        label: ""
      }
    ]
  },
];

function prev() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % images.length;
}
</script>

<style scoped>

.image-wrapper {
  max-width: 52vw;
  margin: 0 auto;
}

/* Container mit relative Position & Responsive Verhalten */
.image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
}

/* Das Bild füllt 100% des Containers */
.firetruck {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.sirene-hotspot .sirene-gif {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  object-fit: contain;
  display: none; /* Anfangs unsichtbar */
  pointer-events: none;
  z-index: 20;
}

.sirene-hotspot:hover .sirene-gif {
  display: block;
}

.nav-button {
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.left {
  left: 5%;
}

.right {
  right: 5%;
}

.nav-button img {
  transition: transform 0.2s ease;
}

.nav-button:hover img {
  transform: scale(1.03);
  cursor: pointer;
}

/* Hotspot-Boxen */
.hotspot {
  position: absolute;
  background-color: transparent; /* Keine Farbe */
  border: none; /* Kein Rahmen */
  color: transparent; /* Text unsichtbar */
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
}

.hotspot:hover {
  color: #fff; /* Textfarbe beim Hover */
  background-color: rgb(0 0 0 / 50%); /* Halbtransparenter Hintergrund */
}

.hotspot.hotspot-front {
  color: #fff;
  background-color: transparent;
  cursor: help;
}

.hotspot-front:hover .front-box {
  visibility: visible;
  opacity: 1;
}

.front-box {
  position: absolute;
  height: 110%;
  width: 80%;
  transform: translateX(-50%);
  background: linear-gradient(to top, #111111, #3e3e3e);
  color: white;
  padding: 8px 20px;
  box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  white-space: nowrap;
  z-index: 20;
  font-size: 0.9rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: none;

  white-space: normal; /* allow text wrapping */
  overflow-wrap: break-word;
  word-wrap: break-word;
}

.box-heading {
  color: lightcoral;
  font-size: 1.5rem;
}

.box-paragraph {
  font-size: 1rem;
  text-align: left;
}


</style>
