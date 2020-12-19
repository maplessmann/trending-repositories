require('dotenv').config()

const gatsbySourceFilesystem = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${__dirname}/src/images`,
  },
}

const gatsbyPluginManifest = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `trending-repositories`,
    short_name: `Trending Repositories`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/images/gatsby-icon.png`,
  },
}

const gatsbyPluginSass = {
  resolve: `gatsby-plugin-sass`,
  options: {
    data: `
      @import "${__dirname}/src/styles/index";
    `,
  },
}

const gatsbySourceGraphql = {
  resolve: `gatsby-source-graphql`,
  options: {
    typeName: `GitHub`,
    fieldName: `github`,
    url: `https://api.github.com/graphql`,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  },
}

module.exports = {
  siteMetadata: {
    title: `Trending Repositories`,
    description: `Moving open source forward`,
  },
  plugins: [
    gatsbySourceFilesystem,
    gatsbySourceGraphql,
    gatsbyPluginManifest,
    gatsbyPluginSass,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
  ],
}
