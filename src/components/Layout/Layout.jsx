import PropTypes from 'prop-types'
import styles from './Layout.module.css'

const Layout = (props) => {

    return (
      <div className={`${styles.layout}`}>
        <div className={`${styles.container}`}>
            {props.children}
        </div>
      </div>
    )
  }

Layout.propTypes = {
    children: PropTypes.node.isRequired, // Valida que 'children' esté presente y sea de tipo nodo
};

export default Layout;
