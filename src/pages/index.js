import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Homepage(props) {
  const { wpPage } = props.data
  const { homepage } = wpPage

  return (
    <Layout {...homepage}>
      <h1>{homepage.hero.heading}</h1>
      <h2>{homepage.hero.subheading}</h2>
      <StaticImage src={homepage.hero.image.sourceUrl} alt="img" />
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage {
      homepage {
        hero {
          heading
          subheading
          image {
            srcSet
            sourceUrl
            id
          }
        }
      }
    }
  }
`
