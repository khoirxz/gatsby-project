import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
// import "../styles/products.css"

function Products({ data }) {
  console.log(data)
  const products = data.products.nodes
  const kontak = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className="font-display">
        <h1 className="mt-20 mb-10 text-center text-customBlack font-bold xs:text-2xl lg:text-3xl">
          Mau <span className="text-primary">Makan</span> apa ?{" "}
          <span role="img" aria-label="star">
            😁
          </span>
        </h1>
        <div className="grid lg:grid-cols-4 xs:grid-cols-1 gap-4 w-11/12 m-auto">
          {products.map(product => (
            <Link to={"/products/" + product.frontmatter.slug} key={product.id}>
              <div className="info-product">
                <Img
                  fluid={product.frontmatter.thumb.childImageSharp.fluid}
                  className="lg:w-60 lg:h-60 xs:w-40 xs:h-40 md:w-52 md:h-52 m-auto rounded-2xl"
                />
                <div className="detail-description">
                  <h3 className="text-center font-semibold text-lg py-3">
                    {product.frontmatter.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-20 font-light text-center mb-10">
          suka apa yang saya buat ? hubungi saya di{" "}
          <span className="font-semibold text-primary">{kontak}</span>
        </p>
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
