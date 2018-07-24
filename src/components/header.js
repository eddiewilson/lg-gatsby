import React from 'react'
import Link from 'gatsby-link'
import Bolster from '../components/bolster.svg'

const ms = require('simple-modular-scale')

const scale = ms({
  base: 16,
  ratios: [3 / 2, 4 / 3],
  length: 8,
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: scale[1],
      paddingTop: scale[0],
      paddingBottom: '1.45rem',
      position: 'fixed',
      zIndex: '9999999999',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
      }}
    >
      <h1 style={{}}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            backgroundImage: 'url(' + Bolster + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '48px',
            width: '48px',
            height: '48px',
            backgroundRepeat: 'no-repeat',
            display: 'block',
          }}
        />
      </h1>
    </div>
  </header>
)

export default Header
