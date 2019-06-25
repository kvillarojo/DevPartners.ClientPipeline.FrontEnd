import { call, put } from 'redux-saga/effects'
import * as types from '../constants/actionTypes' 
import axios from 'axios'

import { contactTable } from '../views/DummyData/dummy'

const url = 'https://cors-anywhere.herokuapp.com/https://devpartners.co/call-center-services/api_dpcrm/'

const R = require('ramda');

function getCompanyList (userID) {
    console.log(userID)

    return axios.get(url + `/Company/all/`+ userID)
      .then(response => {
        return {
          status: true,
          response: response
        }
      })
      .catch(error => {
        return {
          status: false,
          response: error
        }
    });
}



function getContactList(userId) {
  return axios.get(url+`Contact/all/`+userId)
    .then(response => {
      return {
        status: true,
        response: response
      }
    })
    .catch(error => {
      return {
        status: false,
        response: error
      }
  });
}

function logInID () {
  const sessioData = localStorage.getItem('crm_id')
  const userID = JSON.parse(sessioData)  
  return userID.adminId 
}

export function * getEntity ({ entityID }) {  
    try {
     
        if(entityID === 0){
          const entity = yield call(getCompanyList, logInID());
          if(entity.status){
            var isActive = R.propEq('isActive', true);
            const newData = R.filter(isActive)(entity.response.data)
          
            yield put({
                type: types.GET_ENTITY_REQUEST_SUCCESS,
                data: newData,
                fetching: false,
                tableID: entityID
            })
          }
        
        }else if(entityID === 1){
          const entity = yield call(getContactList, logInID())
          const list =  entity.response.data || []
          
          yield put({
              type: types.GET_ENTITY_REQUEST_SUCCESS,
              data: list,
              fetching: false,
              tableID: entityID
          })
        } 

  } catch (error) {
    yield put({ type: types.GET_ENTITY_REQUEST_ERROR, error });
  }
}

function nameList(list) {
  const names = []
  list.map((obj) => {
    names.push({name: obj.companyName, id: obj.companyId})
  })
  return names
}

export function * getEntityListNames ({entityID}) {
  try {
    const entity = yield call(getCompanyList, logInID());

    if(entity.status){
      var isActive = R.propEq('isActive', true);
      const activeList = R.filter(isActive)(entity.response.data)
      
      yield put({
          type: types.GET_NAME_LIST_REQUEST_SUCCESS,
          data: nameList(activeList),
          fetching: false,
          tableID: 0
      })
    }

  }catch(error  ){
    yield put({ type: types.GET_NAME_LIST_REQUEST_FAILED, error });
  }
  
}


const addNewContacts = (details) => {

  return axios.post(url+`/Contact/Add`, details)
  .then(response => {
    return {
      status: true,
      response: response
    }
  })
  .catch(error => {
    return {
      status: false,
      response: error
    }
  });
}

export function * addContacts ({formData}) {
  try {

    formData.createdBy = logInID()
    const contact = yield call(addNewContacts, formData);
    
    if(contact.status){
      var isActive = R.propEq('isActive', true);
      const activeList = R.filter(isActive)(contact.response.data)
      
      yield put({
          type: types.GET_NAME_LIST_REQUEST_SUCCESS,
          data: nameList(activeList),
          fetching: false,
          tableID: 0
      })
    }

  }catch(error  ){
    yield put({ type: types.ADD_CONTACT_REQUEST_FAILED, error });
  }
  
}



