import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      paddingTop: '1.45rem',
      paddingBottom: '1.45rem',
      display: 'flex',
      justifySelf: 'flex-end',
    }}
  >
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffffff',
        display: 'block',
      }}
    />
  </footer>
)

export default Footer
