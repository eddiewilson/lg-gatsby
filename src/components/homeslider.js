import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

export const HomeSlider = ({ allFile }) => {
  const [page, setPage] = useState({ index: 0 })

  const toggle = () =>
    setPage((page) => ({
      index: page.index === allFile.nodes.length - 1 ? 0 : page.index + 1,
    }))

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
      onClick={(e) => toggle()}
    >
      {allFile.nodes[page.index] && (
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <GatsbyImage
            image={allFile.nodes[page.index]?.childImageSharp.gatsbyImageData}
            alt="somthgin"
            style={{ transition: 'all 0.2 ease-in-out 0s' }}
            placeholder="dominantColor"
            aspectRatio={0.78}
          />
        </motion.div>
      )}
    </div>
  )
}

export const query = graphql`
  fragment CarouselQuery on FileConnection {
    nodes {
      childImageSharp {
        gatsbyImageData(width: 800)
      }
    }
  }
`
