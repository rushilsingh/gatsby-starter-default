import * as React from "react"
import Left from '../components/left'
import Right from '../components/right'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Seo from "../components/seo"
import './fonts.css';
import './index.css';
const IndexPage = () => (
  <Layout>
    <Seo title="Rushil Singh" />
    <div class="container">
      <div class="row">
        <Left></Left>
        <Right></Right>
      </div>
    </div>

  </Layout>
)

export default IndexPage
