// Import the router
import { RouterFactory, nativeScrollBehavior } from "meteor/akryum:vue-router2";

const routerFactory = new RouterFactory({
  mode: "history",
  scrollBehavior: nativeScrollBehavior,
});

// Components
import Leaders from "../imports/views/Leaders.vue";
import LeaderProfile from "../imports/views/LeaderProfile.vue";

RouterFactory.configure((factory) => {
  // Simple routes
  factory.addRoutes([
    {
      path: "/",
      name: "leaders",
      component: Leaders,
    },
    {
      path: "/leader/:id",
      name: "leader-profile",
      component: LeaderProfile,
    },
  ]);
});

export default routerFactory;
