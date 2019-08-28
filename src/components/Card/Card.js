import React from 'react';
import style from './Card.module.css';

const Card = ({ title, year, poster_path }) =>{
const background = `https://image.tmdb.org/t/p/w185${poster_path}`
   return  <div className={style.card} style={{backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)), url(${background})` }} >
        <p className={style.textCard}>{title} ({year.slice(0, 4)})</p>
        <p className={style.textCard}></p>
    </div >
}

export default Card;

