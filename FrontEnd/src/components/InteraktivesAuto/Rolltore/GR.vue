<template>
  <div class="full-img">
    <img src="images/Rolltore/G3/Geräteraum_G3.png" />
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
          name: "LED-Beleuchtungsgerät Peli mit Akku",
          description: "Akkubetriebenes, tragbares LED-Gerät zur Ausleuchtung.",
          visibility: false,
          picture: "images/LED-Beleuchtungsgerät_Peli_mit_Akku.jpg",
        },
        {
          name: "Rüstholz",
          description:
            "Rüstholz ist ein wichtiges Hilfsmittel bei der technischen Hilfeleistung. Es wird verwendet, um Fahrzeuge zu stabilisieren und zu sichern.",
          visibility: false,
          picture: "images/Rüstholz.jpg",
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
