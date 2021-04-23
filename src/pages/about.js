import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import "../styles/about.css"

function About({ data }) {
  return (
    <Layout>
      <div className="about-page">
        <h1>About page</h1>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  query ErrorPage {
    file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
