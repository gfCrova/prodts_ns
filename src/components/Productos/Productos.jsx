import Producto from './Producto.jsx'
import {getProducts} from '../../Utils/GetProducts.jsx'
import styles from './Productos.module.css'
import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Title from '../Others/Title.jsx'
import {MdArrowBack, MdArrowForward} from 'react-icons/md'

const Productos = (props) => {

    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageHistory, setPageHistory] = useState([1]); // Almacena un array de las páginas visitadas.
    const productsPerPage = 12;

    const loadProducts = (page) => {
        const offset = (page - 1) * productsPerPage;
        const apiUrl = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${productsPerPage}`;
      
        getProducts(apiUrl)
          .then((data) => {
            setProductos(data);
            setPageHistory((prev) => [...prev, page]); // Agrega la página actual al historial.
          })
          .catch((error) => {
            console.error("Error al obtener los productos:", error);
          });
    };

    const loadNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const loadPreviousPage = () => {
        if (pageHistory.length > 1) {
            // Evita retroceder más allá de la primera página.
            const previousPage = pageHistory[pageHistory.length - 2];
            setPageHistory((prev) => prev.slice(0, -1)); // Elimina la última página del historial.
            setCurrentPage(previousPage); // Carga la página anterior.
        }
    };

    useEffect(() => {
        loadProducts(currentPage);
    }, [currentPage]);

    return (
        <div className={`${styles.divProductos}`}>
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
            <div className={`${styles.containerBtnPag}`}>
                <button 
                    className={`${styles.btnPagination}`} 
                    onClick={loadPreviousPage}>
                        <MdArrowBack size={20}/>
                </button>
                <button 
                    className={`${styles.btnPagination}`} 
                    onClick={loadNextPage}>
                        <MdArrowForward size={20}/>
                </button>
            </div>
        </div>
    )
}

Productos.propTypes = {
    agregarAlCarro: PropTypes.func.isRequired
}

export default Productos