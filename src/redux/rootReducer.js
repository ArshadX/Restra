import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './user/userReducer';
import {persistReducer} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
});
export default rootReducer;
