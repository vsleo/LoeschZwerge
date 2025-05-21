<template>
  <div class="video"><YoutubeVideo :videoId="Id" /></div>
  <div class="video-list">
    <ul>
      <li v-for="(video, index) in videos" :key="index">
        <div @click="changeId(video.id)">
          <p>{{ video.title }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import YoutubeVideo from "./YoutubeVideo.vue";

export default {
  name: "Brandschutzaufklärung",
  components: {
    YoutubeVideo,
  },
  props: {
    videoGenre: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      Id: "dQw4w9WgXcQ",
      videos: [],
    };
  },
  methods: {
    changeId(newId) {
      this.Id = newId;
    },
    async getVideos() {
      const module = await import(
        `../files/videos/videos_${this.videoGenre}.js`
      );
      console.log(module);
      this.videos = module.importedVideos;
    },
  },
  mounted() {
    this.getVideos();
  },
};
</script>

<style scoped>
.video-list {
  cursor: pointer;
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
  position: fixed;
  transform: translate(10%, 40%);
}
</style>
