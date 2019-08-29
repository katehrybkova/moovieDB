import React, { Component } from 'react';
import style from './Menu.module.css';
import film from '../../assets/images/film.svg';
import video_camera from '../../assets/images/video-camera.svg';
import rate_star_button from '../../assets/images/rate-star-button.svg';
import { Link } from 'react-router-dom'


class Menu extends Component {
    state = {
        "filmsMenuOpened": false,
        "serialsMenuOpened": false,
    }

    openFilmsMenu() {
        this.setState({ filmsMenuOpened: !this.state.filmsMenuOpened });
    }
    openSerialsMenu() {
        this.setState({ serialsMenuOpened: !this.state.serialsMenuOpened });
    }


    render() {

        const { filmsMenuOpened, serialsMenuOpened } = this.state;
        return (

            <ul className={style.menuList}>
                <li onClick={() => this.openFilmsMenu()}><img src={film} alt="logo" width="25" />
                    <p>Фильмы</p>
                    {filmsMenuOpened && (<ul>
                        <li><Link to="/films/premiers">Премьеры</Link></li>
                        <li><Link to="/films/onscreens">Сейчас на экранах</Link></li>
                        <li><Link to="/films/top">Топ 100</Link></li>
                    </ul>)}
                </li>
                <li onClick={() => this.openSerialsMenu()}><img src={video_camera} alt="logo" width="25" />
                    <p>Сериалы</p>
                    {serialsMenuOpened && (<ul>
                        <li><Link to="/serials/popular">Популярные</Link></li>
                        <li><Link to="/serials/onair">Сейчас в эфире</Link></li>
                        <li><Link to="/serials/bestrating">Лучший рейтинг</Link></li>
                    </ul>)}
                </li>
                <li><img src={rate_star_button} alt="logo" width="25" /><p>Избранное</p></li>
            </ul>


        )
    }
}



export default Menu;