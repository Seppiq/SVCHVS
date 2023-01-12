import styles from './Header.module.css'


const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className={styles.content}>
                    Book shop
                </div>
            </div>
        </header>
    )
}

export default Header;