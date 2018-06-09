import React from 'react'
import './App.css'
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'd962b7ceebc42bf6f5b5a65db30521c3'

class App extends React.Component {
// objet qui contient les key value que nous voulons changer en appelant l'api
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }  
//creation d'une fonction qui get l'API
  getWeather = async (e) =>{

 //empeche la page de se mettre à jour automatiquementpour afficher les donnés   
  e.preventDefault()

//recupere les donnés dans le API dans event 
  const city = e.target.elements.city.value
  const country = e.target.elements.country.value

  //recuperation api
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)

// api call devient json = data  
  const data = await api_call.json()

//avec cette condition if city & country === true execute on empeche l'application de planter avec des input vide
    if ( city && country ){
      console.log(data)

  //avec la methode setState nous definir la valeur du state
        this.setState({
          //on defini le chemin pour arriver à temperature dans l,objet data de la console 
          temperature:data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          //pour description weather objet contient un array et index 0 contient description
          description:data.weather[0].description,
          error: "",
        })
    }
  }
//dans Form nous definissons une props getWeather on envoi sa valeur dans la fonction getWeather qui retourn dans Form.JS
//nous allons passer values du state dans weather component pour les afficher sur l'ecran avec props   
  render() {
    return (
      <div className="App">
      <Title />
      <Form getWeather={this.getWeather}/>
      <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
      />      
      </div>
    )
  }
}

export default App
