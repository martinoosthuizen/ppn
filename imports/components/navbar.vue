<template>
  <div class="navbar">
    <div>
      <img
        v-if="showBackBtn"
        @click="$router.push('/')"
        src="/images/back.svg"
        width="20"
        class="nav-button"
      />
    </div>
    <div class="nav-link">SIGN IN</div>
  </div>
</template>

<script>
export default {
  props: ["showBackBtn"],
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
}

.nav-link {
  color: white;
  text-align: right;
  font-family: acumin-pro-extra-condensed, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
}

.nav-button {
  cursor: pointer;
}
</style>
