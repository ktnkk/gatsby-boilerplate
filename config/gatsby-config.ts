import { GatsbyConfig } from "gatsby";
import { SITE_NAME as name, SITE_URL as siteUrl } from "./constants";
import { SiteMetaData } from "./types";
import plugins from "./gatsby-plugins";

const _siteMetaData: SiteMetaData = {
  siteUrl,
  title: name,
  description: "",
  author: "",
  copyright: `${new Date().getFullYear()} © example`,
  image: "https://miyauchi.dev/logo.svg",
  social: {
    twitter: "@example",
    github: "example",
  },
};

const siteMetadata: GatsbyConfig["siteMetadata"] = _siteMetaData;

const config: GatsbyConfig = {
  siteMetadata,
  plugins,
};

export default config;
