import {ref, onMounted} from 'vue';
import number from './comnponents/Number.vue';

<template lang="html">
  <div>
    <h1 class="headLine">WE´RE LAUNCHING SOON</h1>
    <div class="numberCounterWrapper">
    <number number="08" label="Days"></number>
    <number number="23" label="Hours"></number>
    <number number="55" label="Minutes"></number>
    <number number="41" label="Seconds"></number>
    </div>
  </div>
</template>
<script lang="js">
</script>
<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap");
#__nuxt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

body {
  background-color: #1e1e2a;
  background-image: url("images\bg-stars.svg");
  color: #ffffff;
  font-family: "Red Hat Text", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
}

.headLine {
  margin-top: 20vh;
  letter-spacing: 4px;
  font-size: 21px;
}
.numberCounterWrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 5vh;
}
</style>