import React, { Component } from "react";
import axios from "axios";
import { API, key } from '../../features/api';
import Card from '../Card/Card';
import style from './Main.module.css'

export default class Main extends Component {

    state = {
        api: `${API}/now_playing?${key}`,
        data: []
    }

    componentDidMount() {
        axios.get(this.state.api).then(res => {
            this.setState({ data: res.data.results });
        });

    }

    render() {
        const { data } = this.state;

        return (
            <div className={style.cards}>
                {data.map(el =>
                 <Card  key={el.id} poster_path={el.poster_path} title={el.title} year={el.release_date} />
                )}
            </div>
        );
    }
}
