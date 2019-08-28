import React from 'react';
import style from './Header.module.css';
import Menu from '../Menu/Menu';
import icon from '../../assets/images/menu.svg';
import menuLogo from '../../assets/images/menuLogo.png';


const Header = () =>
    <div className={style.header}>
        <div>
        <img width="25" src={icon} alt="icon" />
        <img  src={menuLogo} alt="cow" />
        <p>Mooogle</p>
        </div>
    </div>

export default Header;