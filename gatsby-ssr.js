// gatsby-ssr.js

import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="humane-semiBold"
      rel="preload"
      href="../fonts/Humane-SemiBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="humane-regular"
      rel="preload"
      href="../fonts/Humane-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ])
}
