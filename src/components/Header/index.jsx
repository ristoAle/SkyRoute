import Navigation from '../Navigation'
import styles from './header.module.css'

const Header = ({updateFunction}) => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>SkyRoute</div>
                <Navigation updateFunction={updateFunction} />
            </div>

        </>
    )
}

export default Header