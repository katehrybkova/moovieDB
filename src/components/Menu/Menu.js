import React, { Component } from 'react';
import style from './Menu.module.css';
import film from '../../assets/images/film.svg';
import video_camera from '../../assets/images/video-camera.svg';
import rate_star_button from '../../assets/images/rate-star-button.svg';
import { connect } from 'react-redux';
import { changeLink } from "../../redux/actions/LinkActions";
import { changeData } from "../../redux/actions/dataActions";
import axios from "axios";



class Menu extends Component {
    state = {
        "filmsMenuOpened": false,
        "serialsMenuOpened": false,
    }
    componentDidMount() {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1").then(res => {
            this.props.onChangeData(res.data.results)

        })
    }
    openFilmsMenu() {
        this.setState({ filmsMenuOpened: !this.state.filmsMenuOpened });
    }
    openSerialsMenu() {
        this.setState({ serialsMenuOpened: !this.state.serialsMenuOpened });
    }
    fetchData(link) {
        // const { link } = this.props;
        axios.get(link).then(res => {
           this.props.onChangeData(res.data.results)

        })
    }
    render() {

        const { filmsMenuOpened, serialsMenuOpened } = this.state;
        return (

            <ul className={style.menuList}>
                <li onClick={() => this.openFilmsMenu()}><img src={film} alt="logo" width="25" />
                    <p>Фильмы</p>
                    {filmsMenuOpened && (<ul>
                        <li
                            onClick={() => {
                                this.fetchData("https://api.themoviedb.org/3/movie/now_playing?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1")
                            }} >Премьеры</li>
                        <li
                            onClick={() => {
                                this.fetchData("https://api.themoviedb.org/3/movie/upcoming?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1")
                            }} >Сейчас на экранах</li>
                        <li onClick={() => {
                                this.fetchData("https://api.themoviedb.org/3/movie/top_rated?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1")
                            }}>Топ 100</li>
                    </ul>)}
                </li>
                <li onClick={() => this.openSerialsMenu()}><img src={video_camera} alt="logo" width="25" />
                    <p>Сериалы</p>
                    {serialsMenuOpened && (<ul>
                        <li onClick={() => {
                                this.fetchData("https://api.themoviedb.org/3/tv/top_rated?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1")
                            }}>Популярные</li>
                        <li onClick={() => {
                                this.fetchData("https://api.themoviedb.org/3/tv/on_the_air?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1")
                            }}>Сейчас в эфире</li>
                        <li  onClick={() => {
                                this.fetchData("https://api.themoviedb.org/3/tv/popular?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1")
                            }}>Лучший рейтинг</li>
                    </ul>)}
                </li>
                <li><img src={rate_star_button} alt="logo" width="25" /><p>Избранное</p></li>
            </ul>
        )
    }
}
const mdtp = dispatch => ({
    onChangeLink: link => dispatch(changeLink(link)),
    onChangeData: data => dispatch(changeData(data)),
});
const mstp = state => ({
    link: state.link
});


export default connect(mstp, mdtp)(Menu);