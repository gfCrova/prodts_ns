import styles from './Carrito.module.css'
import PropTypes from 'prop-types'

const DetallesCarrito = (props) => {

        const { carrito } = props;
        return (
            <div className={`${styles.detallesCarrito}`}>
                <ul className={`${styles.ul}`}>
                    { carrito.map(x => 
                        <li key={x.title} className={`${styles.li}`}>
                            <img src={x.images} alt={x.title} width={50} height={32}/>
                            {x.title} <span>{x.cantidad}</span>
                        </li>
                    )}
                </ul>
            </div>
        );
    }

DetallesCarrito.propTypes = {
    carrito: PropTypes.array.isRequired
}

export default DetallesCarrito;
