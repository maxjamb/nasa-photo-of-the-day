import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

const nasaApi = 'https://lambda-github-api-server.herokuapp.com';

function App() {

//Title
const [displayTitle, setDisplayTitle] = useState({
  data: []});

  useEffect(() => {
    axios.get(nasaApi)
      .then(response =>{
        // debugger
        setDisplayTitle({
          data: response.data.title
        });
        // console.log(response.data.explanation);
      })
      .catch(error => {

      })
  }, [])
//Date
const [displayDate, setDisplayDate] = useState({
  data: []});

  useEffect(() => {
    axios.get(nasaApi)
      .then(response =>{
        debugger
        setDisplayDate({
          data: response.data.date
        });
        // console.log(response.data.explanation);
      })
      .catch(error => {

      })
  }, [])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
