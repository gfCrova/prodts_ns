import styles from './Others.module.css'
import logo from '../../assets/logo.png'

const Logo = () => {
        return (
            <div className={`${styles.logo}`}>
                <a href="/" rel="noopener noreferrer"><img src={logo} alt="logo" width={150}/></a>
            </div>
        );
    }

export default Logo;
