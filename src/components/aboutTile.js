import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

const AboutTile = ({ siteTitle }) => {
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
    hidden: { opacity: 0, y: '1rem' },
    show: { opacity: 1, y: 0 },
  }
  return (
    <section
      className="about"
      style={{
        paddingBottom: '1.45rem',
        position: 'fixed',
        zIndex: '9999999999',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        <motion.div variants={item}>
          <h1
            style={{
              color: '#111111',
              fontFamily: 'Satoshi-Variable',
              fontSize: '3rem',
              marginBottom: '4rem',
              lineHeight: '3rem',
            }}
          >
            Lighthouse &amp; Giant
          </h1>
        </motion.div>
        <motion.div variants={item}>
          <p
            style={{
              marginBottom: '1rem',
              fontFamily: 'Satoshi-Variable',
              fontSize: '1rem',
              lineHeight: 1.8,
            }}
          >
            Back in 2010 we started a psuedo agency, something to pour our
            creativity into to try and help build brands. We've worked with
            mostly startups but we like to think we've helped them on their way
            to become the mature brands they are today, head held high. Fast
            forward to 2017 and we've joined an real life agency.
            <br />
            <br />
            This is where you can now find us.
          </p>
        </motion.div>
        <motion.div variants={item}>
          <Link
            style={{
              textDecoration: 'none',
              // fontSize: ms(2),
            }}
            to="/"
          >
            &times;
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutTile
