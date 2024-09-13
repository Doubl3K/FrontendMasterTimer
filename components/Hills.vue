<template lang="html">
    <div class="outerWrapper">
        <div src="../images/pattern-hills.svg" class="svg">
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
  height: 70%;
  background-image: url("../images/pattern-hills.svg");
  display: flex;
  justify-content: center;
  align-items: center;
}

.socialWrapper {
  display: flex;
  justify-content: space-between;
  width: 40%;
}

.socialIcon:hover {
  transform: scale(1.2);
  transition: transform 0.3s;
}
</style>