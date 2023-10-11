import { Component } from 'react';
import styles from './All.module.css'

class Title extends Component {
    render() {
        return (
            <h1 className={`${styles.title}`}>Tienda</h1>
        );
    }
}

export default Title;
