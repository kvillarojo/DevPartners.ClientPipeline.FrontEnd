import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequestAction } from '../../actions/loginActions';
import Loader from 'react-loader-spinner';
import { Redirect } from 'react-router-dom';

class Login extends Component {
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
      this.props.loginUser(formData);
    }

    render() {
        const { fetching, userLoggedIn } = this.props;
        if(userLoggedIn){
          return <Redirect to='/'/>
        }

        return(
            <div className="loginContainer">
              <div className="container">
                <div className="loginForm">
                    <div className="center-content">
                        <a href="https://devpartners.co"><img src={require('../../common/photos/devpartners-logo.png')}  alt="" className="loginLogo" /></a>
                        <form onSubmit={this.handleSubmit}>
                          <div className="input-group">
                              <div className="input-group-prepend">
                                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                              </div>
                              <input type="text" className="form-control" ref="username" placeholder="Username" />
                          </div>
                          <br/>
                          <div className="input-group">
                              <div className="input-group-prepend">
                                  <span className="input-group-text"><i className="fas fa-lock"></i></span>
                              </div>
                              <input type="password" className="form-control" ref="password" placeholder="Password" />
                          </div>
                          <br/>
                          <div className="form-inline">
                            <div className="crm-group">
                                <button className="btn btn-primary btn-md crm-right" type="submit" disabled={fetching}> Login </button>
                            </div>
                            <div className="crm-group">
                                <a className="btn-md" href="/register" disabled={fetching}> Register </a>
                             </div>
                          </div>
                        </form>
                    </div>
                </div>
              </div>
              { (fetching) ? <div className="loading" ><Loader type="Audio" color="#somecolor" height={80} width={80} /></div> : null}
            </div>   
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        fetching: state.loginReducer.fetching,
        error: state.loginReducer.error,
        userLoggedIn: state.loginReducer.isUserlogIn
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      loginUser: (value) => dispatch(loginRequestAction(value))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);