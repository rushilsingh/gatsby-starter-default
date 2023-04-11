import * as React from "react"
import ProfileContainer from "../components/ProfileContainer"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./fonts.css"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Rushil Singh" />
    <div class="container">
      <div class="row">
        <ProfileContainer></ProfileContainer>
      </div>
    </div>
  </Layout>
)

export default IndexPage
