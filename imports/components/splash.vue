<template>
  <div class="splash">
    <div class="brand heading">PRESIDENTIAL PRAYER NETWORK</div>
    <div class="tagline">24 hour prayer and intercession for world leaders</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.splash {
  border: 2px solid white;
  height: fit-content;
  width: fit-content;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.brand {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 60px;
  color: white;
  line-height: 42px;
}

.tagline {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "acumin-pro-condensed", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;
}
</style>
