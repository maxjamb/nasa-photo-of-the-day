import React, {useState, useEffect} from "react";
import "./App.css";
import Card from './Components/Card'
import axios from 'axios'


function App() {

    const [nasaData, setNasaData] = useState([]); 
    
    useEffect(() => {
      axios
      .get('https://api.nasa.gov/planetary/apod?api_key=LHTm4d6PYMTNqi7nYhrBNeogQcfYr1edEsbrJ2ee')
      .then(response => {
        console.log(response.data)
        setNasaData(nasaData.concat(response.data))

      })
      .catch (error => {
        console.log('The data was not returned', error)
      })
    },[])
    

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      {nasaData.map(card => <Card key={card.title} card={card} />)}
    </div>
  );
}

export default App;
