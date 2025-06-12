<template>
  <HydrantenschildKomponente
    @sendValues="getValues"
  ></HydrantenschildKomponente>
  <div class="hydranten-game" style="color: white">
    <h1>Hydranten Game</h1>
    <p>Values received: {{ values }}</p>
  </div>
</template>

<script>
import HydrantenschildKomponente from "./HydrantenschildKomponente.vue";

export default {
  name: "HydrantenGame",
  components: {
    HydrantenschildKomponente,
  },
  data() {
    return {
      values: [],
    };
  },
  methods: {
    getValues(values) {
      this.values = values;
      console.log("Received values:", values);
    },
  },
  mounted() {
    // Code to run when the component is mounted
  },
};
</script>
