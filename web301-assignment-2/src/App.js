import React, { Component } from 'react';
import styles from './App.module.css';

import { NavLink, Switch, Route } from 'react-router-dom';

import pokemonImg from './Pages/Pokedex/pokemon-logo.png';

import Pokedex from './Pages/Pokedex/Pokedex';
import PokemonInfo from './Pages/PokemonInfo/PokemonInfo';




const axios = require('axios');



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151').then(response => {
    const paginatedPokemon = [];

      for (let index = 0; index < response.data.results.length; index++) {
        axios.get(response.data.results[index].url).then(response => {
          paginatedPokemon.push(response.data);
                const loadingTimer = setTimeout(() => {
                  clearTimeout(loadingTimer);
                  this.setState({
                    posts: paginatedPokemon,
                    loading: false,
                    });
              },2000) 
        })
        .catch(function (error) {
            console.log(error);
        }) 
      } 
    })
    .catch(function (error) {
        console.log(error);
    })
}



  render() {
    const { posts, loading } = this.state;
    return (
      <div className={styles.app}>
        <header className={styles.pokemonHeader}>
          <NavLink exact to="/"><img className={styles.pokemonImage} src={pokemonImg} alt="Pokemon"/></NavLink>
        </header>

          <main>
          <Switch> 
            <Route path="/" exact render={(routeProps) => (<Pokedex {...routeProps} posts={posts} loading={loading} />)} />
            <Route path="/pokemoninfo/:id" exact component={PokemonInfo}/> 
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
