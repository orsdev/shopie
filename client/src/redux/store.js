import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

export const store = createStore(persistReducer(persistConfig, rootReducer), applyMiddleware(thunk));
export const persistor = persistStore(store);
