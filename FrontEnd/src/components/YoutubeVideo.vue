<template>
  <div class="video-container">
    <iframe
      width="560"
      height="315"
      :src="youtubeEmbedUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write;  gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true,
    },
  },
  computed: {
    youtubeEmbedUrl() {
      return `https://www.youtube.com/embed/${this.videoId}`;
    },
  },
};
</script>

<style scoped>
.video-container {
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}

.video-container iframe {
  position: fixed;
  justify-content: center;
  top: 15vw;
  transform: translate(20%, 0%);
  width: 50%;
  height: 50%;
}
</style>
