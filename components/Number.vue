<template lang="html">
    <div class="numberWrapperWrapper">
        <div class="numberWrapper">
            {{number}}
        </div>
        <label>{{label}}</label>
    </div>
</template>
<script setup lang="js">
    defineProps(
        {
            number: Number,
            label: String
        }
    );

</script>
<style lang="css">
.numberWrapper {
  display: flex;
  width: 10vh;
  height: 10vh;
  background-color: grey;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-size: 2rem;
  color: hsl(345, 95%, 68%);
  margin-bottom: 10px;
}

.numberWrapperWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.6rem;
  width: 100%;
}

.numberWrapperWrapper > label {
  font-size: 0.6rem;
  opacity: 0.7;
  font-weight: 200;
  letter-spacing: 2px;
}
</style>