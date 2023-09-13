import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

// const getYear = new Date().getFullYear()

export const Footer = (props) => {
  const { location } = props
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <motion.footer
      style={{
        paddingTop: '1rem',
        paddingBottom: '2rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        display: 'flex',
        justifySelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={item}
        style={{ display: 'flex', alignSelf: 'flex-end' }}
      >
        <Link
          to="/about"
          style={{
            fontFamily: 'Satoshi-Variable',
            fontWeight: 600,
            fontSize: '1rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          wtf
        </Link>
      </motion.div>
      <motion.div
        variants={item}
        className=""
        style={{ display: 'flex', alignSelf: 'flex-end' }}
      >
        {/* <p
          style={{
            fontFamily: 'Satoshi-Variable',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontSize: '1rem',
            marginBottom: '0',
          }}
        >
          &copy; 2010 - {getYear}
        </p> */}
        <Link
          to="/journal"
          disabled={
            location && location.pathname === '/journal/' ? true : false
          }
          activeStyle={{ color: '#909090' }}
          style={{
            fontFamily: 'Satoshi-Variable',
            fontWeight: 600,
            fontSize: '1rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          Journal
        </Link>
      </motion.div>
    </motion.footer>
  )
}
