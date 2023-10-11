import {Component} from 'react';
import styles from './All.module.css'

class Button extends Component {

    render() {
        return <button className={`${styles.button}`} {...this.props} />
    }
}

export default Button;