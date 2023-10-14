import styles from './Others.module.css'

const BotonCarrito = (props) => {
    return <button 
                className={`${styles.botonCarrito}`} {...props}>
                    Agregar al Carrito
                </button>
}

export default BotonCarrito;