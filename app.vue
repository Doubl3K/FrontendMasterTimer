import {ref, onMounted} from 'vue';
import number from './comnponents/Number.vue';
import hills from './components/Hills.vue';

<template lang="html">
  <div class="wrapper">
    <div class="contentWrapper">
      <h1 class="headLine">WE´RE WOCHENENDE SOON</h1>
      <div class="numberCounterWrapper">
        <number number=08 label="Days"></number>
        <hills class="hills"></hills>
      </div>
    </div>
  </div>
</template>
<script lang="js">
</script>
<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap");

body {
  background-color: #1e1e2a;
  background-image: url("images\bg-stars.svg");
  color: #ffffff;
  font-family: "Red Hat Text", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 14px;
  text-align: center;
}

.headLine {
  margin-top: 10vh;
  margin-bottom: 20vh;
  letter-spacing: 4px;
  font-size: 48px;
}
.numberCounterWrapper {
  display: flex;
  justify-content: center;
  margin-top: 5vh;
}
.hills {
  position: fixed;
  bottom: 0;
  left: 0;
}

@media only screen and (max-width: 767px) {
  #tips,
  .boxfloat {
    width: 100%;
  }
  .headLine {
    font-size: 24px;
  }
}

@media only screen and (max-width: 479px) {
  .headLine {
    font-size: 18px;
  }
}

@media only screen and (max-width: 320px) {
  .headLine {
    font-size: 12px;
  }
}
</style>