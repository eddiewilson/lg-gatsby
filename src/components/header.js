import React from 'react'
import { Link } from 'gatsby'
import Bolster from '../components/bolster.svg'
import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'

export const Header = (props) => {
  const { location } = props
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <header
      style={{
        paddingTop: '1rem',
        paddingBottom: '1rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        display: 'flex',
        justifySelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'fixed',
        zIndex: 10,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100vw',
        }}
      >
        <motion.div variants={item}>
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
              display: 'block',
            }}
          />
        </motion.div>

        <motion.div variants={item}>
          <h1
            style={{
              color: '#111111',
              textDecoration: 'none',
              display: 'flex',
              fontFamily: 'Satoshi-Variable',
              fontSize: '1rem',
              alignSelf: 'flex-start',
              textTransform: 'capitalize',
            }}
          >
            Lighthouse &amp; Giant {location && location.pathname.slice(1, -1)}
          </h1>
        </motion.div>
      </motion.div>
    </header>
  )
}
