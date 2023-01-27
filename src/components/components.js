import React from "react"
function Entry(logo, title, companies, from, to, location, descriptions, duration = null, width = "auto", height = "auto") {
  return (
    <div class="card">
      {Logo(logo, width, height)}

      <ul>
        <li>
          <h4>{title}</h4>
          <ul>
            {Descriptions(companies)}

            <li> {from} - {to}  {duration ? duration : ""} </li>
            <li> {location} </li>
            <ul>
              {Descriptions(descriptions)}
            </ul>

          </ul>
        </li>
      </ul>
    </div>)
}
function Descriptions(descriptions, h5 = false) {
  if (h5) {
    return descriptions.map((description) => <li><h5>{description}</h5></li>)
  }
  else return descriptions.map((description) => <li>{description}</li>)
}

function Logo(logo, width = "auto", height = "auto") {
  return (<p>
    <img class="logo" src={logo} width={width} height={height} alt="" />
  </p>)

}

export { Logo, Entry }
