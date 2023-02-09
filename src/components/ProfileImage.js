import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function ProfileImage(){
  return <StaticImage
    src="../images/rushilsingh.jpeg"
    width={300}
    quality={100}
    formats={["auto", "webp", "avif"]}
    alt="Rushil Singh"
    style={{ marginBottom: `1.45rem` }} />

}