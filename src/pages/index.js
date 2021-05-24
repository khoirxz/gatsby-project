import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className="grid sm:grid-cols-1 lg:grid-cols-2 w-4/5 m-auto h-screen">
        <div className="xs:text-center lg:text-left lg:mt-20 xs:mt-10">
          <div className="hero-content font-bold font-display ">
            <h2 className="text-6xl">
              Beli <span className="text-primary">Makan</span>
            </h2>
            <h3 className="xs:text-3xl lg:text-5xl py-4">
              Perut kenyang, hatipun senang
            </h3>
            <h3 className="text-2xl mt-3">
              Cari kita disini!
              <span role="img" aria-label="smile">
                😃
              </span>
            </h3>
          </div>
          <button className="bg-red-500 rounded-2xl text-white px-4 py-2 w-28 mt-3 font-display font-bold hover:bg-red-700 active:bg-red-900 focus:outline-none">
            <Link to="/products">Cari</Link>
          </button>
        </div>
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="lg:w-96 lg:h-96 xs:w-56 xs:h-56 ml-auto mr-auto lg:mt-20 xs:mt-0"
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "cover.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
