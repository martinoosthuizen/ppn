// Import the router
import { RouterFactory, nativeScrollBehavior } from "meteor/akryum:vue-router2";

const routerFactory = new RouterFactory({
  mode: "history",
  scrollBehavior: nativeScrollBehavior,
});

// Components
import Leaders from "../imports/views/Leaders.vue";

RouterFactory.configure((factory) => {
  // Simple routes
  factory.addRoutes([
    {
      path: "/",
      name: "leaders",
      component: Leaders,
    },
  ]);
});

export default routerFactory;
