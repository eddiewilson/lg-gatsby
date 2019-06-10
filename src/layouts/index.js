import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Helmet
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
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <main>{children()}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
