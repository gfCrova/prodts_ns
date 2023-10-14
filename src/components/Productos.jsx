import Producto from './Producto.jsx'
import {getProducts} from '../Utils/GetProducts.jsx'
import styles from './All.module.css'
import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const Productos = (props) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
    // Llama a la función para obtener los productos cuando el componente se monta
    getProducts()
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

    return (
        <div className={`${styles.productos}`}>
            {productos.map((prod) => (
                <Producto 
                    key={prod.id}
                    producto={prod}
                    agregarAlCarro={props.agregarAlCarro}
                />
            ))}
        </div>
    )
}

Productos.propTypes = {
    agregarAlCarro: PropTypes.func.isRequired
}

export default Productos