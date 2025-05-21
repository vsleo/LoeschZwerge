<template>
  <div class="image-wrapper">
    <div class="image-container">
      <img
        src="images/Feuerwehrauto-LF10.svg"
        alt="Feuerwehrauto"
        class="firetruck"
      />

      <!-- Sichtbarer Hotspot (prozentual positioniert) -->
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
</template>

<style scoped>
.image-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding-left: 1.5vw;
  padding-bottom: 3vw;
}

/* Container mit relative Position & Responsive Verhalten */
.image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1; /* Annäherung an dein SVG; ggf. anpassen */
}

/* Das Bild füllt 100% des Containers */
.firetruck {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
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
</style>
