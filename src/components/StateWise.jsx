import React, { Component } from 'react'

export default class StateWise extends Component {
    render() {
        return (
            <div className="states">
                <table>
                    <tbody>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deceased</th>
                            <th>Tested</th>
                        </tr>
                        {
                            this.props.covid.filter((item) => {
                                return item.name.toLowerCase().includes(this.props.searchRes)
                            })
                                .map((item) => {
                                    return <tr>
                                        <th>{item.name}</th>
                                        <td>{item.confirmed.toLocaleString()}</td>
                                        <td>{item.recovered.toLocaleString()}</td>
                                        <td>{item.deceased.toLocaleString()}</td>
                                        <td>{item.tested.toLocaleString()}</td>
                                    </tr>
                                })
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}
