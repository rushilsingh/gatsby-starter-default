import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <main>{children}</main>
      <footer
        style={{
          marginTop: `2rem`,
          backgroundColor: "white",
          width: "231px",
          padding: `0.5rem`,
          textAlign: "center",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
        }}
      >
        © {new Date().getFullYear()},{" "}
        {data.site.siteMetadata.title || "Rushil Singh"}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
