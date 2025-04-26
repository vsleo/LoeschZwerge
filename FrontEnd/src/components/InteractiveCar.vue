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
        href="/LoeschZwerge/rolltorTH"
        class="hotspot"
        title="RolltorTH"
        style="top: 42%; left: 47%; width: 14%; height: 20%;"
      >
        RolltorTH
      </a>
      <a
        href="/LoeschZwerge/rolltorAGT"
        class="hotspot"
        title="RolltorAGT"
        style="top: 42%; left: 62%; width: 12.5%; height: 19%;"
      >
        RolltorAGT
      </a>
      <a
        href="/LoeschZwerge/rolltorAT"        
        class="hotspot"
        title="RolltorAT"
        style="top: 42%; left: 75.7%; width: 13%; height: 20%;"
      >
        RolltorAT
      </a>
      <a       
        class="hotspot sirene-hotspot"
        title="Sirene"
        style="top: 36%; left: 9.5%; width: 2.3%; height: 2%;"
      >
        Sirene
        <!-- <img src="images/sirene.gif" alt="Sirene" class="sirene-gif" /> -->
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
  background-color: lightgrey;
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
  border: 2px solid red;
  background-color: rgba(255, 0, 0, 0.2);
  color: black;
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
  background-color: rgba(255, 0, 0, 0.4);
  border-color: darkred;
}
</style>

