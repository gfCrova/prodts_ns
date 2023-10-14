import styles from './Productos.module.css'
import PropTypes from 'prop-types'
import BotonCarrito from '../Others/BotonCarrito'
import BotonComprar from '../Others/BotonComprar'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Producto = (props) => {
    const { producto } = props;
    return (
            <section className={`${styles.producto}`}>
                {/*<img className={`${styles.img}`} src={producto.images} alt={producto.name} />*/}
                <div className={`${styles.carousel}`}>
                    <Carousel>
                        {producto.images.map((i) => (
                                <img src={i} key={producto.id} alt={producto.name} className={`${styles.img}`}/>
                        ))}
                    </Carousel>
                </div>
                <h3 className={`${styles.title}`}>{producto.title}</h3>
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