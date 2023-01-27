import React from "react"
function Entry(logo, title, company, from, to, location, description, duration=null, width="auto", height="auto") {
  return (
    <div id="synamedia" class="card">
      {Logo(logo, width, height)}

      <ul>
        <li>
          <h4>{title}</h4>
          <ul>
            <li>
              <h5>{company}</h5>
            </li>
            <li> {from} - {to} </li>
            <li> {location} {duration ? duration : ""}</li>
            <ul>
              <li>{description}</li>
            </ul>

          </ul>
        </li>
      </ul>
    </div>)
}

function Logo(logo, width = "auto", height = "auto") {
  return (<p>
    <img class="logo" src={logo} width={width} height={height} />
  </p>)

}

export {Logo, Entry}
