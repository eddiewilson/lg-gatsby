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
      paddingTop: scale[3],
      paddingBottom: scale[1],
      display: 'flex',
      justifySelf: 'flex-end',
      flexDirection: 'row',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      paddingLeft: scale[4],
      paddingRight: scale[4],
      justifyContent: 'space-between',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100vw',
      }}
    >
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
      <h1
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
        L&amp;G
      </h1>
    </div>
  </header>
)

export default Header
