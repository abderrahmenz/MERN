import { useState } from 'react';
import './App.css';

function App() {

  const [Pokemon, setPokemon] = useState([]);

  const FetchPokemon = ()=>{
    fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
              return response.json();
          }).then(response => {
              console.log(response);
              setPokemon(response.results)
  
          }).catch(err=>{
              console.log(err);
          });
        }
    

  return(
    <div>
      <h1>Pokemon Fetcher</h1>
      <button onClick={FetchPokemon}>fetch Pokemon</button>
      <ul>
      {Pokemon.map((p)=> <li>{p.name}</li> )}
      </ul>
    </div>
  );


}

export default App;