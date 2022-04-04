import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import homeReducer from '../Pages/HomePage/reducer';
import searchReducer from '../Pages/SearchPage/reducer';
import renterReducer from '../Pages/RenterPage/reducer';
import agentReducer from '../Pages/AgentPage/reducer';
import landlordReducer from '../Pages/LandlordPage/reducer';
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
