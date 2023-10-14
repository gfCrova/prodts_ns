import Producto from './Producto.jsx'
import {getProducts} from '../../Utils/GetProducts.jsx'
import styles from './Productos.module.css'
import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Title from '../Others/Title.jsx'

const Productos = (props) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
    // Llama a la función para obtener los productos cuando el componente se monta
    getProducts('https://api.escuelajs.co/api/v1/products')
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

    return (
        <div>
            <Title title={'Todos los Productos'}/>
            <div className={`${styles.productos}`}>
                {productos.map((prod) => (
                    <Producto 
                        key={prod.id}
                        producto={prod}
                        agregarAlCarro={props.agregarAlCarro}
                    />
                ))}
            </div>
        </div>
    )
}

Productos.propTypes = {
    agregarAlCarro: PropTypes.func.isRequired
}

export default Productos