import { configureStore } from '@reduxjs/toolkit';
import { RootState } from './Types';  
import authReducer ,{initialState} from './reducers/authReducer';






const storedUser = localStorage.getItem('user');
if (storedUser) {
  initialState.user = JSON.parse(storedUser);
}

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = RootState; // Assuming your RootState combines your 'AuthState'

export default store;


