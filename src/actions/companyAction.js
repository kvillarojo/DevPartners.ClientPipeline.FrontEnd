import * as types from '../constants/actionTypes';

export const addCompanyRequestAction = (companyDetails) => ({
    type: types.COMPANY_REQUESTED, 
    companyDetails
});

export const removeCompanyRequestAction = (companyID) => ({
    type: types.REMOVE_ENTITY_REQUEST, 
    companyID
});

export const updateCompanyRequest = (companyDetails) => ({
    type: types.UPDATE_ENTITY_REQUEST, 
    companyDetails
});

