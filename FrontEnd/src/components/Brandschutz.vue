<template>
  <div class="video"><YoutubeVideo :videoId="Id" /></div>
  <div class="video-container">
    <div @click="changeId('dQw4w9WgXcQ')">Brandschutz-Video 1</div>
    <div @click="changeId('aB7Xy9kQzD3')">Brandschutz-Video 2</div>
    <div @click="changeId('Lm4TrE5VuWc')">Brandschutz-Video 3</div>
  </div>
</template>

<script>
import YoutubeVideo from "./YoutubeVideo.vue";

export default {
  name: "Brandschutzaufklärung",
  components: {
    YoutubeVideo,
  },
  data() {
    return {
      Id: "dQw4w9WgXcQ",
    };
  },
  methods: {
    changeId(newId) {
      console.log("changeId called with newId:", newId);
      this.Id = newId;
    },
  },
};
</script>

<style scoped>
.video-container {
  width: 30vw;
  height: 28vw;
  position: absolute;
  top: 10vw;
  left: 60vw;
  background-color: rgba(255, 255, 255, 0.552);
  border-radius: 2vw;
  z-index: 3;
  color: black;
  font-size: 1vw;
}

.video {
  position: absolute;
  top: 10vw;
  left: 20vw;
  width: 50vw;
  height: 50vw;
  z-index: 2;
}
</style>
