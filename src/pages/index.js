import React from "react"
// import { Link } from "gatsby"
import Hero from "../components/hero"
import Reviews from "../components/reviews"
import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Reviews />
    {/* <SEO title="Home" /> */}
    {/* <h1>TP Finder</h1> */}
  </Layout>
)

export default IndexPage
