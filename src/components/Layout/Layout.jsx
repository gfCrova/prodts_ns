import styles from './Layout.module.css'
import Navbar from '../Nav/Navbar'
import Productos from '../Productos/Productos'
import Categorias from '../Categoria/Categorias'
import { useState } from 'react'

const Layout = () => {

    const [carrito, setCarrito] = useState([]);
    const [carritoVisible, setCarritoVisible] = useState(false);

    const agregarAlCarro = (producto) => {
      if (carrito.find((x) => x.id === producto.id)) {
        const newCarrito = carrito.map((x) =>
          x.id === producto.id ? { ...x, cantidad: x.cantidad + 1 } : x
        );
        setCarrito(newCarrito);
      } else {
        setCarrito([...carrito, { ...producto, cantidad: 1 }]);
      }
    }

    const mostrarCarrito = () => {
      if (!carrito.length) {
        return;
      }
      setCarritoVisible(!carritoVisible);
    };

    return (
      <main>
        <header>
          <Navbar 
            carrito={carrito} 
            carritoVisible={carritoVisible} 
            mostrarCarrito={mostrarCarrito}
          />
        </header>
        <section className={`${styles.layout}`}>
          <div>
            <Categorias/>
            <Productos 
              agregarAlCarro={agregarAlCarro}
            />
          </div>
        </section>
      </main>
    )
}

export default Layout;
