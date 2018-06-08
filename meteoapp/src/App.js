import React from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'd962b7ceebc42bf6f5b5a65db30521c3'

class App extends React.Component {
//creation d'une fonction qui get l'API
  getWeather = async () =>{
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&units=metric&appid=${API_KEY}`)
// api call devient json = data  
  const data = await api_call.json()
  }

  render() {
    return (
      <div className="App">
      <Title />
      <Form />
      <Weather />      
      </div>
    );
  }
}

export default App;
