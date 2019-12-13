import React, { Component } from "react";
import Form from './Form';
import "./App.css";

import {Smurfs} from './Smurfs';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/index';

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs()
  }
  render() {

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurf: state.fetching
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
