import { SSTConfig } from "sst";

export default {
  config(_input) {
    return {
      name: "nextjs-sst-app",
      region: "us-east-1",
    };
  },
  stacks(app) {},
} satisfies SSTConfig;
