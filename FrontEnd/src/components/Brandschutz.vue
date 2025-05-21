<template>
  <YoutubeVideo :videoId="Id" />
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
};
</script>
