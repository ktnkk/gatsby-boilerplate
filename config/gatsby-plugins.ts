import { GatsbyConfig } from "gatsby";

const plugins: GatsbyConfig["plugins"] = [
  {
    resolve: "gatsby-plugin-typegen",
    options: {
      outputPath: "types/gatsby-types.d.ts",
    },
  },
  {
    resolve: "gatsby-plugin-robots-txt",
    options: {
      configFile: "robots-txt.config.js",
    },
  },
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "YOUR_GOOGLE_TAGMANAGER_ID",
    },
  },
  "gatsby-plugin-sitemap",
  "gatsby-plugin-react-helmet",
];

export default plugins;
