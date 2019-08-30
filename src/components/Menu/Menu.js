import React, { Component } from 'react';
import style from './Menu.module.css';
import film from '../../assets/images/film.svg';
import video_camera from '../../assets/images/video-camera.svg';
import rate_star_button from '../../assets/images/rate-star-button.svg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLink } from "../../redux/actions/LinkActions"


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
                        <li onClick={()=>this.props.onChange("https://api.themoviedb.org/3/movie/now_playing?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1")}>Премьеры</li>
                        <li onClick={()=>this.props.onChange("https://api.themoviedb.org/3/movie/upcoming?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1")}>Сейчас на экранах</li>
                        <li onClick={()=>this.props.onChange()}>Топ 100</li>
                    </ul>)}
                </li>
                <li onClick={() => this.openSerialsMenu()}><img src={video_camera} alt="logo" width="25" />
                    <p>Сериалы</p>
                    {serialsMenuOpened && (<ul>
                        <li onClick={()=>this.props.onChange()}>Популярные</li>
                        <li onClick={()=>this.props.onChange()}>Сейчас в эфире</li>
                        <li onClick={()=>this.props.onChange()}>Лучший рейтинг</li>
                    </ul>)}
                </li>
                <li><img src={rate_star_button} alt="logo" width="25" /><p>Избранное</p></li>
            </ul>


        )
    }
}
const mdtp = dispatch => ({
    onChange: link => dispatch(changeLink(link))
});


export default connect(null, mdtp)(Menu);