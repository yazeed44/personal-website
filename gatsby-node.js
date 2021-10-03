/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createOpenGraphImage } = require('gatsby-plugin-open-graph-images')

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  createOpenGraphImage(createPage, {
    path: '/og-image/index.png',
    component: path.resolve(`src/pages/index.js`),
    size: {
      width: 1200,
      height: 750,
    },
    context: {
      description: 'Preview image',
    },
  })
}
