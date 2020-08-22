import { Leaders } from "./collection";
Meteor.methods({
  AddLeader(leader) {
    // TODO: security and data validation
    return Leaders.insert(leader);
  },
});
