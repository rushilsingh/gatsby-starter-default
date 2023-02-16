import * as React from "react"
import LeftColumn from "../components/LeftColumn"
import RightColumn from "../components/RightColumn"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./fonts.css"
import "./index.css"
import { SEO } from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Rushil Singh" />
    <div class="container">
      <div class="row">
        <LeftColumn></LeftColumn>
        <RightColumn></RightColumn>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const Head = () => (
  <SEO />
)
