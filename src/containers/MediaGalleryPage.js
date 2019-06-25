import React, { Component } from "react";
import logo from "../logo.svg";
// import "./App.css";
import { dogRequest } from '../actions/mediaActions';

import { connect } from "react-redux";

class MediaGalleryPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    this.props.onRequestDog(formData);
  }

  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    
    return (
      <div className="App">
      <div>
          <form onSubmit={this.handleSubmit}>
            <input ref="phone" className="phone" type='tel' name="phone"/>
            <input ref="email" className="email" type='tel' name="email"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        <header className="App-header">
            <img src={dog || logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>
        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    fetching: state.dogReducer.fetching,
    dog: state.dogReducer.dog,
    error: state.dogReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: (value) => dispatch(dogRequest(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaGalleryPage);