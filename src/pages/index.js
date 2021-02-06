import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>test</h1>
    <a href='./speed/example-multipleServers-full.html'>multipleServersfull</a>
    <a href='./speed/example-multipleServers-pretty.html'>multipleServerspretty</a>
    <a href='./speed/example-singleServer-basic.html'>singleServerbasic</a>
    <a href='./speed/example-singleServer-chart.html'>singleServerchart</a>
    <a href='./speed/example-singleServer-customSettings.html'>singleServercustomSettings</a>
    <a href='./speed/example-singleServer-full.html'>singleServerfull</a>
    <a href='./speed/example-singleServer-gauges.html'>singleServergauges</a>
    <a href='./speed/example-singleServer-pretty.html'>singleServerpretty</a>
    <a href='./speed/example-singleServer-progressBar.html'>singleServerprogressBar</a>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
