import styles from './navigation.module.css'
import { navLinks } from '../../data/data.js'

const Navigation = ({updateFunction}) => {
    return (
        <>
            <div className={styles.navigation}>
                {navLinks.map((navItem, index) => (
                    <button className={styles.navItem} key={index} onClick={() => updateFunction(navItem)}>{navItem.toUpperCase()}</button>
                ))}
            </div>
        </>
    )
}

export default Navigation