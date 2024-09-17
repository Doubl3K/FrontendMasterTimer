<template lang="html">
    <div class="numberWrapperWrapper">
     
      <div class="leWrapper">
         <div class="numberWrapper bottom">
            <div class="inner">{{ time.days }} </div>
        </div>
          <div class= "lineDividerWrapper">
          <div class="thePoint left"></div>
          <div class= "lineDivider"></div>
          <div class="thePoint right"></div>
        </div>
        <div class= "numberWrapper top days">
            <div class="inner">{{ time.days }} </div>
        </div>
        <label>DAYS</label>
      </div>
      
      <div class="leWrapper">
         <div class="numberWrapper bottom">
            <div class="inner">{{ time.hours }} </div>
        </div>
          <div class= "lineDividerWrapper">
          <div class="thePoint left"></div>
          <div class= "lineDivider"></div>
          <div class="thePoint right"></div>
        </div>
        <div class= "numberWrapper top hours">
            <div class="inner">{{ time.hours }} </div>
        </div>
        <label>HOURS</label>
      </div>
        
      <div @click="startNewTimer" class="leWrapper">
         <div class="numberWrapper bottom">
            <div class="inner">{{ time.minutes }} </div>
        </div>
        <div class= "lineDividerWrapper">
          <div class="thePoint left"></div>
          <div class= "lineDivider"></div>
          <div class="thePoint right"></div>
        </div>
        <div class= "numberWrapper top minutes">
            <div class="inner">{{ time.minutes }} </div>
        </div>
        <label>MINUTES</label>
      </div>

      <div class="leWrapper">
         
           <div class="numberWrapper bottom">
              <div class="inner">{{ time.seconds }} </div>
                   </div>
                   <div class= "lineDividerWrapper">
            <div class="thePoint left"></div>
            <div class= "lineDivider"></div>
            <div class="thePoint right"></div>
                   </div>
                   <div class= "numberWrapper top seconds">
              <div class="inner">{{ time.seconds }} </div>
                   </div>
        
        <label>SECONDS</label>
      </div>
    </div>
</template>

<script setup lang="js">
import { ref, onMounted, watch } from 'vue';

let launchDate = new Date("2024-12-13T15:00").getTime(); 

const props = defineProps({
  number: Number,
  label: String
});

const time = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

const countDown = () => {
  let now = new Date().getTime();
  const distance = launchDate - now;

  time.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
  time.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  time.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  time.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);
};

function flipDays() {
    document.querySelector('.days').classList.add('animation');
  setTimeout(() => {
  document.querySelector('.days').classList.remove('animation');
  }, 1000);
}

function flipHours() {
    document.querySelector('.hours').classList.add('animation');
  setTimeout(() => {
  document.querySelector('.hours').classList.remove('animation');
  }, 1000);
}

function flipMinutes() {
    document.querySelector('.minutes').classList.add('animation');
  setTimeout(() => {
  document.querySelector('.minutes').classList.remove('animation');
  }, 900);
}

function flipSeconds() {
  setTimeout(() => {
    document.querySelector('.seconds').classList.add('animation');
  }, 700);
  setTimeout(() => {
  document.querySelector('.seconds').classList.remove('animation');
  }, 250);
}

watch(() => time.value.days, (newVal, oldVal) => {
  flipDays();
});

watch(() => time.value.hours, (newVal, oldVal) => {
  flipHours();
});

watch(() => time.value.minutes, (newVal, oldVal) => {
  flipMinutes();
});

watch(() => time.value.seconds, (newVal, oldVal) => {
  flipSeconds();
});

onMounted(() => {
  setInterval(countDown, 1000);
});

function startNewTimer() {
  launchDate = new Date("2025-12-13T15:00").getTime();
}
</script>

<style lang="css">
.numberWrapper {
  display: flex;
  width: 100%;
  aspect-ratio: 1/1;
  background-color: grey;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-size: 3rem;
  color: hsl(345, 95%, 68%);
  position: absolute;
}

.numberWrapperWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  width: 50%;
}

.timeWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.leWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 400px;
  width: 20%;
}

.leWrapper > label {
  font-size: 1rem;
  color: grey;
  letter-spacing: 0.5rem;
}

.inner {
  transform-style: preserve-3d;
  font-weight: 700;
  font-size: 6rem;
}

.top {
  perspective: 1000px;
  background-color: #2c2c44;
}

.bottom {
  background-color: #2c2c44;
}

.animation {
  animation: flip3D 0.7s;
}

label {
  margin-top: 23vh;
  font-weight: 700;
}

.numberWrapper.seconds {
  cursor: pointer;
}

.lineDividerWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(10vh - 7.5px);
  z-index: 10;
  height: 15px;
  width: 100%;
  opacity: 0.3;
}

.lineDivider {
  width: 100%;
  height: 5%;
  z-index: 11;
  background-color: black;
}

.thePoint {
  width: 8%;
  height: 100%;
  background-color: black;
}

.right {
  border-radius: 100% 0 0 100%;
}

.left {
  border-radius: 0 100% 100% 0;
}

.wrapMe {
  height: 100%;
  width: 100%;
}

@media only screen and (max-width: 1000px) {
  .numberWrapper {
    width: 10vh;
    height: 10vh;
  }
  .numberWrapperWrapper {
    width: 80%;
  }

  label {
    margin-top: 150px;
  }

  .inner {
    font-size: 2rem;
  }
  .lineDividerWrapper {
    display: none;
  }
}

@media only screen and (max-width: 800px) {
  .numberWrapperWrapper {
    width: 100%;
  }

  label {
    font-size: 0.7rem !important;
    letter-spacing: 0.3rem !important;
  }

  body {
    overflow: hidden;
  }
}

@media only screen and (max-width: 400px) {
  .numberWrapper {
    width: 7vh;
    height: 7vh;
  }
  .numberWrapperWrapper {
    width: 100%;
  }

  label {
    letter-spacing: 0.1rem !important;
  }

  .inner {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 300px) {
  .numberWrapperWrapper {
    width: 80%;
    height: 30vh;
    flex-direction: column;
  }

  .numberWrapper {
    width: 5vh;
    height: 5vh;
  }

  .inner {
    font-size: 2rem;
  }

  label {
    margin-top: 60px;
    margin-bottom: 10px;
  }
  body {
    overflow: hidden;
  }
}

@keyframes flip3D {
  0% {
    taransform: perspective(400px) rotateX(0deg);
    z-index: 1;
    opacity: 1;
  }
  40% {
    opacity: 0.3;
  }
  50% {
    z-index: 0;
    opacity: 0.2;
  }
  75% {
    opacity: 0.05;
  }
  100% {
    transform: perspective(400px) rotateX(-180deg);
    z-index: 0;
    opacity: 0;
  }
}
</style>