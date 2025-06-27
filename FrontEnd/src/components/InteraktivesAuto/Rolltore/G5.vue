<template>
  <div class="full-section">
    <!-- Übersichtsfoto der Geräteraumtür -->
    <div class="full-img">
      <img src="images/Rolltore/G5/Geräteraum_G5.png" />
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
  <div class="navigation-buttons">
    <a href="g4">
      <button>G4</button>
    </a>
    <a href="quizallgemein">
      <button>Quiz</button>
    </a>
    <a href="g6">
      <button>G6</button>
    </a>
  </div>
</template>

<script>
import "../../../styles/rolltor.css";
import itemsData from "../../../files/rolltore/items_g5.json"

export default {
  name: "G5View",
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
      items: [],
    };
  },
  mounted() {
    this.items = itemsData;
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
