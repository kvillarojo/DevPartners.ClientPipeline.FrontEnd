import { fork,all } from 'redux-saga/effects';
import watchSaga from './watcher';
import companyWatchSaga from './companyWatcher';
import entityWatherSaga from './entityWarcher';
import rootWatcherSaga from './rootApplication/rootApplicationWatcher';
// import axios from 'axios'

// const sessioData = localStorage.getItem('crm_id')
// const token = JSON.parse(sessioData)     

// axios.defaults.headers.common = {'Authorization': `Bearer ${token.tokenString}`}

export default function* startForman() {
  yield all([
    fork(watchSaga),
    fork(companyWatchSaga),
    fork(entityWatherSaga),
    fork(rootWatcherSaga)
  ]);
}
