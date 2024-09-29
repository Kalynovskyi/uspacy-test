import Button from "../Button/Button"
import logo from '../../images/logo_uspacy_full.png'
import styles from './Header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
            <div className="logo">
                <img src={logo} alt="Main Logo" />
            </div>

            <Button isMobileIcon={true}>Зареєструватися</Button>
        </header>
    );
}

export default Header;