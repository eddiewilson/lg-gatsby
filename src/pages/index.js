import React from 'react'
import { graphql } from 'gatsby'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
// import '../layouts/index.css'
import { HomeSlider } from '../components/homeslider'

const IndexPage = ({ children, data }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
      }}
    >
      {/* <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            'Lighthouse & Giant is a design focused duo in Falmouth Cornwall working with small businesses and startups. We have designed and named numerous brands, built modern web applications, used our design thinking and illustration skills to help small acorns become mighty oaks.',
        },
        {
          name: 'keywords',
          content:
            'Design, Digital Design, Branding, Naming, Cornwall Design, Cornwall Illustration, Animation, Logo Design, Brand Strategy',
        },
      ]}
    /> */}
      <Header siteTitle={data.site.siteMetadata.title} />

      <HomeSlider allFile={data.allFile} />

      <Footer />
    </div>
  )
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      ...CarouselQuery
    }
  }
`

export default IndexPage
