import React from 'react'

class Weather extends React.Component {
//nous avons acces aux props definies dans weather de app.js 
//et elles s'afficherons sur l'ecran
  render() {
    return (

      <div>
      	Location : { this.props.city }, { this.props.country }
      	Temperature : { this.props.temperature }
      	Humidity : { this.props.humidity }
      	Conditions : { this.props.description }
      </div>
    )
  }
}
export default Weather;
