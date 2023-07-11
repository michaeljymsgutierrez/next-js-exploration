import Component from './component'

function SiteFooter() {
  return (
    <>
      <h1>Footer</h1>
      <ul>
        {Component.cities.map((city) => (
          <li>{city.name}</li>
        ))}
      </ul>
    </>
  )
}

export default SiteFooter
