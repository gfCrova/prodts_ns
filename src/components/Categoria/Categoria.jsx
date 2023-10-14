import PropTypes from 'prop-types'
import styles from './Categorias.module.css'

const Categoria = (props) => {

    const { categoria } = props

    return (
        <section className={`${styles.sectionCat}`}>
            <img 
                src={categoria.image} 
                alt={categoria.name}
                className={`${styles.imgCategoria}`}    
            />
            <h3>{categoria.name}</h3>
        </section>
    )
}

Categoria.propTypes = {
    categoria: PropTypes.array.isRequired
}

export default Categoria;