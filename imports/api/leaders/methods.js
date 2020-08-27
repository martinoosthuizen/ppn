import { Leaders } from "./collection";
import schema from "./schema";

if (Meteor.isServer) {
  Meteor.methods({
    AddLeader(leader) {
      // TODO: security and data validation
      return Leaders.insert(schema.generate(leader));
    },
  });
}
