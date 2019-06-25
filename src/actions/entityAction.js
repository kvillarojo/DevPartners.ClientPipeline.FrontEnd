import * as types from '../constants/actionTypes';

export const getSelectedEntityRequest = (entityID) => ({
    type: types.GET_ENTITY_REQUEST,
    entityID
});

export const getCompanyNameList = (entityID) => ({
    type: types.GET_NAME_LIST_REQUEST,
    entityID
});

export const addNewContactRequest = (formData) => ({
    type: types.ADD_CONTACT_REQUEST,
    formData
})