import React, { Component } from 'react';
import { connect } from "react-redux";
import { Router } from "react-router";
import { Switch, Route, HashRouter, BrowserRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import Router from '../routes';
import { checkLocalStorage } from './actions/rootActions';
// import * as types from '../constants/actionTypes';
import './App.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DefaultLayout from './containers/Layout/DefaultLayout'

import { createBrowserHistory } from "history";

// routes component urls

// import Login from '../containers/Login/Login';
const Login = React.lazy(() => import('./containers/Login/Login'));
const Register = React.lazy(() => import('./containers/Register/RegisterPage'));
const PrivateRoute = React.lazy(() => import('./privateRoutes/PrivateRoute'));

// Containers
// const DefaultLayout = React.lazy(() => import('./containers/Layout/index'));


// import PrivateRoute from './privateRoutes/PrivateRoute';
// import Register from './containers/Register/RegisterPage'
// import NotFound from './containers/Error/404/404'

// loading 
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Initialize browser history
const history = createBrowserHistory();


toast.configure()

class App extends Component {

    handleChange(event) {
        this.setState({})
    }
    
    componentDidMount() {
        this.initializeLocalStorage();
    }

    initializeLocalStorage() {
        this.props.checkLocalStorage();
    }

    render() {

        const { isAuthenticated } = this.props;
        console.log(this.props)
        return(
            <HashRouter>
                <React.Suspense fallback={loading()}>
                    <BrowserRouter>
                        <Router history={history}>     
                            <Switch>
                                <Route exact path='/login' component={Login} />
                                <Route exact path='/register' component={Register} />
                                <PrivateRoute auth={isAuthenticated} component={DefaultLayout}/>
                            </Switch>
                        </Router>
                    </BrowserRouter>
                </React.Suspense>
            </HashRouter>
        );
    }
}


const mapStateToProps = (state) => {
    // console.log(state.loginReducer);
    return {
        isAuthenticated: state.loginReducer.isUserlogIn
    };
 };
  
const mapDispatchToProps = dispatch => {
    return {
      checkLocalStorage: () => dispatch(checkLocalStorage())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;