import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import "../styles/products.css"

function Products({ data }) {
  console.log(data)
  const products = data.products.nodes
  const kontak = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div>
        <h1>Product page</h1>
        <p>say hello to The new page</p>
        <div>
          {products.map(product => (
            <Link to={"/products/" + product.frontmatter.slug} key={product.id}>
              <div>
                <Img fluid={product.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{product.frontmatter.title}</h3>
                <p>{product.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>suka apa yang saya buat ? hubungi saya di {kontak}</p>
      </div>
    </Layout>
  )
}

export default Products

export const query = graphql`
  query GetAllProduct {
    products: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          stack
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`