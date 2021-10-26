import React, { Component } from 'react'

export default class Overall extends Component {
    constructor() {
        super();
        this.state = {
            date: "",
            time: "",
            dateFull: ""
        }
    }

    componentDidMount = () => {
        let data = this.props.lastUpdated
        let date = data.substring(0, 10).split("-")
        let time = data.substring(11, 16)
        let months = ["", "January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        this.setState({
            date: `${date[2]} ${months[date[1]].substring(0, 3)}`,
            time: time,
            dateFull: `${date[2]} ${months[date[1]]}`
        })
        this.props.setDateTime({ date: `${date[2]} ${months[date[1]].substring(0, 3)}`, time: time })
    }

    render() {
        return (
            <div className="overall">
                {console.log(this.props.covid)}
                <div className="left">
                    <h1>India</h1>
                    <p>Last updated on {this.state.date}, {this.state.time} AM IST</p>
                </div>
                <div className="right">
                    <p>Tested</p>
                    <p>{
                        this.props.covid.map(item => item.tested).reduce((prev, next) => prev + next).toLocaleString()
                    }</p>
                    <p>As of {this.state.dateFull}</p>
                    <p>per source</p>
                </div>
            </div>
        )
    }
}
