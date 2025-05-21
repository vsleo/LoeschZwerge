<template>
  <div class="full-img">
    <img src="images/Rolltore/G1/Geräteraum_G1.jpg" />
  </div>

  <div class="liste">
    <ul v-for="(item, index) in items" :key="index">
      <li>
        <div
          :class="{ isActive: item.visibility }"
          @click="toggleVisibility(index)"
        >
          ° {{ item.name }}
        </div>

        <div v-if="item.visibility" class="item">
          <img :src="item.picture" />
        </div>
        <div v-if="item.visibility" class="beschreibung">
          <div class="text">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import "../../../styles/rolltor.css";
export default {
  name: "G1",
  data() {
    return {
      items: [
        {
          name: "Werkzeugkasten",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Rüstholz",
          description:
            "Rüstholz ist ein wichtiges Hilfsmittel bei der technischen Hilfeleistung. Es wird verwendet, um Fahrzeuge zu stabilisieren und zu sichern.",
          visibility: false,
          picture: "images/Rolltore/G1/Rüstholz.jpg",
        },
        {
          name: "Elektrowerkzeug",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Türöffnungskoffer 1",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Türöffnungskoffer 2",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Motorkettensäge und Zubehör",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Schnittschutzhose und Helm",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Kelly-Tool",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Spaltaxt",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Bogensäge",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Säbelsäge",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Verkehrunfall (VU)-Koffer",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Ölwanne",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Öl-Bindemittel",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Chiemsee-Pumpe",
          description: "",
          visibility: false,
          picture: "",
        },
        {
          name: "Schaufel",
          description: "",
          visibility: false,
          picture: "",
        },
        {
        name: "Besen",
          description: "",
          visibility: false,
          picture: "",
        },
        {
        name: "Warndreieck",
          description: "",
          visibility: false,
          picture: "",
        },
      ],
    };
  },
  methods: {
    toggleVisibility(index) {
      this.items.forEach((item, i) => {
        if (i !== index) {
          item.visibility = false;
        }
      });
      this.items[index].visibility = !this.items[index].visibility;
    },
  },
};
</script>
