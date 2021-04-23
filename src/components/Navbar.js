import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Produk & Jasa</Link>
        <Link to="/about">About Us</Link>
      </div>
    </nav>
  )
}

export default Navbar
