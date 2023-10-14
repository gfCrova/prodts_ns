import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar.jsx'
import { useState } from 'react'

const App = () => {

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
      <nav>
        <Navbar 
            carrito={carrito} 
            carritoVisible={carritoVisible} 
            mostrarCarrito={mostrarCarrito}
        />
      </nav>
        <Layout>
          <Title/>
          <Productos 
            agregarAlCarro={agregarAlCarro}
          />
        </Layout>
    </main>
  );
};

export default App;
