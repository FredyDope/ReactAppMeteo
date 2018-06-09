import React from 'react'

class Weather extends React.Component {
//nous avons acces aux props definies dans weather de app.js 
//et elles s'afficherons sur l'ecran
// Conditions {this && this && <p>...} pour faire apparaitre les paragraphes
  render() {
    return (
      <div>
      	{ this.props.city && this.props.country && <p>Location : { this.props.city }, { this.props.country }</p>}
      	{ this.props.temperature && <p>Temperature : { this.props.temperature }</p>}
      	{ this.props.humidity && <p>Humidity : { this.props.humidity }</p>}
      	{ this.props.description && <p>Conditions : { this.props.description }</p>}
      	{ this.props.error && <p>{ this.props.error }</p>}
      </div>
    )
  }
}
export default Weather;
