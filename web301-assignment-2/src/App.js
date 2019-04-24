import React, { Component } from 'react';
import styles from './App.module.css';

import { NavLink, Switch, Route } from 'react-router-dom';


import Pokedex from './Pages/Pokedex/Pokedex';
import PokemonInfo from './Pages/PokemonInfo/PokemonInfo';

const axios = require('axios');



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      selectedPokemon: [],
    };
  }

componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151').then(response => {
    const paginatedPokemon = [];

        // console.log(response.data.results)
        for (let index = 0; index < response.data.results.length; index++) {
        // console.log(index);
        // eachPokemonURL.push(response.data.results[index].url);
        // console.log(response.data.results[index].url);
        // console.log(response.data.results.length)
        axios.get(response.data.results[index].url).then(response => {
            paginatedPokemon.push(response.data);
        this.setState({
        posts: paginatedPokemon,
        });
        })
        .catch(function (error) {
            console.log(error);
        }) 
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}



  render() {
    const { posts } = this.state;
    return (
      <div className={styles.app}>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">Pokedex</NavLink>
            </li>
            {/* <li>
              <NavLink exact to="/pokemoninfo">PokemonInfo</NavLink>
            </li> */}
          </ul>
        </nav>
{/* use the match to save a variable */}
          <main>
          <Switch> 
            <Route path="/" exact render={(routeProps) => (<Pokedex {...routeProps} posts={posts}/>)} />
            <Route path="/pokemoninfo/:id" exact component={PokemonInfo}/> 
            {/* <PokemonInfo path="/pokemoninfo" exact component={PokemonInfo}/> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
