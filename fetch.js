const url = require('url')

// import fetch from 'node-fetch'
import axios from 'axios'

const URL_BASE = `https://api.tumblr.com/v2/blog/`

export const createClient =
  ({ blogIdentifier, consumerKey }) =>
  async (endpoint, query = {}) => {
    const resolvedURL = url.resolve(URL_BASE + blogIdentifier + '/', endpoint)
    const stringifiedQuery = URLSearchParams.toString({
      api_key: consumerKey,
      ...query,
    })

    actions.createNode({
      ...data,
      id: createNodeId(data.date),
      internal: {
        type: 'apod',
        contentDigest: createContentDigest(data),
      },
    })
    const response = await axios.get(`${resolvedURL}?${stringifiedQuery}`)

    console.log('response', response)
    const json = await response.json()

    return json
  }

const pagedGet = async (
  client,
  endpoint,
  query = {},
  offset = 0,
  limit = 20,
  aggregatedResponse = null
) => {
  const { response } = await client(endpoint, {
    ...query,
    offset,
    limit,
  })

  aggregatedResponse = aggregatedResponse
    ? aggregatedResponse.concat(response.posts)
    : response.posts

  if (offset + limit < response.blog.total_posts)
    return pagedGet(
      client,
      endpoint,
      query,
      offset + limit,
      limit,
      aggregatedResponse
    )

  return aggregatedResponse
}

export const fetchAll = async (client, endpoint) => {
  console.time(`Fetch Tumblr ${endpoint} data`)
  console.log(`Starting to fetch ${endpoint} data from Tumblr`)

  const data = await pagedGet(client, endpoint)

  console.timeEnd(`Fetch Tumblr ${endpoint} data`)

  return data
}
