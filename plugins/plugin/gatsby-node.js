const fetch = require('node-fetch').default
const { createRemoteFileNode } = require('gatsby-source-filesystem')

// createTypes(`
// type TumblrPost implements Node {
//   image: TumblrPostImage
// }
// type TumblrPostImage @dontInfer {
//   localFile: File @link(by: "fields.localFile")
// }
// `)
exports.createSchemaCustomization = ({
  actions: { createTypes, printTypeDefinitions },
}) => {
  createTypes(`
    type TumblrPost implements Node {
      featuredImg: File @link(from: "fields.localFile")
    }
  `)

  // This is a dev thing, feel free to comment it out
  // printTypeDefinitions({ path: './typeDefs.txt' })
}

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  const BASE_ENDPOINT = `https://api.tumblr.com/v2/blog/${process.env.TUMBLR_BLOG_ID}/posts`

  // Get list of books
  const listEndpoint = new URL(BASE_ENDPOINT)
  listEndpoint.searchParams.append('api_key', process.env.TUMBLR_CONSUMER_KEY)

  const data = await (await fetch(listEndpoint.toString())).json()
  // console.log('data', data)

  for (node of data.response.posts) {
    console.log('📭 post', node)
    createNode({
      ...node,
      id: createNodeId(node.id),
      internal: {
        type: 'TumblrPost',
        contentDigest: createContentDigest(data),
      },
    })
  }
}

exports.onCreateNode = async ({
  node,
  actions: { createNode, createParentChildLink, createNodeField },
  createNodeId,
  getCache,
}) => {
  if (node.internal.type === 'TumblrPost' && node.type === 'photo') {
    console.log('\u{1F449}', node.photos[0].original_size.url)

    const fileNode = await createRemoteFileNode({
      url: node.photos[0].original_size.url, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      getCache,
    })

    // node.image = await createRemoteFileNode({
    //   url: node.photos[0].original_size.url,
    //   // url: 'https://lighthouseandgiant.netlify.app/static/41c8171fde0406fe12bed97a58fc978d/62b28/lg-redgrave_Page_06.png',
    //   parentNodeId: node.id,
    //   createNode,
    //   createNodeId,
    //   cache,
    //   store,
    // })

    //createParentChildLink({ parent: node, child: node.image })
    // if the file was created, extend the node with "localFile"
    if (fileNode) {
      createNodeField({ node, name: 'localFile', value: fileNode.id })
    }
  }
}
