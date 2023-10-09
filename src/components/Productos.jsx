import React from 'react'
import Producto from './Producto'
import PropTypes from 'prop-types';

class Productos extends React.Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return (
        <div>
            {productos.map((producto) => (
                <Producto 
                    agregarAlCarro={agregarAlCarro}
                    key={producto.name}
                    producto={producto}
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