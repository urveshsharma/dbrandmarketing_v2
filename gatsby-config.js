/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'dBrandMarketing - Digital Marketing & Web Development',
    description: 'A Digital Marketing Agency helping businesses and brands by making them popular on digital channels like google, facebook and other social media channels.',
    keywords: 'marketing, SEO, SMM, SEM, web-development',
    url: 'https://dbrandmarketing.com',
    image: './src/assets/img/dbrandmarkering/dBrandMarketing_aboutUs.jpg',
    twitterUsername: '@dBrandMarketing',
    author: 'Urvesh Sharma'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/img/`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Bree Serif`
          },
          {
            family: `Roboto`
          },
          {
            family: `PT Sans Narrow`
          },
          {
            family: `Courgette`
          },
          {
            family: `Fredoka One`
          }
        ],
      },
    }
        
  ]
}
