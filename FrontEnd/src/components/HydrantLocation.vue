<template>
  <head>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"
    />
  </head>
  <div class="grid-outer">
    <div class="grid-container">
      <!-- Score oben rechts -->
      <div class="score-box">Score: {{ score }}</div>
      <div class="hotspot-grid">
        <div
          v-for="hotspot in hotspots"
          :key="hotspot.id"
          class="hotspot-div"
          :class="{
            highlighted: hotspot.highlighted,
            ziel: hotspot.ziel,
            'ziel-hover':
              hotspot.ziel &&
              !hotspot.showZiel &&
              hoveredPosition &&
              hoveredPosition.row === hotspot.row &&
              hoveredPosition.col === hotspot.col,
          }"
          :style="{
            top: hotspot.top,
            left: hotspot.left,
            width: hotspot.size,
            height: hotspot.size,
            fontSize: '1vw',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            userSelect: 'none',
          }"
          @mouseenter="hoveredPosition = { row: hotspot.row, col: hotspot.col }"
          @mouseleave="hoveredPosition = null"
          :title="
            `Zeile ${hotspot.row}, Spalte ${hotspot.col};\n` +
            (hotspot.row - baseSpot.row > 0
              ? `${hotspot.row - baseSpot.row - 1} - ${hotspot.row - baseSpot.row} Meter nach unten\n`
              : hotspot.row - baseSpot.row === 0
                ? `0 Meter nach unten\n`
                : '') +
            (hotspot.col - baseSpot.col > 0
              ? `${hotspot.col - baseSpot.col - 1} - ${hotspot.col - baseSpot.col} Meter nach rechts`
              : hotspot.col - baseSpot.col < 0
                ? `${baseSpot.col - hotspot.col - 1} - ${baseSpot.col - hotspot.col} Meter nach links`
                : hotspot.col - baseSpot.col === 0
                  ? `0 Meter nach rechts/links`
                  : '')
          "
          tabindex="0"
          @focus="hoveredPosition = { row: hotspot.row, col: hotspot.col }"
          @click="handleHotspotClick(hotspot)"
        >
          {{ hotspot.label }}
          <img
            :src="hotspot.img"
            :alt="'Bild für Feld ' + hotspot.id"
            style="width: 100%; height: 100% !important; object-fit: cover"
          />
        </div>
      </div>
      <!--<div style="color: white; margin-top: 1rem">
        <pre> values received: {{ hydrantValues }}</pre>
      </div> -->
      <div v-if="hoveredPosition" style="color: yellow; margin-top: 1rem">
        Grid-Position: Zeile {{ hoveredPosition.row }}, Spalte
        {{ hoveredPosition.col }}
      </div>
      <!-- Popup für HydrantenschildKomponente -->
      <div
        v-show="showPopup"
        class="popup-overlay"
        @click.self="showPopup = false"
      >
        <div class="popup-content">
          <HydrantenschildKomponente
            @sendValues="receiveValues"
            :key="hydrantKey"
          />
          <button @click="showPopup = false" style="margin-top: 1rem">
            Schließen
          </button>
        </div>
      </div>
      <!-- Popup für "Verloren" -->
      <div v-if="showLost" class="popup-overlay" @click.self="showLost = false">
        <div class="popup-content" style="text-align: center">
          <h2>Du hast verloren!</h2>
          <p>Du hast einen falschen Spot angeklickt.</p>
          <img
            src="images/hydrantgame/RestartButton.png"
            alt="Neustarten"
            @click="restartGame"
            style="
              margin-top: 1rem;
              cursor: pointer;
              width: 200px;
              height: auto;
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HydrantenschildKomponente from "./HydrantenschildKomponenteRandom.vue";

