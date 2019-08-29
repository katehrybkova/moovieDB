import React, { Component } from 'react';
import style from './Header.module.css';
import Menu from '../Menu/Menu';
import icon from '../../assets/images/menu.svg';
import menuLogo from '../../assets/images/menuLogo.png';


class Header extends Component {
    state = {
        menuOpen: false,
    }
    handleMenuOpen = () => {
        const { menuOpen } = this.state;
        this.setState({ menuOpen: !menuOpen });
    }
    render() {
        const { menuOpen } = this.state;
        return (<div className={style.header}>
            <div>
                <img onClick={this.handleMenuOpen} width="25" src={icon} alt="icon" />
                {menuOpen && < Menu  />}
                <img src={menuLogo} alt="cow" />
                <p>Mooogle</p>
            </div>
        </div>)
    }
}

export default Header;