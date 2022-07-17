import styles from './NavBar.module.css';
import NavItem from './NavItem/NavItem';

const NavBar = ({state}) => {
    return (
        <nav className={`${styles.nav}`}>
            {state.sideBar.navItems.map(value => <NavItem value={value} />)}
        </nav>
    );
}

export default NavBar;
