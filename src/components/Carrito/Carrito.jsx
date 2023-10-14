import styles from './Carrito.module.css'
import BubbleAlert from '../Others/BadgeAlert.jsx'
import PropTypes from 'prop-types'
import DetallesCarrito from './DetallesCarrito.jsx'
import {PiShoppingCartFill} from 'react-icons/pi'

const Carrito = (props) => {

        const { carrito, carritoVisible, mostrarCarrito } = props
        const cantidad = carrito.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <div className={`${styles.divCarrito}`}>
                <span className={`${styles.badge}`}>
                    {cantidad !== 0 ? <BubbleAlert value={cantidad}/> : null}
                </span>
                <button 
                    onClick={mostrarCarrito}
                    className={`${styles.botonNavCarrito}`}>
                    <PiShoppingCartFill size={40}/>
                </button>
                {carritoVisible ? <DetallesCarrito carrito={carrito}/> : null}
            </div>
        );
    }

Carrito.propTypes = {
    carrito: PropTypes.array.isRequired,
    carritoVisible: PropTypes.bool.isRequired,
    mostrarCarrito: PropTypes.func.isRequired
}

export default Carrito;
