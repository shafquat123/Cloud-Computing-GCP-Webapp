import {GET_STORES, SET_STORES} from '../constants/ActionTypes'
import axios from 'axios';
import Stores from '../mockData/stores'
import _ from 'lodash'

export function stores (state ={}, action){
  switch (action.type){
    case GET_STORES:
      return _.merge({}, state,{stores: action.data.stores });
    //add switch condition
    case SET_STORES:
      return _.merge({}, state, {setStores: action.data} );
    default:
      return state
  }
}

const storeDetails = (data) => {
  return {
    type : GET_STORES,
    data
  }
}


export const getStores = (radius, latitude, longitude) => {
  // axios.get(`url`)
  //     .then(res => {
  //       dispatch(storeDetails(res));
  //     })
  return (dispatch, getState) => {
    let storeValues= getState()
    dispatch(storeDetails(Stores));
  }

}

//create a function as above that was dispatched in container
//In this function dispatch an action
const setSelectedStores = (data) => {
  return {
    type: SET_STORES,
    data
  }
}

export const setStores = (selectedStores) => {
  return (dispatch, getState) => {
    dispatch(setSelectedStores(selectedStores))
  }
}