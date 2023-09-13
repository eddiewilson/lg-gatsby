// import { createNodeHelpers } from 'gatsby-node-helpers'

// import { createClient, fetchAll } from './fetch'

// const { createNodeFactory } = createNodeHelpers({ typePrefix: `Tumblr` })

// const PostNode = createNodeFactory(`Post`)

// console.log('Hello Tumblr')

// export async function sourceNodes({
//   actions,
//   createNodeId,
//   createContentDigest,
// }) {
//   const blogIdentifier = `${process.env.TUMBLR_CONSUMER_KEY}`
//   const consumerKey = `lighthouseandgiant`
//   const client = createClient({ blogIdentifier, consumerKey })

//   const posts = await fetchAll(client, `posts`)

//   actions.createNode({
//     ...posts,
//     id: createNodeId(data.date),
//     internal: {
//       type: 'apod',
//       contentDigest: createContentDigest(data),
//     },
//   })
//   // actions.createNode(PostNode(post)))
// }
