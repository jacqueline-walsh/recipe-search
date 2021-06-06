import { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import './App.css';

function App() {

  const API_ID = process.env.REACT_APP_ID
  const API_KEY = process.env.REACT_APP_KEY
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await response.json();
      setRecipes(data.hits); 
      setSearch('');
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <h1 className="title">Search My Recipe</h1>
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar"  value={search} onChange={updateSearch}/>
        <button
          type="submit" 
          className="search-button">Search</button>
      </form> 
      <div className="recipes">
      {recipes.map((recipe, i) => (
        <Recipe 
            key={i}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
