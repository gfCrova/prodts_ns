import styles from './Others.module.css'
import PropTypes from 'prop-types'

const BubbleAlert = (props) => {

    // Método para obtener el valor de las alertas de el carrito
    const getNumber = (n) => {
        if(!n) { return ''}
        return n > 9 ? '+9' : n
    }

    const { value } = props;
    
    return (
        <span className={`${styles.badgeAlert}`}>
            {getNumber(value)}
        </span>
    );
    }

BubbleAlert.propTypes = {
    value: PropTypes.number.isRequired
}

export default BubbleAlert;
