<template>
  <img
    src="images/Tooltip.png"
    v-show="!visible"
    class="tipp-popup"
    @click="toggleVisibility"
    alt="Tooltip"
  />
  <div v-show="visible" class="tipp-content">
    <h3>Tipp</h3>
    <slot>
      <div v-if="content[index].text1">{{ content[index].text1 }}</div>
      <br />
      <div v-if="content[index].text2">{{ content[index].text2 }}</div>
      <br />
      <div v-if="content[index].text2">{{ content[index].text3 }}</div>
      <br />
      <div v-if="content[index].text4">{{ content[index].text4 }}</div>
      <br />
      <img
        v-if="content[index].img"
        :src="content[index].img"
        alt="Tooltip Image"
        class="tooltip-img"
      />
    </slot>
    <button @click="visible = false" class="close-btn">Schließen</button>
  </div>
</template>

<script>
import { importedTooltips } from "../files/tooltip/tooltips.js";
export default {
  name: "TippPopup",
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      visible: false,
      content: [],
    };
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
    getContent() {
      this.content = importedTooltips;
    },
  },
  created() {
    this.getContent();
  },
};
</script>

<style scoped>
.tooltip-img {
  width: 300px;
  height: auto;
  border-radius: 8px;
  background-color: #ffffff00;
}
.tipp-popup {
  position: fixed;
  top: 15vh;
  left: 0;
  width: 100px;
  max-width: 90vw;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  padding: 0;
  font-family: "Pixelify Sans", sans-serif;
}

.tipp-content {
  position: absolute;
  top: 15vh;
  left: 0;
  width: 300px;
  margin-left: 50px;
  border-radius: 25px;
  padding: 1.5rem;
  color: #222;
  background: #fff;
  z-index: 10;
}

.close-btn {
  margin-top: 1rem;
  background: #2196f3;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
}
</style>
