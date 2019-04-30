import React, { Component } from 'react';
import styles from './Pokedex.module.css';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import Loading from '../../components/Loading/Loading';

class Pokedex extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaders: [],
    }
  }

  componentDidMount() {
    const lo = [];
    for (let index = 0; index < 151; index++) {
      lo.push(<Loading />);
    }
    this.setState({
      loaders: lo,
    });
  }


render() {
    const { posts, loading } = this.props;
    return (
      <div className={styles.main}>

          {loading ? (
            this.state.loaders.map((loaders, index) => {
              return <Loading key={index} />
            })
          ) : (
            <React.Fragment>
            {posts.map((posts) => {
                              return(
                                  <NavLink key={posts.id} to={'/pokemoninfo/' + posts.id}>
                                    <div className={styles.pokemon}>
                                    <img alt={posts.name} src={posts.sprites.front_default}/>
                                    <h3>{posts.name}</h3>
                                    </div>
                                  </NavLink>
                              )
                            })}
                            </React.Fragment>
                      )}
          </div>
    );
  }
}

Pokedex.propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.array,
}

export default Pokedex;