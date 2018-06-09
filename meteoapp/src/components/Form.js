import React from 'react';

class Form extends React.Component {
  render() {
  	//react attribut onsubmit appel this.props.getweather dans app.js pour les afficher dans la console
    return (
      <form onSubmit ={this.props.getWeather}>
      <input type='text' name='city' placeholder='city...'/>
      <input type='text' name='country' placeholder='country...'/>
      <button>Get Weather</button>
        
      </form>
    )
  }
}

export default Form;
