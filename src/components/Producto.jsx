import styles from './All.module.css'
import PropTypes from 'prop-types'
import BotonCarrito from './BotonCarrito'
import BotonComprar from './BotonComprar'

const Producto = (props) => {
    const { producto } = props;
    return (
            <section className={`${styles.producto}`}>
                <img className={`${styles.img}`} src={producto.images} alt={producto.name} />
                <h3>{producto.title}</h3>
                <p className={`${styles.price}`}><span className={`${styles.spanSign}`}>$</span>{producto.price}<span className={`${styles.spanPrice}`}>.00</span></p>
                <div className={`${styles.containerButtons}`}>
                    <BotonComprar/>
                    <BotonCarrito 
                        onClick={() => props.agregarAlCarro(producto)}
                    />
                </div>
            </section>
        )
}

Producto.propTypes = {
    producto: PropTypes.array.isRequired,
    agregarAlCarro: PropTypes.func.isRequired
}

export default Producto