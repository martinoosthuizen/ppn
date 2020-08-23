<template>
  <div class="leaders-view">
    <navbar></navbar>
    <splash></splash>
    <div class="instructions">
      Select a leader to pray for and pick your slots
    </div>
    <div v-if="!$subReady.Leaders">Loading...</div>
    <div v-else class="leader-carousel">
      <leader-card
        v-for="leader in leaders"
        :key="leader._id"
        :leader="leader"
        class="heading"
      >
        {{ leader.name }}
      </leader-card>
    </div>
  </div>
</template>

<script>
import { Leaders } from "../api/leaders/collection";
import Navbar from "../components/navbar";
import LeaderCard from "../components/leader-card";
import Splash from "../components/splash";

export default {
  meteor: {
    $subscribe: {
      Leaders: [],
    },
    leaders() {
      return Leaders.find({});
    },
  },

  components: {
    Navbar,
    LeaderCard,
    Splash,
  },
};
</script>

<style scoped>
.leaders-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  background-color: rgba(0, 0, 0, 0.45);
}

.splash {
  margin-bottom: 40px;
}

.instructions {
  font-size: 40px;
  font-family: "acumin-pro-condensed", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
}

.leader-carousel {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 435px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  overflow-x: scroll;
  margin-top: 10px;
}
</style>
