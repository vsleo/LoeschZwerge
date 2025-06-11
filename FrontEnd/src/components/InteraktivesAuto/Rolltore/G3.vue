<template>
  <div class="full-section">
    <div class="full-img">
      <img src="images/Rolltore/G3/Geräteraum_G3.png" />
    </div>

    <div class="liste">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <div 
          :class="{ isActive: item.visibility }" 
          @click="selectItem(index)"
          >
            ° {{ item.name }}
          </div>
        </li>
      </ul>
    </div>

    <!-- Bild-Box -->
    <div class="item" v-if="activeItem">
      <template v-if="activeItem.picture && activeItem.picture.length > 0">
        <img :src="activeItem.picture" :alt="activeItem.source" />
      </template>
      <template v-else-if="activeItem.source && activeItem.source.length > 0">
        <div class="fallback-link">
          {{ activeItem.source }}
        </div>
      </template>
    </div>
  </div>

    <!-- Feste Beschreibung-Box -->
    <div v-if="activeItem && activeItem.description" class="beschreibung">
      <div class="text">
        <p>{{ activeItem.description }}</p>
      </div>
    </div>  
</template>

<script>
import "../../../styles/rolltor.css";
export default {
  name: "G3View",
  data() {
    return {
      activeIndex: null,
      items: [
        {
          name: "2x Atemschutzgeräte Sicherheitstrupp + Maske und Brandschutzhaube",
          description: "Umluftunabhängiges Atemschutzgerät, kurz auch PA für Pressluftatmer. Der Vorrat an Atemluft beträgt ca. 1600 Liter, welche in der 6 Liter großen Druckluftflasche bei 300 bar vorliegen. Der Atemluftvorrat entspricht ca. 30 Minuten Einsatzzeit.",
          visibility: false,
          picture: "images/Rolltore/G3/Atemschutzgerät_Beschreibung.jpg",
          source: "https://feuerwehr-taufkirchen.de/neue-technik-fuer-atemschutzgeraete/",
        },
        {
          name: "Zelt",
          description:
            "Das Zelt ist eine Zusatzbeladung, welche das Umkleiden für Einsatzkräfte nach einem Brandeinsatz unter Atemschutz angenehmer gestalten soll",
          visibility: false,
          picture: "images/Rolltore/G3/Toataltet00_cb687228-b1b4-4fbb-a627-c4f16a8a8fa1.webp",
          source:"https://mylar.se/de/products/toataltet",
        },
        {
          name: "Ersatzkleidung",
          description:
            "Die Ersatzkleidung wird nach einem Brandeinsatz angezogen, um die Dekontamination durch den Brandrauch zu begrenzen. Dieses Vorgehen ist ein essentieller Teil des Hygienschutzkonzepts.",
          visibility: false,
          picture: "",
          source:"adad",
        },
        {
          name: "Sicherheitstrupptasche",
          description:
            "Die Sicherheitstasche beinhaltet eine 6 Liter Atemluftflasche, sowie eine Haube, welche per Lungenautomat mit der Atemluftflasche verbunden werden kann. Mit Hilfe dieser Notfalltasche wird die Rettung durch verrauchte Bereiche ermöglicht und die Rettung eines verunfallten Atemschutzgeräteträger erleichtert.",
          visibility: false,
          picture: "images/Rolltore/G3/Sicherheitstrupptasche.jpg",
          source:"https://www.rescue-tec.de/taschen/feuerwehr/rescue-tec-sicherheitstrupptasche-rit-bag-fuer-6-liter-atemluftflaschen",
        },
        {
          name: "Eurokraft Mehrzweckwanne",
          description:
            "",
          visibility: false,
          picture: "",
          source:"",
        },
        {
          name: "Zubehör Mehrzweckzug",
          description:
            "",
          visibility: false,
          picture: "",
          source:"",
        },
      ],
    };
  },
  computed: {
    activeItem() {
      return this.activeIndex !== null ? this.items[this.activeIndex] : null;
    },
  },
  methods: {
    selectItem(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>
