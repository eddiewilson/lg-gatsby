import React from 'react'
import Link from 'gatsby-link'
import './font.css'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 16,
  ratios: [3 / 2, 4 / 3],
  length: 8,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

const getYear = new Date().getFullYear()

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      paddingTop: scale[1],
      paddingBottom: scale[3],
      display: 'flex',
      justifySelf: 'flex-end',
      flexDirection: 'row',
      position: 'fixed',
      bottom: '0',
      left: '0',
      right: '0',
      paddingLeft: scale[4],
      paddingRight: scale[4],
      justifyContent: 'space-between',
    }}
  >
    <div className="" style={{ display: 'flex', alignSelf: 'flex-end' }}>
      <Link
        to="/about"
        style={{
          color: '#111111',
          textDecoration: 'none',
          display: 'flex',
          fontFamily: 'bagnard_regularregular',
          fontSize: scale[0],
          textTransform: 'uppercase',
          letterSpacing: '1px',
          alignSelf: 'flex-start',
        }}
      >
        Wtf
      </Link>
    </div>
    <div className="" style={{ display: 'flex', alignSelf: 'flex-end' }}>
      <p
        style={{
          fontFamily: 'bagnard_regularregular',
          fontSize: scale[0],
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '0',
        }}
      >
        &copy; 2010 - {getYear}
      </p>
    </div>
  </footer>
)

export default Footer
