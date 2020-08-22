<template>
  <div>
    <div v-if="!$subReady.Leaders">Loading...</div>
    <div v-else>
      <p v-for="leader in leaders" :key="leader._id">
        {{ leader.name }}
      </p>
    </div>
  </div>
</template>

<script>
import "../imports/api/leaders/collection";
import { Leaders } from "../imports/api/leaders/collection";

export default {
  data() {
    return {
      date: new Date(),
    };
  },

  meteor: {
    $subscribe: {
      Leaders: [],
    },
    leaders() {
      return Leaders.find({});
    },
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
