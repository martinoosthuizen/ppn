<template>
  <div class="app">
    <router-view class="route-content"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  min-width: 100%;
  max-width: 100%;
  min-height: 100vh;
  background-color: #000011;
  background-image: url("/images/backgrounds/rushmore.jpg");
  background-size: cover;
}
</style>
