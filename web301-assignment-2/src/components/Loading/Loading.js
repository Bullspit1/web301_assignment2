import React from 'react';
import styles from './Loading.module.css';

import pokebalLoading from './pokeball_loading.gif';

const Loading = (props) => {
// console.log(this.props)
    return(
        <div className={styles.loading}>
            <img className={styles.loadingImg} src={pokebalLoading} alt="loading"/>
        </div>
    )
}

export default Loading;