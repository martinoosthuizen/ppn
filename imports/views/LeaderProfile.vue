<template>
  <div class="profile-layout">
    <navbar :showBackBtn="true"></navbar>
    <div v-if="$subReady.Leaders" class="profile-columns">
      <leader-card :leader="leader"></leader-card>
      <div class="slots-layout">
        <div class="heading profile-heading">
          {{ leader.designation }} {{ leader.name }}
        </div>
        <div class="slots">
          <div v-for="slot in leader.slots" :key="slot._id" class="slot">
            {{ slot.label }}
          </div>
        </div>
        <div
          class="info"
          style="font-weight: bold; text-align: center; margin-top: 20px"
        >
          Each slot represents 15 minutes. Select as many as you can handle.
        </div>
        <div class="key-container" style="margin-top: 10px">
          <div class="slot your-slot" style="width: fit-content">
            YOUR SLOTS
          </div>
          <div class="slot active-slot" style="width: fit-content">
            ACTIVE SLOTS
          </div>
          <div class="slot" style="width: fit-content; border: 1px solid white">
            NO ACTIVITY
          </div>
        </div>
        <div class="info" style="text-align: center; padding-top: 40px">
          Our goal is to cover our leaders in prayer every minute of every day.
          You will receive a daily reminder just before your selected time
          slot(s). Imagine what God will do in response...
        </div>
        <div
          class="info"
          style="
            font-size: 24px;
            margin-top: 40px;
            margin-bottom: 20px;
            text-align: center;
          "
        >
          “I urge, then, first of all, that petitions, prayers, intercession and
          thanksgiving be made for all people — for kings and all those in
          authority, that we may live peaceful and quiet lives in all godliness
          and holiness.”<br /><strong>1 Timothy 2:1-2</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Leaders } from "../api/leaders/collection";
import LeaderCard from "../components/leader-card";
import Navbar from "../components/navbar";

export default {
  data() {
    return {
      leader_id:
        (this.$route && this.$route.params && this.$route.params.id) || null,
    };
  },
  meteor: {
    $subscribe: {
      Leaders: [],
    },
    leader() {
      console.log(
        "Leader...",
        this.leader_id,
        Leaders.findOne({ _id: this.leader_id })
      );
      if (!this.leader_id) return null;
      return Leaders.findOne({ _id: this.leader_id });
    },
  },

  components: {
    LeaderCard,
    Navbar,
  },
};
</script>

<style scoped>
.profile-layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  background-color: rgba(0, 0, 0, 0.8);
}

.profile-columns {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
}

.profile-heading {
  font-size: 60px;
  line-height: 42px;
}

@media (max-width: 720px) {
  .profile-columns {
    flex-direction: column;
    align-items: center;
  }
  .profile-heading {
    font-size: 40px;
    padding-top: 20px;
  }
}

.slots-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
  box-sizing: border-box;
}

.slots {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 20px;
}

.slot {
  color: white;
  width: 56px;
  height: 32px;
  border-radius: 5px;
  font-size: 16px;
  font-family: acumin-pro-condensed, sans-serif;
  font-weight: 300;
  font-style: normal;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 2px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.slot:hover {
  background-color: #ff4081;
  cursor: pointer;
}

.your-slot {
  background-color: #ff4081;
}

.active-slot {
  background-color: #008bd4;
}

.key-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
