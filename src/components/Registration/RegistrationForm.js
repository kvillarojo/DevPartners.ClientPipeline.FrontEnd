import React from 'react';
// import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { registerRequestAction } from '../../actions/registerAction';
// import { Link } from 'react-router-dom';

export class RegistrationForm extends React.Component {

	constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props)
  }
 
  render() {

  	console.log(this.props)
    return (
      <div className="container">
          <div className="loginForm">
              <div className="center-content">
                  <a href="https://devpartners.co"><img src={require('../../common/photos/devpartners-logo.png')} alt="Dev Partners" className="loginLogo" /></a>
                  <form onSubmit={this.handleSubmit}>
                 			<div className="form-inline crm-left">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" ref="fname" placeholder="firstname" />
                        </div>
                        <br/>
                        <div className="input-group crm-right">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" ref="lname" placeholder="lastname" />
                        </div>
                      </div>
                      <br/>
                      <div className="input-group crm-right">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                          </div>
                          <input type="email" className="form-control" ref="email" placeholder="email" />
                      </div>
                      <br/>
                      <div className="input-group crm-right">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fas fa-lock"></i></span>
                          </div>
                          <input type="password" className="form-control" ref="password" placeholder="Password" />
                      </div>
                      <br/>
                      <div className="input-group crm-right">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fas fa-lock"></i></span>
                          </div>
                          <input type="password" className="form-control" ref="retyp_pass" placeholder="Confirm password" />
                      </div>
                      <br/>
                      <div className="form-inline">
                        <div className="crm-group">
                      		<a className="btn btn-primary btn-md" href="/" > Login </a>
                      	</div>
                      	<div className="crm-group">
                      		<button className="btn btn-primary btn-md crm-right" type="submit"> Register </button>
                  			</div>
                  		</div>
                  </form>
              </div>
          </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      registerDetails: state.registerState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUser: (value) => dispatch(registerRequestAction(value))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);