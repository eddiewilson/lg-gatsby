import React from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const Layout = (props) => {
  const { location, children } = props
  return (
    <div>
      <Header location={location} />
      {children}
      <Footer location={location} />
    </div>
  )
}
