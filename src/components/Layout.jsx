import { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './All.module.css'

class Layout extends Component {

  render() {
    return (
      <div className={`${styles.layout}`}>
        <div className={`${styles.container}`}>
            {this.props.children}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired, // Valida que 'children' esté presente y sea de tipo nodo
};

export default Layout;

