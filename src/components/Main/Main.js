import React from "react";
import Card from '../Card/Card';
import style from './Main.module.css';

const Main = ({ data }) =>  <div className={style.cards}>
        {data.map(el =>
            <Card key={el.id} poster_path={el.poster_path} title={el.title?el.title:el.name} year={el.release_date?el.release_date:el.first_air_date} />
        )}
    </div>

export default Main
