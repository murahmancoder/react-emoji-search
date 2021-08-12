import styles from './Navbar.module.css';

import searchIcon from '../../assets/loupe.svg';
import emojiIcon from '../../assets/smile.svg';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img src={emojiIcon} alt="emoji-icon" className={styles.navIcon} style={{ marginRight: 5, width: 24 }} />
            <img src={searchIcon} alt="search-icon" className={styles.navIcon} style={{ marginTop: 3 }} />
            <span className={styles.navTitle}>er</span>
        </nav>
    )
}

export default Navbar;