import React, { Component } from "react";
import axios from "axios";
import Card from '../Card/Card';
import style from './Main.module.css';
import { connect } from 'react-redux'

class Main extends Component {

    state = {
        api: this.props.link,
        data: []
    }

    componentDidMount() {
        axios.get(this.state.api).then(res => {
            this.setState({ data: res.data.results });
        });

    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.link !== prevProps.link) {
            axios.get(this.state.api).then(res => {
                this.setState({ data: res.data.results });
            });
        }
    }

    render() {
        const { data } = this.state;

        return (
            <div className={style.cards}>
                {data.map(el =>
                    <Card key={el.id} poster_path={el.poster_path} title={el.title} year={el.release_date} />
                )}
            </div>
        );
    }
}
const mstp = state => ({
link: state.link,
})

export default connect(mstp, null)(Main)
