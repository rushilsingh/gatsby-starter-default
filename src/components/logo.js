import React from "react"
function Logo(logo, width = "auto", height = "auto") {
  return (<p>
    <img class="logo" src={logo} width={width} height={height}  />
  </p>)

}
  
export default Logo
