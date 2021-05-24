/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/products/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Beli Makan",
    description: "Perut kenyang, hatipun senang",
    copyright: "2021 copyright Beli Makan",
    contact: "khoirrurrohman@gmail.com",
    address: "Jl. Pahlawan, Lowokwaru, Malang, East Java, Indonesia",
  },
}
