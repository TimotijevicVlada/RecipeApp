import { useState, useEffect, useCallback} from "react";
import './App.css';
import Recipe from "./components/Recipe";
import Search from "./components/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Ingredients from "./components/Ingredients";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorite from "./components/Favorite";

function App() {

  const API_ID = "ae60c9bf";
  const API_KEY = "2e1cbecb447dd9cd38afe2196d64d4e3";

  const [food, setFood] = useState("");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [totalFav, setTotalFav] = useState(0);




  const fetchFood = useCallback( async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setFood(data.hits);
      setSearch("");
      setLoading(false);
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

  const viewItem = (foody) => {
    const filtered = food.filter(item => item.recipe.label.toLowerCase() === foody.toLowerCase());
    setDetails(filtered);
  }

  

  return (
    <Router>
      <div className="App">
        <Navbar totalFav={totalFav}/>
        <Switch>
          <Route path="/" exact>
            <Search setSearch={setSearch} updateQuery={updateQuery}/>
            {loading ? <div className="spinner"><ReactBootStrap.Spinner style={{color: "blue", textAlign: "center"}} animation="border" /></div> : 
              <Recipe food={food} viewItem={viewItem}/>
            }
          </Route>
          <Route path="/ingredients">
            <Ingredients details={details} setFavorite={setFavorite} favorite={favorite} setTotalFav={setTotalFav}/>
          </Route>
          <Route path="/favorites">
            <Favorite favorite={favorite}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
