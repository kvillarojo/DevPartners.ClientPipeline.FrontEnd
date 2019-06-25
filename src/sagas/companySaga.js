import { call, put } from 'redux-saga/effects'
import * as types from '../constants/actionTypes' 
import axios from 'axios'
import Swal from 'sweetalert2'

const url = 'https://cors-anywhere.herokuapp.com/https://devpartners.co/call-center-services/api_dpcrm/'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

function logInID () {
  const sessioData = localStorage.getItem('crm_id')
  const userID = JSON.parse(sessioData)  
  return userID.adminId 
}


function registerCompany (companyDetails) {

  companyDetails.createdBy = logInID()
  return axios.post(url+`Company/Add`, companyDetails)
	  .then(response => {
	    return {
        status: true,
        response: response,
        statusCode: 200
      }
	  })
    .catch(function (error) {
      if (error.response) {
        return {
          status: false,
          response: error,
          statusCode: 400
        }
      } else if (error.request) {
        return {
          status: false,
          response: error,
          statusCode: 201
        }
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
}

export function * registerCompanySaga ({ companyDetails }) {
  try {
    const company = yield call(registerCompany, companyDetails);

    if (company.status) {
      yield put({
        type: types.COMPANY_REQUEST_SUCCESS,
        message: 'Company successfully added!'
      })
      setTimeout(() => {
        Toast.fire({
          type: 'success',
          title: 'Company succcessfully Added!'
        })
      }, 1000);
    } else {
      yield put({ 
        type: types.COMPANY_REQUEST_FAILED, 
        message : company.response.message
      });
      setTimeout(() => {
        Toast.fire({
          type: 'warning',
          title: 'Empty Fields'
        })
      }, 1000);
    }

  } catch (error) {

    yield put({ type: types.COMPANY_REQUEST_ERROR, error });
    setTimeout(() => {
      Toast.fire({
        type: 'error',
        title: 'Bad Request!'
      })
    }, 1000);
  }
}

function removeCompany(companyID) {
  return axios.delete(`/api/CRMCompany/DeleteCompany`, {
      params: {
          id: companyID
      }
    })
	  .then(response => {
	    return {
        status: true,
        response: response,
        statusCode: 200
      }
	  })
	  .catch(error => {
	    if (error.response) {
        return {
          status: false,
          response: error,
          statusCode: 400
        }
      } else if (error.request) {
        return {
          status: false,
          response: error,
          statusCode: 201
        }
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
}


export function * removeCompanySaga ({ companyID }) {
  try {
    const company = yield call(removeCompany, companyID);
    
    if(company.status){
      yield put({
        type: types.REMOVE_ENTITY_REQUEST_SUCCESS,
        message: 'Company successfully added!'
      })
      setTimeout(() => {
        Toast.fire({
          type: 'success',
          title: 'Successfully Remove'
        })
      }, 1000);
    }else{
      yield put({ 
        type: types.REMOVE_ENTITY_REQUEST_FAILED, 
        message : company.response.message,
        status: false
      });
      setTimeout(() => {
        Toast.fire({
          type: 'warning',
          title: 'Unable to remove'
        })
      }, 1000);
    }
  } catch (error) {
    yield put({ type: types.REMOVE_ENTITY_REQUEST_FAILED, error });
    setTimeout(() => {
      Toast.fire({
        type: 'error',
        title: 'Server Error'
      })
    }, 1000);
  }
}

function udpateCompany (details) {
  return axios.put(`/api/CRMCompany/UpdateCompany`, details)
  .then(response => {
    return {
      status: true,
      response: response,
      statusCode: 200
    }
  })
  .catch(error => {
    if (error.response) {
      return {
        status: false,
        response: error,
        statusCode: 400
      }
    } else if (error.request) {
      return {
        status: false,
        response: error,
        statusCode: 201
      }
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
}

export function * updateCompanySaga ({ companyDetails }) {
  try {
    const company = yield call(udpateCompany, companyDetails);
    console.log(company)
    if(company.status){
      yield put({
        type: types.UPDATE_ENTITY_REQUEST_SUCCESS,
        message: 'Company successfully added!'
      })
      setTimeout(() => {
        Toast.fire({
          type: 'success',
          title: 'Successfully Updated!'
        })
      }, 1000);
    }else{
      yield put({ 
        type: types.UPDATE_ENTITY_REQUEST_FAILED, 
        message : company.response.message,
        status: false
      });
      setTimeout(() => {
        Toast.fire({
          type: 'warning',
          title: 'Unable to update!'
        })
      }, 1000);
    }
  } catch (error) {
    yield put({ type: types.UPDATE_ENTITY_REQUEST_FAILED, error });
    setTimeout(() => {
      Toast.fire({
        type: 'error',
        title: 'Server Error'
      })
    }, 1000);
  }
}




