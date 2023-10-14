import styles from './All.module.css'
import Logo from './Logo.jsx'
import Carrito from './Carrito.jsx'
import PropTypes from 'prop-types'

const Navbar = (props) => {

    const { carrito, carritoVisible, mostrarCarrito } = props
    return (
      <nav className={`${styles.navbar}`}>
        <Logo />
        <Carrito 
          carrito={carrito}
          carritoVisible={carritoVisible}
          mostrarCarrito={mostrarCarrito}
        />
      </nav>
    )
  }

Navbar.propTypes = {
  carrito: PropTypes.array.isRequired,
  carritoVisible: PropTypes.array.isRequired,
  mostrarCarrito: PropTypes.func.isRequired
}

export default Navbar;
