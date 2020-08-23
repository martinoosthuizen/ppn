import Vue from "vue";
import VueMeteorTracker from "vue-meteor-tracker";
Vue.use(VueMeteorTracker);

import App from "./App.vue";
import "./main.html";
import routerFactory from "./routes";

Meteor.startup(() => {
  const router = routerFactory.create();
  new Vue({
    router,
    el: "#app",
    ...App,
  });
});
