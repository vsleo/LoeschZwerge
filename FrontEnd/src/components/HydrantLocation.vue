<template>
  <div>
    <HydrantenschildKomponente
      @sendValues="receiveValues"
    ></HydrantenschildKomponente>
    <div class="hotspot-grid">
      <div
        v-for="hotspot in hotspots"
        :key="hotspot.id"
        class="hotspot-div"
        :class="{
          highlighted: hotspot.highlighted,
          ziel: hotspot.ziel,
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
      >
        {{ hotspot.label }}
      </div>
    </div>
    <div style="color: white; margin-top: 1rem">
      <pre> values received: {{ hydrantValues }}</pre>
    </div>
    <div v-if="hoveredPosition" style="color: yellow; margin-top: 1rem">
      Grid-Position: Zeile {{ hoveredPosition.row }}, Spalte
      {{ hoveredPosition.col }}
    </div>
  </div>
</template>

<script>
import HydrantenschildKomponente from "./HydrantenschildKomponente.vue";

export default {
  name: "HotspotGrid",
  components: {
    HydrantenschildKomponente,
  },
  data() {
    const gridWidth = 1920;
    const gridHeight = 1080;
    const cols = 32;
    const rows = 18;
    const size = Math.floor(Math.min(gridWidth / cols, gridHeight / rows));

    const hotspots = [];
    let id = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        hotspots.push({
          id: id++,
          row,
          col,
          label: "",
          top: `${row * size}px`,
          left: `${col * size}px`,
          size: `${size}px`,
          highlighted: false,
          ziel: false,
        });
      }
    }

    // BaseSpot mittig oben
    const baseRow = 2;
    const baseCol = 16;
    const baseSpot = hotspots.find(
      (h) => h.row === baseRow && h.col === baseCol,
    );
    if (baseSpot) baseSpot.highlighted = true;

    return {
      hotspots,
      gridWidth,
      gridHeight,
      baseSpot,
      hydrantValues: {},
      hoveredPosition: null, // NEU
    };
  },
  methods: {
    receiveValues(values) {
      this.hydrantValues = values;
    },
    changeZielSpot() {
      this.hotspots.forEach((h) => {
        h.ziel = false;
      });
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
}

.hotspot-div.ziel {
  background: rgb(0 255 0 / 40%) !important;
  border: 2px solid green !important;
}

.hotspot-grid {
  position: relative;
  width: 1920px;
  height: 1080px;
  background: #f0f0f0;
  border: 1px solid #bbb;
}

.hotspot-div {
  position: absolute;
  border: 1px solid black;
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

.hotspot-div:hover,
.hotspot-div:focus {
  border: 2px solid #2196f3;
  background: rgb(33 150 243 / 10%);
}
</style>
