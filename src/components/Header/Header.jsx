import styles from './Header.module.scss';
import Logo from '../../imgs/Logo.png';
import { NavLink } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__item}>
        <img className={styles.header__logo} src={Logo} alt="" />
        <div className={styles.header__link}>
          <NavLink to="/">Персонажи</NavLink>
          <NavLink to="/location">Планеты</NavLink>
          <NavLink to="/episode">Эпизоды</NavLink>
        </div>
        <div className={styles.header__input}>
          <input placeholder="Поиск" type="text" />
          <IoSearchSharp style={{ cursor: 'pointer' }} color="white" />
        </div>
      <RxHamburgerMenu className={styles.burger} />
      </div>
    </div>
  );
};

export default Header;