export default {
  name: "HotspotGrid",
  components: {
    HydrantenschildKomponente,
  },
  data() {
    // Fallback-Werte für SSR
    const gridWidth = 1980;
    const gridHeight = 1020;
    const cols = 32;
    const rows = 18;
    const size = Math.floor(Math.min(gridWidth / cols, gridHeight / rows));

    const images = [
      "images/hydrantgame/grass_1.png",
      "images/hydrantgame/grass_2.png",
      "images/hydrantgame/grass_3.png",
      "images/hydrantgame/grass_4.png",
    ];
    const targetImage = "images/hydrantgame/hydrantdeckel.png";
    const baseSpotImage = "images/hydrantgame/hydrantschild.png";

    const hotspots = [];
    let id = 0;
    const hotspotSize = 40; // z.B. 40px, beliebig anpassen
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        hotspots.push({
          id: id++,
          row,
          col,
          label: "",
          top: `${row * hotspotSize}px`,
          left: `${col * hotspotSize}px`,
          size: `${hotspotSize}px`,
          highlighted: false,
          ziel: false,
          img: images[Math.floor(Math.random() * images.length)],
        });
      }
    }

    // BaseSpot mittig oben
    const baseRow = 2;
    const baseCol = 16;
    const baseSpot = hotspots.find(
      (h) => h.row === baseRow && h.col === baseCol,
    );
    if (baseSpot) {
      baseSpot.highlighted = true;
      baseSpot.img = baseSpotImage; // <-- Bild für BaseSpot setzen
    }

    return {
      hotspots,
      gridWidth,
      gridHeight,
      baseSpot,
      hydrantValues: {},
      hoveredPosition: null,
      images,
      targetImage,
      baseSpotImage,
      showPopup: false,
      showLost: false, // <--- für das "Verloren"-Popup
      hydrantKey: 0, // <--- Key für Komponente
      score: 0, // <--- Score hinzufügen
      cols,
      rows,
      size,
    };
  },
  mounted() {
    this.gridWidth = Math.floor(window.innerWidth * 0.8);
    this.gridHeight = Math.floor(window.innerHeight * 0.8);
    this.size = Math.floor(
      Math.min(this.gridWidth / this.cols, this.gridHeight / this.rows),
    );
    this.randomizeGrid();
  },
  methods: {
    receiveValues(values) {
      this.hydrantValues = values;
      this.changeZielSpot();
    },
    handleHotspotClick(hotspot) {
      if (hotspot.highlighted) {
        this.showPopup = true;
        return;
      }
      if (hotspot.ziel && !hotspot.showZiel) {
        hotspot.showZiel = true;
        hotspot.img = this.targetImage;
        this.score++; // Score erhöhen!
        setTimeout(() => {
          this.randomizeGrid(); // Grid komplett neu randomisieren
        }, 800);
      } else {
        // Score zurücksetzen, wenn nicht Zielspot oder BaseSpot
        this.score = 0;
        this.showLost = true; // "Verloren"-Popup anzeigen
      }
    },
    randomizeGrid() {
      // Nutze die Werte aus data()
      const gridWidth = this.gridWidth;
      const gridHeight = this.gridHeight;
      const cols = this.cols;
      const rows = this.rows;
      const size = this.size;
      const images = [
        "images/hydrantgame/grass_1.png",
        "images/hydrantgame/grass_2.png",
        "images/hydrantgame/grass_3.png",
        "images/hydrantgame/grass_4.png",
      ];
      const baseSpotImage = "images/hydrantgame/hydrantschild.png";

      const hotspots = [];
      let id = 0;
      const hotspotSize = 40; // z.B. 40px, beliebig anpassen
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          hotspots.push({
            id: id++,
            row,
            col,
            label: "",
            top: `${row * hotspotSize}px`,
            left: `${col * hotspotSize}px`,
            size: `${hotspotSize}px`,
            highlighted: false,
            ziel: false,
            img: images[Math.floor(Math.random() * images.length)],
          });
        }
      }

      // BaseSpot mittig oben
      const baseRow = 2;
      const baseCol = 16;
      const baseSpot = hotspots.find(
        (h) => h.row === baseRow && h.col === baseCol,
      );
      if (baseSpot) {
        baseSpot.highlighted = true;
        baseSpot.img = baseSpotImage;
      }

      // Setze die neuen Werte ins Grid
      this.hotspots = hotspots;
      this.baseSpot = baseSpot;
      this.hydrantValues = {}; // Werte zurücksetzen
      this.hydrantKey++; // HydrantenschildKomponenteRandom neu rendern
    },
    restartGame() {
      this.score = 0;
      this.showLost = false;
      this.randomizeGrid();
    },
    changeZielSpot() {
      // Setze alle Zielbilder zurück auf ein Zufallsbild und verstecke Ziel
      this.hotspots.forEach((h) => {
        if (h.ziel) {
          h.img = this.images[Math.floor(Math.random() * this.images.length)];
          h.showZiel = false;
        }
        h.ziel = false;
      });

      // BaseSpot behält immer sein Bild!
      if (this.baseSpot) {
        this.baseSpot.img = this.baseSpotImage;
      }

      // Zielspot wird jetzt erst gesetzt, nachdem neue Werte da sind!
      const zielRow =
        this.baseSpot.row + Math.ceil(this.hydrantValues.richtungUnten);
      let zielCol = this.baseSpot.col;

      if (this.hydrantValues.richtungLinks > 0) {
        zielCol =
          this.baseSpot.col - Math.ceil(this.hydrantValues.richtungLinks);
      } else if (this.hydrantValues.richtungRechts > 0) {
        zielCol =
          this.baseSpot.col + Math.ceil(this.hydrantValues.richtungRechts);
      }

      const zielSpot = this.hotspots.find(
        (h) => h.row === zielRow && h.col === zielCol,
      );
      if (zielSpot) {
        zielSpot.ziel = true;
        zielSpot.showZiel = false;
        zielSpot.img =
          this.images[Math.floor(Math.random() * this.images.length)];
      }
    },
  },
  watch: {
    hydrantValues: {
      handler() {
        this.changeZielSpot();
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style scoped>
.hotspot-div.highlighted {
  background: rgb(255 0 0 / 40%) !important;
  border: 2px solid red !important;
  z-index: 3;
}

.hotspot-div.ziel {
  background: rgb(0 255 0 / 40%) !important;

  z-index: 3;
}

.hotspot-div.ziel-hover {
  border: 2px solid #2196f3 !important;
  background: rgb(33 150 243 / 10%) !important;
  z-index: 4;
}

.hotspot-grid {
  position: relative;
  width: 100%;
  height: 100%;
}

.hotspot-div {
  position: absolute;
  width: 40px !important;
  height: 40px !important;
  background: transparent;
  text-align: center;
  z-index: 2;
  transition:
    border 0.2s,
    background 0.2s;
  outline: none;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  user-select: none;
}

.hotspot-div img {
  image-rendering: pixelated;
}

.hotspot-div:hover,
.hotspot-div:focus {
  border: 2px solid #2196f3;
  background: rgb(33 150 243 / 10%);
  z-index: 4;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-content {
  background: #fff;
  color: black;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);
  min-width: 350px;
  max-width: 90vw;
}

.score-box {
  position: absolute;
  top: 10px;
  right: 30px;
  background: #222;
  color: #fff;
  font-size: 2rem;
  padding: 0.5rem 1.5rem;
  border-radius: 12px;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  font-family: "Pixelify Sans", sans-serif;
}

.grid-outer {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-container {
  position: relative;
  top: 3vh;
  width: calc(32 * 41px); /* cols * hotspotSize */
  height: calc(18 * 41px); /* rows * hotspotSize */
  min-width: 400px;
  min-height: 400px;
  max-width: 100vw;

  border: 1px solid #bbb;
  padding-top: 2vh;
  padding-left: 2vw;
  padding-bottom: 4vh;
  background-color: rgba(255, 255, 255, 0.123);
  border-radius: 10px;
  box-shadow: 0 5px 10px rgb(255 255 255 / 50%);
}
</style>
