import React, { Component } from "react";
import axios from "axios";
import Card from '../Card/Card';
import style from './Main.module.css';
import { connect } from 'react-redux';
import { changeData } from '../../redux/actions/dataActions'

const fetchApi = (link, onChange) =>
    axios.get(link).then(res => {
        // this.setState({ data: res.data.results });
        onChange(res.data.results)

    })
const Main = ( { data, link, onChange }) => {

    fetchApi(link, onChange)



   return <div className={style.cards}>
        {data.map(el =>
            <Card key={el.id} poster_path={el.poster_path} title={el.title} year={el.release_date} />
        )}
    </div>

}

const mstp = state => ({
    link: state.link,
    data: state.data,
})
const mdtp = dispatch => ({
    onChange: data => dispatch(changeData(data))
})

export default connect(mstp, mdtp)(Main)
