import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

function Footer() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          address
          contact
          copyright
        }
      }
    }
  `)

  const { title, address, contact, copyright } = data.site.siteMetadata

  return (
    <>
      <footer className="bg-white py-5 font-display text-customBlack">
        <div className="grid xs:grid-cols-1 lg:grid-cols-2 xs:w-4/5 lg:w-5/6 m-auto">
          <div className="xs:mb-5">
            <h1 className="text-xl font-bold pb-3">{title}</h1>
            <h3 className="lg:text-sm xs:text-xs pb-2">Alamat : {address}</h3>
            <h3 className="lg:text-sm xs:text-xs pb-2">Email : {contact}</h3>
          </div>
          <div className="flex justify-around lg:text-sm xs:text-xs">
            <Link className="px-2" to="/">
              Home
            </Link>
            <Link className="px-2" to="/products">
              Produk & Jasa
            </Link>
            <Link className="px-2" to="/about">
              About Us
            </Link>
          </div>
        </div>
        <div className="text-center font-bold xs:text-xs lg:text-sm pt-5">
          {copyright}
        </div>
      </footer>
    </>
  )
}

export default Footer
