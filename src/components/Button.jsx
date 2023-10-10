import {Component} from 'react';
import styles from './Productos.module.css'

class Button extends Component {

    render() {
        return <button className={`${styles.button}`} {...this.props} />
    }
}

export default Button;