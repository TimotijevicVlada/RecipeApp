import {useState, useEffect} from "react";
import './App.css';

function App() {

  const API_ID = "a6623b54";
  const API_KEY = "0c2cb1931ef23530653b88020c54e432";


  const fetchFood = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?&app_id=${API_ID}&app_key=${API_KEY}&q=pizza`);
      const data = await response.json();
      console.log(data);
    } catch(err) {
      console.log(err);
    }
    
  }

  useEffect(() => {
    fetchFood();
  }, [])

  return (
    <div className="App">
      <h1>Pozdrav react</h1>
    </div>
  );
}

export default App;
