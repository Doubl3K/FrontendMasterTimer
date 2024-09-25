<template lang="html">
    <div class="outerWrapper test">
        <div class="svg">
        <div class="socialWrapper">
            <a href="https://www.facebook.com" target="_blank" class="socialIcon">
                <img src="../images/icon-facebook.svg" alt="facebook icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" class="socialIcon">
                <img src="../images/icon-instagram.svg" alt="instagram icon" />
            </a>
            <a href="https://www.pinterest.com" target="_blank" class="socialIcon">
                <img src="../images/icon-pinterest.svg" alt="pinterest icon" />
            </a>
        </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="css">
.outerWrapper {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 30vh;
  width: 100%;
  overflow: hidden;
}

.svg {
  width: 100%;
  height: 80%;
  background-image: url("../images/pattern-hills.svg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.socialWrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 5vh;
  width: 7%;
}

.socialIcon:hover {
  transform: scale(1.2);
  transition: transform 0.3s;
  filter: hue-rotate(70deg);
}

@media only screen and (max-width: 1200px) {
  .socialWrapper {
    width: 30%;
  }
}

@media only screen and (max-width: 250px) {
  .socialWrapper {
    width: 80%;
  }
}
</style>