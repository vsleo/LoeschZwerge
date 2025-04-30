<template>
  <div class="full-img">
    <img src="images/Geräteraum_G1.jpg" />
  </div>

  <div class="liste">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        @click="toggleVisibility(index)"
      >
        {{ item.name }}
        {{ item.visibility }}
        <div v-if="item.visibility" class="item">
          <img :src="item.picture" />
        </div>
        <div v-if="item.visibility" class="beschreibung">
          <p>{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
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
      console.log("Item clicked:", this.items[index].name);
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

<style scoped>
.full-img {
  width: 18vw;
  height: 28vw;
  position: absolute;
  top: 10vw;
  left: 10vw;
  background-color: rgba(255, 255, 255, 0.552);
  border-radius: 2vw;

  display: flex;
  justify-content: center;
  align-items: center;
}

.full-img img {
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 2vw;
  border: 2px solid #2c2c2c;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.liste {
  width: 30vw;
  height: 28vw;
  position: absolute;
  top: 10vw;
  left: 60vw;
  background-color: rgba(255, 255, 255, 0.552);
  border-radius: 2vw;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}
li {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
}

.item {
  width: 30vw;
  height: 28vw;
  position: absolute;
  top: 30vw;
  left: -50vw;
  background-color: rgba(255, 255, 255, 0.552);
  border-radius: 2vw;

  display: flex;
  justify-content: center;
  align-items: center;
}

.item img {
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 2vw;
  border: 2px solid #2c2c2c;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.beschreibung {
  width: 30vw;
  height: 28vw;
  position: absolute;
  top: 30vw;
  left: 0vw;
  background-color: rgba(255, 255, 255, 0.552);
  border-radius: 2vw;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
