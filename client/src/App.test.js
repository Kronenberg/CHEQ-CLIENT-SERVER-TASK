import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// @ACTIONS
import * as categoryActions from './Actions/categoryActions';
import * as locationActions from './Actions/locationsActions';
// @TYPES
import * as TYPES from './ActionTYPES/TYPES';

// @HELPERS
import { generateUniqueID } from './Helpers';

// @REDUCERS
import categoryReducer from './reducers/categoryReducer';
import locationReducer from './reducers/locationReducer';
describe('remove category/locations', () => {

  it('it should remove category by id', () => {
    const payload = {
      id: "123123"
  }
  
    const removeCategory = {
      type: TYPES.REMOVE_CATEGORY,
      payload
    }

    expect(categoryActions.removeCategory(payload))
      .toEqual(removeCategory)
  });

  it('it should remove location by id', () => {
    const payload = {
      id: "123123"
  }
  
    const removeLocation = {
      type: TYPES.REMOVE_LOCATION,
      payload
    }

    expect(locationActions.removeLocation(payload))
      .toEqual(removeLocation)
  });

});

describe('category reducer', () => {
  it('should return the initial state of the category reducer', () => {
    expect(categoryReducer(undefined, {})).toEqual({
      categories: []
    })
  })


  it('should return the initial state of the location reducer', () => {
    expect(locationReducer(undefined, {})).toEqual([])
  })


});