import React, { Component } from 'react'
import { FiClock, FiSearch } from "react-icons/fi";

export default class Search extends Component {
    searchFun = (e) => {
        this.props.search(e.target.value)
    }
    render() {
        return (
            <div className="search">
                <h2>Search your state</h2>
                <div className="input">
                    <FiSearch />
                    <input type="text" placeholder="Goa" onChange={this.searchFun} />
                </div>
                <p>{this.props.getDateTime.date}, {this.props.getDateTime.time} AM IST <FiClock /></p>
                <div className="tally">
                    <div className="data">
                        <h3>Confirmed</h3>
                        <h1>{
                            this.props.covid.map(item => item.confirmed).reduce((prev, next) => prev + next).toLocaleString()
                        }</h1>
                    </div>
                    <div className="data">
                        <h3>Recovered</h3>
                        <h1>{
                            this.props.covid.map(item => item.recovered).reduce((prev, next) => prev + next).toLocaleString()
                        }</h1>
                    </div>
                    <div className="data">
                        <h3>Deceased</h3>
                        <h1>{
                            this.props.covid.map(item => item.deceased).reduce((prev, next) => prev + next).toLocaleString()
                        }</h1>
                    </div>
                </div>
            </div>
        )
    }
}
