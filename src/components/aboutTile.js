import React from 'react'
import Link from 'gatsby-link'
import './font.css'
import './aboutTile.scss'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 16,
  ratios: [3 / 2, 4 / 3],
  length: 8,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

const AboutTile = ({ siteTitle }) => (
  <section
    className="about"
    style={{
      marginBottom: scale[1],
      paddingTop: scale[0],
      paddingBottom: '1.45rem',
      position: 'fixed',
      zIndex: '9999999999',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
    }}
  >
    <h1>Lighthouse &amp; Giant</h1>
    <p>
      Back in 2010 we started a psuedo agency, something to pour our creativity
      into to try and help build brands. We've worked with mostly startups but
      we like to think we've helped them on their way to become the mature
      brands they are today, head held high. Fast forward to 2017 and we've
      joined an real life agency.<br />This is where you can now find us.
    </p>
    <Link
      style={{
        textDecoration: 'none',
        fontSize: scale[2],
      }}
      to="/"
    >
      &times;
    </Link>
  </section>
)

export default AboutTile
