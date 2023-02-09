import React from "react"
import ProfileImage from "./ProfileImage"
import Bio from "./Bio"
import SocialFollow from "./socialfollow"
import Resume from "./Resume"

export default function LeftColumn() {
  return (
    <div class="col-sm-3" style={{ backgroundColor: `#a9a9a9` }}>
      <div class="sticky-top text-center">
        <ProfileImage />
        <Resume />
        <Bio />
        <SocialFollow />
      </div>
    </div>
  )
}