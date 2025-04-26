<template>
    <header>
  <div class="headline">
    <a href="/LoeschZwerge/">
      <img src=images/Loeschzwerge_Logo_lightblue.svg alt="Logo" /></a
    >
  </div>
  <div class="nav">
    <nav>
      <a href="/LoeschZwerge/car" :class="{ active: currentPath === '/LoeschZwerge/car' }">Feuerwehrauto</a>
      <a href="/LoeschZwerge/about" :class="{ active: currentPath === '/LoeschZwerge/about' }"> About us</a>
      <div> {{ updatePath() }}</div>
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
  methods: {
    // Methode zum Aktualisieren des aktuellen Pfads
    updatePath() {
      
      console.log("Aktueller Pfad:", this.currentPath); // Debugging-Zwecke
    },
   
  },
  mounted() {
    this.currentPath = window.location.pathname;
    console.log(this.currentPath) // Initialer Aufruf, um den aktuellen Pfad zu setzen
  },
};
</script>

<style>
  
  body {
    margin: 0;

    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #4a3c3c;
  }

  /* Header Styling */
  header {
    position: relative;
    width: 100%;
    height: 20vh; /* Höhe des Headers */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Verhindert Überlauf */
    
  }

  header::before {
    content: "";
    inset: 0;
    position: fixed;
    background-image: url("images/header_schlauch4.png");
    background-size: cover;
    opacity: 0.6;
    z-index: 0; /* Stellt sicher, dass der Hintergrund hinter dem Inhalt liegt */
    height: 8vw;
  }

  header > * {
    position: relative;
    z-index: 1; /* Stellt sicher, dass der Inhalt über dem Hintergrundbild liegt */
  }

  /* Logo links oben fixieren */
  .headline {
    margin: 0;
    position: absolute;
    top: 2vw;
    left: 4vw;
  }

  header img {
    height: 4vw;
    min-height: 32px;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.1));
    image-rendering: crisp-edges;
    z-index: 1;
    position: fixed;
    top: 2vw; /* Abstand vom oberen Rand */
    left: 2vw; /* Abstand vom linken Rand */
  }

  .headline a:hover img {
    transform: scale(1.03);
    cursor: pointer;
  }

  nav {
    position: fixed;
    top: 4vw; /* Positioniert die Navigation 80% vom oberen Rand */
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
    color: #ffffff;
    text-decoration: none;
    padding: 0.5vw;
    margin: 0.3vw;
    border-radius: 6px;
    height: 1vw;
    
    

    
  }

  /* Hover Effekt */
  .nav a:hover {
    background: #ffffff49;
    color: #fff;
    font-size: larger;
    
  }

  .nav a.active {
    background: #ffffff28;
    color: #fff;
    font-size: larger;
    
  }

  .nav a.active:hover {
    background: #ffffff49;
    color: #fff;
    font-size: larger;
    
  }
</style>