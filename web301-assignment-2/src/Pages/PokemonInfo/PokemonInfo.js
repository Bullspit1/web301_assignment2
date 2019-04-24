import React, { Component } from 'react';
import styles from './PokemonInfo.module.css';


const axios = require('axios');

class PokemonInfo extends Component {
constructor(props){
    super(props);
    this.state = {
        pokemonInfo: [],
        pokemonImage: "",
        pokemonMoves: [],
    }
}
    
    componentDidMount() {
        // const pokemon = [];
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`).then(response => {
        // console.log(response.data.sprites.front_default);
    console.log(response.data.moves);
    // pokemon.push(response.data);
    // console.log(pokemon[0]);
    this.setState({
        pokemonInfo: response.data,
        pokemonImage: response.data.sprites,
        pokemonMoves: response.data.moves,
    });
  }).catch(function (error) {
    // handle error
    console.log(error);
  })

    };


render() {
    // console.log(this.props.match.params.id)
    const { pokemonInfo, pokemonImage, pokemonMoves } = this.state;
    // console.log(pokemonInfo.sprites.front_default);
    console.log(pokemonMoves);
    // console.log(pokemonInfo.moves[0].move);
    // console.log(pokemonImage);
    return (
      <div className={styles.app}>
        <p>{pokemonInfo.name}</p>
        <img src={pokemonImage.front_default} alt={pokemonInfo.name}/>
        <img src={pokemonImage.back_default} alt={pokemonInfo.name}/>
        <React.Fragment>
        <ul>
        {pokemonMoves.map((p) => {
                   return (
                    <li key={p.id}>{p.move.name}</li>
                   )
                })}
        </ul>
        </React.Fragment>

      </div>
    );
  }
}
export default PokemonInfo;