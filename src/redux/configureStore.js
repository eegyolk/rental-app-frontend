import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import homeReducer from '../Pages/Home/reducer';
import searchReducer from '../Pages/Search/reducer';
import renterReducer from '../Pages/Renter/reducer';
import agentReducer from '../Pages/Agent/reducer';
import landlordReducer from '../Pages/Landlord/reducer';
import { watcherSaga } from './rootSaga';

const reducers = combineReducers({
  home: homeReducer,
  search: searchReducer,
  renter: renterReducer,
  agent: agentReducer,
  landlord: landlordReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const enhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducers, {}, enhancers);

sagaMiddleware.run(watcherSaga);

export default store;
