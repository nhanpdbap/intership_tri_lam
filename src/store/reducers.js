/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import authStore from './auth/reducer';
import productsStore from './products/reducer';
import orders from './orders/reducer';

//  export const history = createBrowserHistory()

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    authStore,
    productsStore,
    orders,
    ...injectedReducers,
  });

  return rootReducer;
}
