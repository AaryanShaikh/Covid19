import React, { Component } from 'react'
import './App.css';
import axios from "axios"
import Home from './components/Home';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      covid: [],
      lastUpdated: ""
    }
  }

  componentDidMount = () => {
    let api = "https://data.covid19india.org/v4/min/data.min.json"
    axios.get(api)
      .then((res) => {
        console.log(res.data);
        let newData = []
        let state = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chattisgarh", "Delhi", "Dadra and Nagar Haveli", "Goa", "Gujarat", "Himachal Pradesh", "Haryana", "Jharkhand", "Jammu and Kashmir", "Karnataka", "Kerala", "Ladakh", "Lakshadweep Islands", "Maharashtra", "Meghalaya",
          "Manipur", "Madhya Pradesh", "Mizoram", "Nagaland", "Odisha", "Punjab", "Pondicherry", "Rajasthan", "Sikkim", "Telangana", "Tamil Nadu", "Tripura", "Other Territory", "Uttar Pradesh", "Uttarakhand", "West Bengal"]
        let states = ["AN", "AP", "AR", "AS", "BR", "CH", "CT", "DL", "DN", "GA", "GJ", "HP", "HR", "JH", "JK", "KA", "KL", "LA", "LD", "MH", "ML", "MN", "MP", "MZ", "NL", "OR", "PB", "PY", "RJ", "SK", "TG", "TN", "TR", "TT", "UP", "UT", "WB"]
        states.forEach((ele, ind) => {
          let obj = { name: state[ind], confirmed: res.data[ele].total.confirmed, deceased: res.data[ele].total.deceased, recovered: res.data[ele].total.recovered, tested: res.data[ele].total.tested }
          newData.push(obj)
        });
        this.setState({
          covid: newData,
          lastUpdated: res.data["AN"].meta.last_updated
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    if (this.state.covid.length === 0) {
      return <div className="load">
        <img src="https://covid19.uk.gov.in/NewAssets/images/loaders/heart-loading2.gif" alt="" />
      </div>
    }
    return (
      <div className="App">
        <Home covid={this.state.covid} lastUpdated={this.state.lastUpdated} />
      </div>
    );
  }
}