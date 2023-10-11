import {Component} from 'react';
import Button from './Button.jsx'
import PropTypes from 'prop-types'
import styles from './All.module.css'

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props;
        return (
            <div className={`${styles.producto}`}>
                <img className={`${styles.img}`} src={producto.img} alt={producto.name} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button 
                    onClick={() => agregarAlCarro(producto)}
                > Agregar al Carrito </Button>
            </div>
        )
    }
}

Producto.propTypes = {
    producto: PropTypes.array.isRequired,
    agregarAlCarro: PropTypes.func.isRequired
}

export default Producto;