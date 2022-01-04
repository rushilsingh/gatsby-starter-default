import * as React from "react"
import  Panel from '../components/panel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Seo from "../components/seo"
import './fonts.css';
import './index.css';
const IndexPage = () => (
  <Layout>
      <Seo title="Rushil Singh" />
    <Panel />
  </Layout>
)

export default IndexPage
