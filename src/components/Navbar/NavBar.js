import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={`${styles.nav}`}>
            <div className={styles.item}>
                <NavLink className={navData => navData.isActive ? styles.active : styles.item}
                    to='/profile'>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={navData => navData.isActive ? styles.active : styles.item}
                    to='/dialogs'>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={navData => navData.isActive ? styles.active : styles.item}
                    to='/news'>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={navData => navData.isActive ? styles.active : styles.item}
                    to='/music'>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={navData => navData.isActive ? styles.active : styles.item}
                    to='/settings'>Settings</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
