import { Leaders } from "./collection";

Meteor.publish("Leaders", function () {
  return Leaders.find({});
});
