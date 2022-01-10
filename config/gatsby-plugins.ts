import { GatsbyConfig } from "gatsby";

const plugins: GatsbyConfig["plugins"] = [
  {
    resolve: "gatsby-plugin-typegen",
    options: {
      outputPath: "types/gatsby-types.d.ts",
    },
  },
];

export default plugins;
