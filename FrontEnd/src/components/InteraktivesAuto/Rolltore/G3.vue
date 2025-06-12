<template>
  <div class="full-section">
    <!-- Übersichtsfoto der Geräteraumtür -->
    <div class="full-img">
      <img src="images/Rolltore/G3/Geräteraum_G3.png" />
    </div>

    <!-- Liste mit klickbaren Einträgen -->
    <div class="liste">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <div
            :class="{ isActive: index === activeIndex }"
            @click="selectItem(index)"
          >
            ° {{ item.name }}
          </div>
        </li>
      </ul>
    </div>

    <!-- Bild‑Box mit Fallback‑Logik -->
    <div class="item" @click="toggleFlip" style="cursor: pointer;">
      <div :class="['flip-card-inner', { flipped: isFlipped }]">
      
      <!-- Vorderseite -->
        <div class="flip-card-front">
          <template v-if="activeItem && activeItem.picture">
            <img
              :src="imageSrc"
              :alt="activeItem.source"
              @error="handleImageError"
              class="front-img"
            />
          </template>
          <template v-else>
            <div class="fallback-text">
              Bitte wähle ein Element aus der Liste aus.
            </div>
          </template>
        </div>

        <!-- Rückseite -->
        <div v-if="activeItem?.description" class="flip-card-back">
          <p>{{ activeItem.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../styles/rolltor.css";

export default {
  name: "G3View",
  data() {
    return {
      // Index des aktuell gewählten Eintrags
      activeIndex: 0,
      // Wird true, sobald das Bild nicht geladen werden konnte
      imageErrored: false,
      // Absoluter Fallback‑Pfad
      fallbackImage: "images/Rolltore/G3/Picture_Not_Found.png",
      isFlipped: false,
      // Daten für die einzelnen Geräte
      items: [
        {
          name: "2x Atemschutzgeräte Sicherheitstrupp + Maske und Brandschutzhaube",
          description:
            "Umluftunabhängiges Atemschutzgerät, kurz auch PA für Pressluftatmer. Der Vorrat an Atemluft beträgt ca. 1600 Liter, welche in der 6 Liter großen Druckluftflasche bei 300 bar vorliegen. Der Atemluftvorrat entspricht ca. 30 Minuten Einsatzzeit.",
          visibility: false,
          picture: "images/Rolltore/G3/Atemschutzgerät_Beschreibung.jpg",
          source:
            "https://feuerwehr-taufkirchen.de/neue-technik-fuer-atemschutzgeraete/",
        },
        {
          name: "Zelt",
          description:
            "Das Zelt ist eine Zusatzbeladung, welche das Umkleiden für Einsatzkräfte nach einem Brandeinsatz unter Atemschutz angenehmer gestalten soll",
          visibility: false,
          picture:
            "images/Rolltore/G3/Toataltet00_cb687228-b1b4-4fbb-a627-c4f16a8a8fa1.webp",
          source: "https://mylar.se/de/products/toataltet",
        },
        {
          name: "Ersatzkleidung",
          description:
            "Die Ersatzkleidung wird nach einem Brandeinsatz angezogen, um die Dekontamination durch den Brandrauch zu begrenzen. Dieses Vorgehen ist ein essentieller Teil des Hygienschutzkonzepts.",
          visibility: false,
          picture: "images/Rolltore/G3/Ersatzkleidung.jpg",
          source: "https://de.vecteezy.com/foto/3169819-kleiderstapel-auf-weissem-hintergrund",
        },
        {
          name: "Sicherheitstrupptasche",
          description:
            "Die Sicherheitstasche beinhaltet eine 6 Liter Atemluftflasche, sowie eine Haube, welche per Lungenautomat mit der Atemluftflasche verbunden werden kann. Mit Hilfe dieser Notfalltasche wird die Rettung durch verrauchte Bereiche ermöglicht und die Rettung eines verunfallten Atemschutzgeräteträger erleichtert.",
          visibility: false,
          picture: "images/Rolltore/G3/Sicherheitstrupptasche.jpg",
          source:
            "https://www.rescue-tec.de/taschen/feuerwehr/rescue-tec-sicherheitstrupptasche-rit-bag-fuer-6-liter-atemluftflaschen",
        },
        {
          name: "Eurokraft Mehrzweckwanne",
          description: "Die Mehrzweckwanne hat verschiedene Einsatzmöglichkeiten, unter anderem als Auffangwanne für Kleingebinde, als Abfüllwanne oder als Transportwanne.",
          picture: "images/Rolltore/G3/Mehrzweckwanne.jpg",
          source: "https://www.amazon.de/eurokraft-basic-PE-Kleingebinde-Universalwanne-Volumen-stapelbar/dp/B0F3WS7K4H?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1P0IMYPPNRHIX",
        },
        {
          name: "Zubehör Mehrzweckzug",
          description: "Das Zubehör für den Mehrzweckzug ermöglicht eine flexible Handhabung und Anwendung in verschiedenen Einsatzszenarien. Das Zubehör umfasst unter anderem eine Umlenkrollen, Schäkel, Rundschlingen und weitere Komponenten, die eine effektive Nutzung des Mehrzweckzugs gewährleisten.",
          visibility: false,
          picture: "images/Rolltore/G3/Zubehör_Mehrzweckzug.jpg",
          source: "https://www.btl-brandschutz.de/Mehrzweckzug-Satz-DIN-14800-MZ32-Greifzug-32-kN/710105",
        },
      ],
    };
  },
  computed: {
    // Aktueller Eintrag
    activeItem() {
      return this.activeIndex !== null ? this.items[this.activeIndex] : null;
    },
    // Bildquelle mit Priorität: picture → fallbackImage
    imageSrc() {
      if (!this.activeItem) return this.fallbackImage;
      if (this.imageErrored) return this.fallbackImage;

      const pic = this.activeItem.picture;
      return pic && pic.trim().length > 0 ? pic : this.fallbackImage;
    },
    // Source‑Link nur zeigen, wenn vorhanden & Bild nicht gültig
    showSource() {
      if (!this.activeItem) return false;
      const hasSource = this.activeItem.source && this.activeItem.source.length > 0;
      const hasPic = this.activeItem.picture && this.activeItem.picture.trim().length > 0;
      return hasSource && (!hasPic || this.imageErrored);
    },
  },
  methods: {
    selectItem(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
      this.imageErrored = false;
      this.isFlipped = false; // Flip zurücksetzen bei neuem Item
    },
    handleImageError(event) {
      if (event.target.src !== this.fallbackImage) {
        this.imageErrored = true;
        event.target.src = this.fallbackImage;
      }
    },
    toggleFlip() {
      console.log("activeItem:", this.activeItem);
      console.log("Beschreibung:", this.activeItem?.description);
      if (!this.activeItem || !this.activeItem.description) {
        console.warn("Keine gültige Beschreibung vorhanden.");
        return;
      }
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<!-- Externe Styles einbinden (ge‑scoped, damit SFC‑Friendly) -->
<style scoped src="../../../styles/rolltor.css"></style>
