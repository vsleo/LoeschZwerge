<template>
  <header>
    <div class="headline">
      <a href="/LoeschZwerge/">
        <img src="images/Loeschzwerge_Logo_lightblue.svg" alt="Logo"
      /></a>
    </div>
    <div class="nav">
      <nav>
        <a
          href="/LoeschZwerge/car"
          :class="{ active: currentPath === '/car' || currentPath === '/car/' }"
        >
          Feuerwehrauto</a
        >

        <a
          href="/LoeschZwerge/quiz"
          :class="{
            active: currentPath === '/quiz' || currentPath === '/quiz/',
          }"
        >
          Quiz</a
        >
        <a
          href="/LoeschZwerge/lernvideos"
          :class="{
            active:
              currentPath === '/lernvideos' || currentPath === '/lernvideos/',
          }"
        >
          Lernvideos</a
        >
        <a
          href="/LoeschZwerge/hydrantdemo"
          :class="{
            active:
              currentPath === '/hydrantdemo' || currentPath === '/hydrantdemo/',
          }"
          >Hydranten-Game</a
        >
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      currentPath: "",
    };
  },
  methods: {},
  mounted() {
    const base = "/LoeschZwerge";
    this.currentPath = window.location.pathname.replace(base, "");
    console.log(this.currentPath);
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Consolas, monospace;
  color: #4a3c3c;
}

/* Header Styling */
header {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Verhindert Überlauf */

  &::before {
    background: linear-gradient(
      135deg,
      #0b0c2a 0%,
      #1a1a40 25%,
      #3c1053 50%,
      #6f42c1 75%,
      #00c9ff 100%
    );
    box-shadow: 0 5px 10px rgb(255 255 255 / 50%);
    content: "";
    inset: 0;
    position: fixed;
    background-size: cover;
    opacity: 0.9;
    z-index: 5; /* Stellt sicher, dass der Hintergrund hinter dem Inhalt liegt */
    height: 5vw;
  }
}

header > * {
  position: relative;
  z-index: 6; /* Stellt sicher, dass der Inhalt über dem Hintergrundbild liegt */
}

/* Logo links oben fixieren */
.headline {
  margin: 0;
  position: absolute;
  top: 2vw;
  left: 4vw;
}

header img {
  height: 2.5vw;
  margin-top: -1vw;
  min-height: 32px;
  filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 10%));
  image-rendering: crisp-edges;
  z-index: 1;
  position: fixed;
  top: 2vw; /* Abstand vom oberen Rand */
  left: 2vw; /* Abstand vom linken Rand */
  transition-property: transform;
  transition-duration: 0.125s;
}

.headline a:hover img {
  transform: scale(1.03);
  cursor: pointer;
}

nav {
  position: fixed;
  top: 2vw; /* Positioniert die Navigation 80% vom oberen Rand */
  height: 1vw; /* Abstand zwischen den Links */
  transform: translateX(-50%); /* Zentriert die Navigation */

  /* Vertikal zentriert (optional) */
}

/* Navigation rechts daneben */
.nav nav {
  font-size: 1vw;
}

/* Navigation Links */
.nav a {
  color: #fff;
  text-decoration: none;
  padding: 0.3vw 0.5vw;
  margin: 0.2vw;
  border-radius: 6px;
  height: 1vw;
  transition-property: background-color;
  transition-duration: 0.25s;

  /* Hover Effect */
  &:hover {
    background-color: #ffffff49;
    color: #fff;
  }
}

.nav a.active {
  background: #ffffff28;
  color: #fff;
}

.nav a.active:hover {
  background: #ffffff49;
  color: #fff;
}
</style>
