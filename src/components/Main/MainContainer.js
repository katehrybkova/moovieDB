import React, { Component } from "react";
import axios from "axios";
import Card from '../Card/Card';
import style from './Main.module.css';
import { connect } from 'react-redux';
import { changeData } from '../../redux/actions/dataActions';
import Main from './Main';

const MainContainer = ({ data, onChange }) => {
 return   data &&   <Main data={data} />
}

const mstp = state => ({
    data: state.data,
})
const mdtp = dispatch => ({
    onChange: data => dispatch(changeData(data))
})

export default connect(mstp, mdtp)(MainContainer)
