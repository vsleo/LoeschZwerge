<template>
  <div class="video-container">
    <iframe
      width="560"
      height="315"
      :src="youtubeEmbedUrl + '?rel=0'"
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
  width: 50vw;
  max-width: 50vw; /* optional */
  aspect-ratio: 16 / 9;
}

.video-container iframe {
  width: 100%;
  height: 100%;
  display: block;
  border: none;
}
</style>
