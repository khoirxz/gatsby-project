import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
// import "../styles/about.css"

function About({ data }) {
  return (
    <Layout>
      <div className="w-full my-10">
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="w-36 h-36 rounded-full mx-auto z-0"
        />
        <div className="w-3/5 m-auto px-5 py-3 bg-white rounded-2xl">
          <h1 className="font-semibold text-lg">
            Halo perkenalkan saya{" "}
            <span className="uppercase text-primary">rizqi</span> !
          </h1>
          <p>ini adalah project sedehana saya untuk tugas kuliah.</p>
        </div>
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
