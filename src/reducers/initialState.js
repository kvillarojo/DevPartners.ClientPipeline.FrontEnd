function logInSession() {
 const crm_id = localStorage.getItem('crm_id');
  if(crm_id === '' || crm_id === null || crm_id === undefined){
      return false
  } else {
    return true
  }
}

export default {
  logInState: {
    fetching: false,
    error: null,
    credentials: null,
    isUserlogIn: logInSession(),
    status: false
  },
  isAuthenticated: false,
  registerState : {
  	fetching: false,
    error: null,
    credentials: null,
    message: null,
    status: false
  },
  entityState: {
    error: null,
    message: null,
    fetching: false,
    data: null,
    status:false
  }
};
  
  