<template>
  <div class="hydrantenschild-wrapper">
    <img
      src="images/hydrantenschild-demo.png"
      alt="Hydrantenschild"
      class="hydrantenschild"
    />
    <input
      v-for="hotspot in hotspots"
      :key="hotspot.id"
      v-model="hotspot.label"
      type="text"
      class="hotspot-input"
      :style="{
        position: 'absolute',
        top: hotspot.top,
        left: hotspot.left,
        width: hotspot.size,
        height: hotspot.size,
        fontSize: '1vw',
      }"
      :placeholder="hotspot.placeholder"
      autocomplete="off"
    />
  </div>
</template>

<script>
export default {
  name: "HydrantLocation",
  data() {
    // Kleineres 16:9 Verhältnis
    const imgWidth = 480;
    const imgHeight = 270;
    const cols = 32;
    const rows = 18;
    const size = 11; // Noch kleinere Hotspots

    // Hotspots-Array generieren
    const hotspots = [];
    let id = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        hotspots.push({
          id: id++,
          label: "",
          top: `${row * ((imgHeight - size) / (rows - 1))}px`,
          left: `${col * ((imgWidth - size) / (cols - 1))}px`,
          size: `${size}px`,
          placeholder: "",
        });
      }
    }

    return {
      hotspots,
    };
  },
};
</script>

<style scoped>
.hydrantenschild-wrapper {
  position: relative;
  display: inline-block;
}
.hydrantenschild {
  width: 480px;
  height: 270px;
  display: block;
}
.hotspot-input {
  position: absolute;
  border: none;
  background: transparent;
  color: transparent;
  caret-color: black;
  text-align: center;
  z-index: 2;
  transition:
    border 0.2s,
    background 0.2s;
  outline: none;
  pointer-events: auto;
  border: 1px solid black;
}
.hotspot-input:hover,
.hotspot-input:focus {
  border: 2px solid #2196f3;
  background: rgba(33, 150, 243, 0.1);
  color: black;
}
</style>
