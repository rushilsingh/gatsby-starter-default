import * as React from "react"
import ProfileContainer from "../components/ProfileContainer"
import "./fonts.css"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Rushil Singh" />
    <div className="container">
      <div className="row">
        <ProfileContainer></ProfileContainer>
      </div>
    </div>
  </Layout>
)

export default IndexPage
