import React from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'd962b7ceebc42bf6f5b5a65db30521c3'

class App extends React.Component {
//creation d'une fonction qui get l'API
  getWeather = async (e) =>{
  e.preventDefault()//empeche la page de se mettre à jour automatiquementpour afficher les donnés
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`)
// api call devient json = data  
  const data = await api_call.json()

  console.log(data)
  }
//dans Form nous definissons une props getWeather on envoi sa valeur dans la fonction getWeather qui retourn dans Form.JS
  render() {
    return (
      <div className="App">
      <Title />
      <Form getWeather={this.getWeather}/>
      <Weather />      
      </div>
    );
  }
}

export default App;
