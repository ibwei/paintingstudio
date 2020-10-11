<template>
  <section>
    <div class="pattern">
      <div class="face face1"></div>
      <div class="face face2"></div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section {
  opacity: 0.6;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

.pattern {
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
  animation: animateBg 50s ease-in-out infinite;
}

.pattern .face {
  position: relative;
  width: 100%;
  height: 50vh;
  background: url('../../assets/images/art/check.jpg');
  background-size: 400px 400px;
  animation: animate 50s linear infinite;
}

.pattern .face.face2 {
  height: 100vh;
  transform-origin: top;
  transform: rotateX(70deg);
}

.pattern .face1:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 125px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent);
}

.pattern .face2:before {
  content: '';
  position: absolute;
  bottom: top;
  left: 0;
  width: 100%;
  height: 125px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent);
}

@keyframes animate {
  0% {
    background-position: 0;
  }
  50% {
    background-position: 100px;
  }
  100% {
    background-position: 0;
  }
}

@keyframes animateBg {
  0%,
  100% {
    transform: scale(1) rotate(-15deg);
  }
  50% {
    transform: scale(1.6) rotate(15
    deg);
  }
}
</style>
