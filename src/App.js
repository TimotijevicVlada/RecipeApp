import { useState, useEffect, useCallback} from "react";
import './App.css';
import Recipe from "./components/Recipe";
import Search from "./components/Search";

function App() {

  const API_ID = "ae60c9bf";
  const API_KEY = "2e1cbecb447dd9cd38afe2196d64d4e3";

  const [food, setFood] = useState("");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pizza");


  const fetchFood = useCallback( async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setFood(data.hits);
      setSearch("");
    } catch(err) {
      console.log(err);
    }
  }, [query]);

  useEffect(() => {
    fetchFood();
  }, [fetchFood])

  const updateQuery = () => {
      setQuery(search);
  }

  const details = (foody) => {
    const filtered = food.filter(item => item.recipe.label.toLowerCase() === foody.toLowerCase());
    console.log(filtered);
  }

  return (
    <div className="App">
      <h1>RECIPE APP</h1>
      <Search setSearch={setSearch} updateQuery={updateQuery}/>
      <Recipe food={food} details={details}/>
    </div>
  );
}

export default App;
