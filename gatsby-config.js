/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  steMetadata: {
    title: 'Simply Resipes',
    description: 'Nice and clean recipes site',
    author: '@vihrogonov',

  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`, 
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
