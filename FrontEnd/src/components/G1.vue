<template>
  <div class="full-img"><img src="images/Geräteraum_G1.jpg" /></div>
</template>

<script></script>

<style scoped>
.full-img {
  width: 30vw;
  height: 50vw; /* Höhe des Headers */
  position: absolute;
  top: 20vw;
  left: 5vw;

  background-color: rgba(255, 255, 255, 0.552);
  border-radius: 2vw;
  z-index: -1;
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
</style>
