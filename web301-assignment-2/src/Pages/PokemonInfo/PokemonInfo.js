import React, { Component } from 'react';
import styles from './PokemonInfo.module.css';

import Loading from '../../components/Loading/Loading';


const axios = require('axios');

class PokemonInfo extends Component {
constructor(props){
    super(props);
    this.state = {
        pokemonInfo: [],
        pokemonImage: "",
        pokemonStats: [],
        loading: true,
    }
    this.goBack = this.goBack.bind(this);
}
    
    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`).then(response => {
    const loadingTimer = setTimeout(() => {
        clearTimeout(loadingTimer);
        this.setState({
            pokemonInfo: response.data,
            pokemonImage: response.data.sprites,
            pokemonStats: response.data.stats,
            loading: false,
        });
    },1500)
  }).catch(function (error) {
    console.log(error);
  })
    };

    goBack() {
        this.props.history.goBack();
    }


render() {
    const { pokemonInfo, pokemonImage, pokemonStats } = this.state;
    return (
        <React.Fragment>
        {
            this.state.loading ? (
                <Loading />
            ) : (
                <div className={styles.app}>
                <button className={styles.gobackBtn} type="button" onClick={this.goBack}>Back</button>
                <h1 className={styles.pokemonName}>{pokemonInfo.name}</h1>
                <img className={styles.pokemonFront} src={pokemonImage.front_default} alt={pokemonInfo.name}/>
                <img className={styles.pokemonBack} src={pokemonImage.back_default} alt={pokemonInfo.name}/>
                <h2>Stats</h2>
                <ol className={styles.moves}>
                {pokemonStats.map((stats,index) => {
                           return (
                            <div className={styles.statContainer} key={index}>
                            <li className={styles.moveName}>{stats.stat.name}:</li>
                            <div className={styles.moveStat}>{stats.base_stat}</div>
                            </div>
                           )
                        })}
                </ol>
              </div>
            )
        }
        </React.Fragment>
    );
  }
}
export default PokemonInfo;