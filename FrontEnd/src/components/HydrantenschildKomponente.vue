<template>
  <div class="hydrantenschild">
    <img
      src="images/Hydrantenschild.png"
      alt="Hydrantenschild"
      class="hydrantenschild"
    />
    <input
      v-for="(hotspot, index) in hotspots"
      :key="index"
      type="text"
      :placeholder="hotspot.label"
      :style="{
        position: 'absolute',
        top: hotspot.top,
        left: hotspot.left,
        width: hotspot.width,
        height: hotspot.height,
        fontSize: hotspot.fontSize || '4vw',
      }"
      class="hotspot-input"
    />
  </div>
</template>

<script>
export default {
  name: "HydrantenschildKomponente",
  data() {
    return {
      hotspots: [
        {
          label: "1",
          top: "24px",
          left: "109px",
          width: "31px",
          height: "48px",
        },
        {
          label: "0",
          top: "24px",
          left: "145px",
          width: "31px",
          height: "48px",
        },
        {
          label: "0",
          top: "24px",
          left: "181px",
          width: "31px",
          height: "48px",
        },
        {
          label: "1",
          top: "94px",
          left: "26px",
          width: "31px",
          height: "48px",
        },
        {
          label: "2",
          top: "94px",
          left: "62px",
          width: "31px",
          height: "48px",
        },
        {
          label: "3",
          top: "94px",
          left: "155px",
          width: "31px",
          height: "48px",
        },
        {
          label: "4",
          top: "94px",
          left: "191px",
          width: "31px",
          height: "48px",
        },
        {
          label: "5",
          top: "151px",
          left: "89px",
          width: "31px",
          height: "48px",
        },
        {
          label: "6",
          top: "151px",
          left: "125px",
          width: "31px",
          height: "48px",
        },
        {
          label: "7",
          top: "169px",
          left: "171px",
          width: "17px",
          height: "30px",
          fontSize: "3vw",
        },
        {
          label: "8",
          top: "112px",
          left: "109px",
          width: "17px",
          height: "30px",
          fontSize: "3vw",
        },
        {
          label: "9",
          top: "112px",
          left: "236px",
          width: "17px",
          height: "30px",
          fontSize: "3vw",
        },
        {
          label: "10",
          top: "23px",
          left: "218px",
          width: "3px",
          height: "14px",
          fontSize: "1vw",
        },
        {
          label: "11",
          top: "23px",
          left: "226px",
          width: "3px",
          height: "14px",
          fontSize: "1vw",
        },
        {
          label: "12",
          top: "23px",
          left: "234px",
          width: "3px",
          height: "14px",
          fontSize: "1vw",
        },
        {
          label: "13",
          top: "23px",
          left: "242px",
          width: "3px",
          height: "14px",
          fontSize: "1vw",
        },
        {
          label: "14",
          top: "23px",
          left: " 250px",
          width: "3px",
          height: "14px",
          fontSize: "1vw",
        },
      ],
    };
  },
  methods: {},
  mounted() {
    // Any initialization logic can go here
  },
};
</script>

<style scoped>
.hydrantenschild {
  position: relative;
  display: inline-block;
}

.hydrantenschild img {
  display: block;
  max-width: 100%;
}

.hotspot-input {
  position: absolute;
  width: 100px;
  border: 1px solid black;
  text-align: center;
}

.hotspot-input:focus {
  outline-color: blue;
  outline-width: 1px;
  outline-style: solid;
  z-index: 10;
}
</style>
