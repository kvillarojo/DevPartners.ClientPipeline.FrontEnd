import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import { connect } from "react-redux";

// action types
import { sendLogoutRequest } from '../../actions/rootActions';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

// sidebar nav config
import navigation from '../../navs';
// routes config
import routes from '../../routes';

 function relaoad(){
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

class DefaultLayout extends Component {
  constructor (props) {
    super(props)
    
    this.signOut = this.signOut.bind(this)
  }


  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
      this.props.logOut()
      
      // this need to change to proper logout
      // eslint-disable-next-line no-restricted-globals
      location.reload(); 
    }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
              <AppSidebarForm />
                <Suspense>
                 <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
                </Suspense>
              <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          {/* <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside> */}
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const loginState  = state.loginReducer.isUserlogIn;
  return {
    isLogIn : loginState
  }
};

const mapDispatchToProps = dispatch => ({
  logOut: data => dispatch(sendLogoutRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)