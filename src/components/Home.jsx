import React, { Component } from 'react'
import Overall from './Overall'
import Search from './Search'
import StateWise from './StateWise'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            date: "",
            time: "",
            search: ""
        }
    }
    setDateTime = (e) => {
        this.setState({
            date: e.date,
            time: e.time
        })
    }
    setSearch = (e) => {
        this.setState({ search: e })
    }
    render() {
        return (
            <div>
                <Overall covid={this.props.covid} lastUpdated={this.props.lastUpdated} setDateTime={this.setDateTime} />
                <Search getDateTime={{ date: this.state.date, time: this.state.time }} covid={this.props.covid} search={this.setSearch} />
                <StateWise covid={this.props.covid} searchRes={this.state.search} />
            </div>
        )
    }
}
