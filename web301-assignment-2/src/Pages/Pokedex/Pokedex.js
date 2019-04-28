import React, { Component } from 'react';
import styles from './Pokedex.module.css';

import { NavLink } from 'react-router-dom';

// import PokemonInfo from '../PokemonInfo/PokemonInfo';
import Loading from '../../components/Loading/Loading';

class Pokedex extends Component {


render() {
    // console.log(this.state.eachPokemonURL)
    // const {posts} = this.state;
    // console.log(this.props);
    const { posts, loading } = this.props;
    // console.log(loading);
    // console.log(this.props)
    return (
      // <Router>
      <div className={styles.main}>


        <React.Fragment>
                {posts.map((posts) => {
                   return(
                      loading ? (
                        <Loading key={posts.id}/> 
                    ) : (
                      <NavLink key={posts.id} to={'/pokemoninfo/' + posts.id}>
                        <div className={styles.pokemon}>
                        <img alt={posts.name} src={posts.sprites.front_default}/>
                        <h3>{posts.name}</h3>
                        </div>
                      </NavLink>
                    )
                   )
                })}
          </React.Fragment>
          

          
          {/* <Switch> */}
            {/* <Route path="/" exact component={Pokedex} /> */}
            {/* <Route path="/pokemoninfo" render={(routeProps) => (<PokemonInfo {...routeProps} pokeInfo={posts}/>)}/>  */}
            {/* <PokemonInfo path="/pokemoninfo" exact component={PokemonInfo} pokePass={posts}/> */}
          {/* </Switch> */}
          
          </div>
        
      
        // </Router> 
    );
  }
}

export default Pokedex;