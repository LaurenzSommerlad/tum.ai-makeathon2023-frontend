/**
 * @type {import('gatsby').GatsbyConfig}
 */
/* eslint-disable global-require */
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config");

const fullConfig = resolveConfig(tailwindConfig);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `TUM.ai Makeathon 2023`,
    description: "TUM.ai Makeathon 2023 Frontend",
    author: "@laurenzsommerlad",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `makeathon2023-mvp`,
        short_name: `makeathon2023`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.white,
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
