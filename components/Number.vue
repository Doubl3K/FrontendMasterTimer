<template lang="html">
    <div class="numberWrapperWrapper">
     
      <div class="leWrapper">
         <div class="numberWrapper bottom">
            <div class="inner">{{ time.days }} </div>
        </div>
        <div class= "numberWrapper top days">
            <div class="inner">{{ time.days }} </div>
        </div>
        <label>Days</label>
      </div>
      
      <div class="leWrapper">
         <div class="numberWrapper bottom">
            <div class="inner">{{ time.hours }} </div>
        </div>
        <div class= "numberWrapper top hours">
            <div class="inner">{{ time.hours }} </div>
        </div>
        <label>Hours</label>
      </div>
        
      <div class="leWrapper">
         <div class="numberWrapper bottom">
            <div class="inner">{{ time.minutes }} </div>
        </div>
        <div class= "numberWrapper top minutes">
            <div class="inner">{{ time.minutes }} </div>
        </div>
        <label>Minutes</label>
      </div>

      <div class="leWrapper">
         <div class="numberWrapper bottom">
            <div class="inner">{{ time.seconds }} </div>
        </div>
        <div class= "numberWrapper top seconds">
            <div class="inner">{{ time.seconds }} </div>
        </div>
        <label>Seconds</label>
      </div>
    </div>
</template>

<script setup lang="js">
import { ref, onMounted, watch } from 'vue';

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
  const launchDate = new Date("2024-09-13T15:00").getTime();
  const now = new Date().getTime();
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
  }, 1000);
}

function flipSeconds() {
  document.querySelector('.seconds').classList.add('animation');
  setTimeout(() => {
  document.querySelector('.seconds').classList.remove('animation');
  }, 700);
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
</script>

<style lang="css">
.numberWrapper {
  display: flex;
  width: 20vh;
  height: 20vh;
  background-color: grey;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-size: 2rem;
  color: hsl(345, 95%, 68%);
  position: absolute;
}

.numberWrapperWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  width: 70%;
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
  perspective: 900px;
}

.leWrapper > label {
  font-size: 1rem;
  color: grey;
}

.inner {
  transform-style: preserve-3d;
  font-weight: 700;
}

.top {
  perspective: 1000px;
  background-color: #2c2c44;
}

.bottom {
  background-color: #35354d;
}

.animation {
  animation: flip3D 1s infinite;
}

label {
  margin-top: 150px;
}

@media only screen and (max-width: 767px) {
  .numberWrapper {
    width: 8vh;
    height: 8vh;
  }
  .numberWrapperWrapper {
    width: 80%;
  }
}

@keyframes flip3D {
  0% {
    transform: rotateX(0deg);
    opacity: 100;
  }
  100% {
    transform: rotateX(180deg);
    opacity: 0%;
  }
}
</style>