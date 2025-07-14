<template>
  <div class="hydrantenschild">
    <img
      src="images/Hydrantenschild.png"
      alt="Hydrantenschild"
      class="hydrantenschild"
    />
    <input
      v-for="(hotspot, index) in hotspots"
      :value="hotspot.label"
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
      readonly
      disabled
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
  name: "HydrantenschildKomponenteRandom",
  emits: ["sendValues"],
  data() {
    function randDigit() {
      return Math.floor(Math.random() * 10).toString();
    }
    function randPair(max) {
      const num = Math.floor(Math.random() * (max + 1));
      return num < 10
        ? ["0", num.toString()]
        : [num.toString()[0], num.toString()[1]];
    }

    const hotspots = [
      {
        top: "24px",
        left: "109px",
        width: "31px",
        height: "48px",
        fontSize: "55px",
      },
      {
        top: "24px",
        left: "145px",
        width: "31px",
        height: "48px",
        fontSize: "55px",
      },
      {
        top: "24px",
        left: "181px",
        width: "31px",
        height: "48px",
        fontSize: "55px",
      },
      {
        top: "94px",
        left: "26px",
        width: "31px",
        height: "48px",
        fontSize: "55px",
      }, // 3 (Links)
      {
        top: "94px",
        left: "62px",
        width: "31px",
        height: "48px",
        fontSize: "55px",
      }, // 4 (Links)
      {
        top: "94px",
        left: "155px",
        width: "31px",
        height: "48px",
        fontSize: "55px",
      }, // 5 (Rechts)
      {
        top: "94px",
        left: "191px",
        width: "31px",
        height: "48px",
        fontSize: "55px",
      }, // 6 (Rechts)
      {
        top: "151px",
        left: "89px",
        width: "31px",
        height: "48px",
        fontSize: "55px",
      }, // 7 (Unten)
      {
        top: "151px",
        left: "125px",
        width: "31px",
        height: "48px",
        fontSize: "55px",
      }, // 8 (Unten)
      {
        top: "169px",
        left: "171px",
        width: "17px",
        height: "30px",
        fontSize: "25px",
      },
      {
        top: "112px",
        left: "109px",
        width: "17px",
        height: "30px",
        fontSize: "25px",
      },
      {
        top: "112px",
        left: "236px",
        width: "17px",
        height: "30px",
        fontSize: "25px",
      },
      {
        top: "23px",
        left: "218px",
        width: "3px",
        height: "14px",
        fontSize: "10px",
      },
      {
        top: "23px",
        left: "226px",
        width: "3px",
        height: "14px",
        fontSize: "10px",
      },
      {
        top: "23px",
        left: "234px",
        width: "3px",
        height: "14px",
        fontSize: "10px",
      },
      {
        top: "23px",
        left: "242px",
        width: "3px",
        height: "14px",
        fontSize: "10px",
      },
      {
        top: "23px",
        left: "250px",
        width: "3px",
        height: "14px",
        fontSize: "10px",
      },
    ];

    // Zufallsentscheidung: links oder rechts bekommt einen Wert, der andere bleibt "00"
    const useLinks = Math.random() < 0.5;
    const [links1, links2] = useLinks ? randPair(13) : ["0", "0"];
    const linksDecimal = useLinks ? randDigit() : "0";
    const [rechts1, rechts2] = useLinks ? ["0", "0"] : randPair(14);
    const rechtsDecimal = useLinks ? "0" : randDigit();
    // Unten: Felder 7,8,11 (max 15) - Wenn rechts einen Wert hat, unten ist "000"
    const [unten1, unten2] = useLinks ? randPair(14) : ["0", "0"];
    const untenDecimal = randDigit();

    hotspots.forEach((h, i) => {
      // Die ersten 3 Felder: Nenndurchmesser
      if (i === 0) h.label = "1";
      else if (i === 1) h.label = "0";
      else if (i === 2) h.label = "0";
      // Links: Felder 3, 4, 10
      else if (i === 3) h.label = links1;
      else if (i === 4) h.label = links2;
      else if (i === 10) h.label = linksDecimal;
      // Rechts: Felder 5, 6
      else if (i === 5) h.label = rechts1;
      else if (i === 6) h.label = rechts2;
      else if (i === 11) h.label = rechtsDecimal;
      // Unten: Felder 7, 8, 11
      else if (i === 7) h.label = unten1;
      else if (i === 8) h.label = unten2;
      // 9: Nachkommastelle für unten
      else if (i === 9) h.label = untenDecimal;
      // Rest: Zufallsziffer
      else h.label = randDigit();
    });

    const values = {
      nenndurchmesser: Number(
        `${hotspots[0].label}${hotspots[1].label}${hotspots[2].label}`,
      ),
      richtungLinks: Number(
        `${hotspots[3].label}${hotspots[4].label}.${linksDecimal}`,
      ),
      richtungRechts: Number(
        `${hotspots[5].label}${hotspots[6].label}.${rechtsDecimal}`,
      ),
      richtungUnten: Number(
        `${hotspots[7].label}${hotspots[8].label}.${untenDecimal}`,
      ),
    };

    return {
      hotspots,
      values,
    };
  },
  mounted() {
    this.$emit("sendValues", this.values);
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
  background: #eee;
  color: #222;
}

.hotspot-input:focus {
  outline: blue solid 1px;
  z-index: 10;
}
</style>
