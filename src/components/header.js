import React from 'react'
import { Link } from 'gatsby'
import Bolster from '../components/bolster.svg'
import { motion } from 'framer-motion'

export const Header = ({ siteTitle }) => {
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
              fontFamily: 'Humane-Light',
              fontSize: '2rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              alignSelf: 'flex-start',
            }}
          >
            Lighthouse &amp; Giant
          </h1>
        </motion.div>
      </motion.div>
    </header>
  )
}
