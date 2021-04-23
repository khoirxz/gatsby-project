import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import * as styles from "../styles/Home.module.css"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Toko Developer</h2>
          <h3>Beli kode ?</h3>
          <h3>
            Disini saja{" "}
            <span role="img" aria-label="smile">
              😃
            </span>
          </h3>
          <Link className={styles.btn} to="/products">
            Cari
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
