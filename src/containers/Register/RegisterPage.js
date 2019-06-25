import React, { Component } from "react";
import { connect } from "react-redux";
import { registerRequestAction } from '../../actions/registerAction';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
// import Loader from 'react-loader-spinner';
// import { Redirect } from 'react-router-dom';
// import {RegistrationForm} from '../../components/Registration/RegistrationForm';

class RegisterUser extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.userDetails = this.props.registerDetails;
    }
    
    handleSubmit(e) {
      e.preventDefault();
      const formData = {};
      for (const field in this.refs) {
      formData[field] = this.refs[field].value;
      }
      this.props.addUser(formData);
    }
      
    componentWillUpdate(nextProps, nextState) {
      if(nextProps.registerDetails.registerReducer.isRegistered){    
        toast.success("Register Successfully !", {
          position: toast.POSITION.TOP_RIGHT
        });
        document.getElementById('register-form').reset();
      }
    }
    render() {
        return(
            <div className="register-container">
              <div className="container">
			          <div className="registerForm">
			              <div className="center-content">
			                  <a href="/">
                            <img src={require('../../common/photos/devpartners-logo.png')} alt="Dev Partners" className="loginLogo" /></a>
			                  <form onSubmit={this.handleSubmit} id="register-form">
			                 			<div className="form-inline crm-left">
			                        <div className="input-group">
			                            <div className="input-group-prepend">
			                                <span className="input-group-text"><i className="fas fa-user"></i></span>
			                            </div>
			                            <input type="text" className="form-control" ref="firstName" placeholder="firstname" />
			                        </div>
			                        <br/>
			                        <div className="input-group crm-right">
			                            <div className="input-group-prepend">
			                                <span className="input-group-text"><i className="fas fa-user"></i></span>
			                            </div>
			                            <input type="text" className="form-control" ref="lastName" placeholder="lastname" />
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
			                              <span className="input-group-text"><i className="fas fa-user"></i></span>
			                          </div>
			                          <input type="text" className="form-control" ref="username" placeholder="Username" />
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
			                      		<a className="btn btn-primary btn-md" href="/login" > 
										  <i class="material-icons crm-back-icon">
											keyboard_backspace
										  </i>
										  	Login 
										  </a>
			                      	</div>
			                      	<div className="crm-group">
			                      		<button className="btn btn-primary btn-md crm-right" type="submit"> Register </button>
			                  		</div>
			                  	</div>
			                </form>
			            </div>
			        </div>
			    </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {  
  // console.log(state)
  return {
      registerDetails: state 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUser: (value) => dispatch(registerRequestAction(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);