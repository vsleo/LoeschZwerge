<template>
  <div class="hydrantenschild">
    <img
      src="images/Hydrantenschild.png"
      alt="Hydrantenschild"
      class="hydrantenschild"
    />
    <input
      v-for="(hotspot, index) in hotspots"
      v-model="hotspot.label"
      :key="index"
      type="text"
      inputmode="numeric"
      :style="{
        position: 'absolute',
        top: hotspot.top,
        left: hotspot.left,
        width: hotspot.width,
        height: hotspot.height,
        fontSize: hotspot.fontSize || '4vw',
      }"
      class="hotspot-input"
      @input="createValues(index)"
      @focus="clearOnFocus(index)"
      maxlength="1"
    />
  </div>
  <div style="color: white">{{ hotspots[0].label }}</div>
  <div style="color: white">
    {{ values.nenndurchmesser }} {{ values.richtungLinks }}
    {{ values.richtungRechts }} {{ values.richtungUnten }}
  </div>
</template>

<script>
export default {
  name: "HydrantenschildKomponente",
  emits: ["sendValues"],
  data() {
    return {
      hotspots: [
        {
          label: "0",
          top: "24px",
          left: "109px",
          width: "31px",
          height: "48px",
          fontSize: "55px",
        },
        {
          label: "1",
          top: "24px",
          left: "145px",
          width: "31px",
          height: "48px",
          fontSize: "55px",
        },
        {
          label: "2",
          top: "24px",
          left: "181px",
          width: "31px",
          height: "48px",
          fontSize: "55px",
        },
        {
          label: "3",
          top: "94px",
          left: "26px",
          width: "31px",
          height: "48px",
          fontSize: "55px",
        },
        {
          label: "4",
          top: "94px",
          left: "62px",
          width: "31px",
          height: "48px",
          fontSize: "55px",
        },
        {
          label: "5",
          top: "94px",
          left: "155px",
          width: "31px",
          height: "48px",
          fontSize: "55px",
        },
        {
          label: "",
          top: "94px",
          left: "191px",
          width: "31px",
          height: "48px",
          fontSize: "55px",
        },
        {
          label: "7",
          top: "151px",
          left: "89px",
          width: "31px",
          height: "48px",
          fontSize: "55px",
        },
        {
          label: "8",
          top: "151px",
          left: "125px",
          width: "31px",
          height: "48px",
          fontSize: "55px",
        },
        {
          label: "9",
          top: "169px",
          left: "171px",
          width: "17px",
          height: "30px",
          fontSize: "25px",
        },
        {
          label: "10",
          top: "112px",
          left: "109px",
          width: "17px",
          height: "30px",
          fontSize: "25px",
        },
        {
          label: "11",
          top: "112px",
          left: "236px",
          width: "17px",
          height: "30px",
          fontSize: "25px",
        },
        {
          label: "12",
          top: "23px",
          left: "218px",
          width: "3px",
          height: "14px",
          fontSize: "10px",
        },
        {
          label: "13",
          top: "23px",
          left: "226px",
          width: "3px",
          height: "14px",
          fontSize: "10px",
        },
        {
          label: "14",
          top: "23px",
          left: "234px",
          width: "3px",
          height: "14px",
          fontSize: "10px",
        },
        {
          label: "15",
          top: "23px",
          left: "242px",
          width: "3px",
          height: "14px",
          fontSize: "10px",
        },
        {
          label: "16",
          top: "23px",
          left: " 250px",
          width: "3px",
          height: "14px",
          fontSize: "10px",
        },
      ],
      values: [],
    };
  },
  methods: {
    createValues(index) {
      if (/^[0-9]$/.test(this.hotspots[index].label)) {
        this.values.nenndurchmesser = Number(
          `${this.hotspots[0].label}${
            this.hotspots[1].label
          }${this.hotspots[2].label}`,
        );
        const richtungLinks = `${this.hotspots[3].label}${this.hotspots[4].label}.${this.hotspots[10].label}`;
        this.values.richtungLinks = Number(richtungLinks);
        const richtungRechts = `${this.hotspots[5].label}${this.hotspots[6].label}.${this.hotspots[11].label}`;
        this.values.richtungRechts = Number(richtungRechts);
        const richtungUnten = `${this.hotspots[7].label}${this.hotspots[8].label}.${this.hotspots[9].label}`;
        this.values.richtungUnten = Number(richtungUnten);

        this.$emit("sendValues", this.values);
      } else {
        alert("Bitte nur Ziffern eingeben!");
        this.hotspots[index].label = ""; // Reset to default value
      }
    },
    clearOnFocus(index) {
      this.hotspots[index].label = ""; // Clear input on focus
    },
  },
  mounted() {},
  created() {},

  computed: {},
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
