import * as React from "react"
import Head from "./head"
import "../styles.scss"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />

      {props.children}
    </>
  )
}

export default Layout
