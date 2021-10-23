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
  const [favorite, setFavorite] = useState(localStorage.getItem("food") === null ? [] : JSON.parse(localStorage.getItem("food")));
  const [totalFav, setTotalFav] = useState(0);




  //Function that fetch food info from an API
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

  //Function that update query for fetching specific food
  const updateQuery = () => {
      setQuery(search);
  }

  //Funtion for details page to view clicked item
  const viewItem = (foody) => {
    const filtered = food.filter(item => item.recipe.label.toLowerCase() === foody.toLowerCase());
    setDetails(filtered);
  }

  //Function that delete clicked item in favorite page
  const deleteItem = (id) => {
    const deleted = favorite.filter(item => item.id !== id);
    setFavorite(deleted);
  }

  //Function that display total favorite number in the navbar
  const displayTotalFavNum = useCallback( () => {
    setTotalFav(favorite.length);
  }, [favorite])
  
  useEffect(() => {
    displayTotalFavNum();
  }, [displayTotalFavNum])


  //Function that save favorite item to locale storage
  const saveToLocaleStorage = useCallback( () => {
    localStorage.setItem("food", JSON.stringify(favorite));
  }, [favorite])

  useEffect(() => {
    saveToLocaleStorage();
  }, [saveToLocaleStorage])



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
            <Ingredients details={details} setFavorite={setFavorite} favorite={favorite} setTotalFav={setTotalFav} totalFav={totalFav}/>
          </Route>
          <Route path="/favorites">
            <Favorite favorite={favorite} deleteItem={deleteItem} viewItem={viewItem}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
