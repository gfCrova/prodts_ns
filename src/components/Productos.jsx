import { Component } from 'react'
import Producto from './Producto.jsx'
import PropTypes from 'prop-types';
import styles from './All.module.css'

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return (
        <div className={`${styles.productos}`}>
            {productos.map((prod) => (
                <Producto 
                    agregarAlCarro={agregarAlCarro}
                    key={prod.name}
                    producto={prod}
                />
            ))}
        </div>
    )
  }
}

Productos.propTypes = {
    productos: PropTypes.array.isRequired,
    agregarAlCarro: PropTypes.func.isRequired,
};

export default Productos