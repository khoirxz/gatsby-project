import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"

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
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="font-display bg-transparent">
      <div className="flex xs:px-4 lg:px-16 py-4 justify-between items-center">
        <h1 className="font-bold text-2xl text-primary">{title}</h1>
        <div className="flex xs:hidden sm:hidden font-semibold lg:block sm:text-base lg:text-base xs:text-xs">
          <Link className="px-6 hover:text-red-700" to="/">
            Home
          </Link>
          <Link className="px-6" to="/products">
            Produk & Jasa
          </Link>
          <Link className="px-6" to="/about">
            About Us
          </Link>
        </div>
        <div className="xs:block sm:block font-semibold lg:hidden">
          <button onClick={() => setNavbarOpen(!navbarOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* navbar dropdown */}
      <div
        className={
          "lg:hidden items-center w-full bg-base shadow-sm m-auto absolute flex-col" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <Link className="py-2 hover:text-red-700" to="/">
          Home
        </Link>
        <Link className="py-2" to="/products">
          Produk & Jasa
        </Link>
        <Link className="py-2" to="/about">
          About Us
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
