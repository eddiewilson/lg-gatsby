import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import '../pages/journal.scss'

const Journal = ({ data, location }) => {
  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delay: 0.2,
  //       staggerChildren: 0.3,
  //     },
  //   },
  // }

  // const item = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1 },
  // }

  const layout = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
      },
    },
  }

  const heading = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  const renderPlayer = (post, i) => {
    return (
      <div
        key={`embed-${i}`}
        dangerouslySetInnerHTML={{
          __html: post.player && post.player[2].embed_code,
        }}
      />
    )
  }
  const renderBody = (post, i) => {
    return (
      <div
        className="post-body"
        key={`embed-${i}`}
        dangerouslySetInnerHTML={{ __html: post.body }}
        style={{}}
      />
    )
  }
  const renderPhotos = (post, i) => {
    return (
      <div key={`embed-${i}`}>
        {post?.featuredImg && (
          <GatsbyImage
            image={post?.featuredImg?.childImageSharp.gatsbyImageData}
            alt=""
          />
        )}
      </div>
    )
  }

  return (
    <Layout location={location}>
      <div className="journal">
        <motion.div
          variants={layout}
          initial="hidden"
          animate="show"
          className="journal-layout"
        >
          {data.allTumblrPost.nodes.map((post, i) => {
            return (
              <div
                key={`post-${i}`}
                style={{
                  width: '100%',
                  marginBottom: '2rem',
                }}
              >
                {post.featuredImg !== null && renderPhotos(post)}
                {post.body !== null && renderBody(post)}
                {post.player !== null && renderPlayer(post)}
              </div>
            )
          })}
        </motion.div>
      </div>
    </Layout>
  )
}

export default Journal

export const query = graphql`
  query JournalQuery {
    allTumblrPost {
      totalCount
      nodes {
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
        player {
          embed_code
        }
        body
      }
    }
  }
`
