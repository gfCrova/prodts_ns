import { useEffect, useState } from 'react'
import {getProducts} from '../../Utils/GetProducts.jsx'
import Categoria from './Categoria.jsx'
import styles from './Categorias.module.css'
import Title from '../Others/Title.jsx'

const Categorias = () => {

    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        // Llama a la función para obtener los productos cuando el componente se monta
        getProducts('https://api.escuelajs.co/api/v1/categories')
          .then((data) => {
            setCategoria(data.slice(0, 5));
          })
          .catch((error) => {
            console.error("Error al obtener los productos:", error);
          });
      }, []);

    return (
        <div className={`${styles.divCategorias}`}>
          <Title title={'Categorias'}/>
          <div className={`${styles.categoriaCard}`}>
            {categoria.map((cat) => (
                <Categoria 
                    key={cat.id}
                    categoria={cat}
                />
            ))}
          </div>
        </div>
    )
}

export default Categorias