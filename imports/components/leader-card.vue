<template>
  <div class="leader-card">
    <div
      class="leader-image"
      :style="`background-image: url('${leader.image}')`"
    ></div>
    <div class="leader-description">
      <div>
        <span class="heading" style="color: black"
          >{{ leader.designation }} {{ leader.name }}</span
        ><br />
        <span class="subheading">{{ leader.country }}</span>
      </div>
      <img :src="leader.flag" height="20" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["leader"],
};
</script>

<style scoped>
.leader-card {
  height: 430px;
  width: 340px;
  min-width: 340px;
  max-width: calc(100vw - 10px);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
}

.leader-image {
  flex-grow: 1;
  height: 100%;
  width: 100%;
  background-size: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.leader-description {
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  flex-grow: 0;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
}
</style>
