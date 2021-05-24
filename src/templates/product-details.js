import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

function ProductDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="xs:w-11/12 lg:w-4/5 my-20 m-auto font-display">
        <h2 className="text-5xl font-bold mb-5">{title}</h2>
        <h3 className="mb-5 font-light text-lg">{stack}</h3>
        <div className="image-container-single">
          <Img
            fluid={featuredImg.childImageSharp.fluid}
            className="lg:w-96 lg:h-96 mx-auto rounded-3xl mb-10"
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default ProductDetails

export const query = graphql`
  query ProductPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        stack
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
