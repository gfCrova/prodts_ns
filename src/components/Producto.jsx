import {Component} from 'react';
import PropTypes from 'prop-types'

class Producto extends Component {
    render() {
        const { producto } = this.props;
        return (
            <div>
                <img src={producto.img} alt={producto.name} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
            </div>
        )
    }
}

Producto.propTypes = {
    producto: PropTypes.array.isRequired
}

export default Producto;