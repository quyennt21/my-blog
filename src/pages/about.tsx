import React from "react"
import { PageProps } from "gatsby"
export default function AboutRoute(props: PageProps) {
  return (
    <>
      <h1>Path:</h1>
      <p>{props.path}</p>
    </>
  )
}
