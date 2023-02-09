import React from "react"

export default function Logo(logo, width=null) {
  return (<p>
    <img class="logo" src={logo} width={width ? width : "auto"} height="auto" alt="" />
  </p>)

}