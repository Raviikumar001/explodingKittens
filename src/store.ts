import { configureStore } from '@reduxjs/toolkit';
import { RootState } from './Types';  
import authReducer ,{initialState} from './reducers/authReducer';






const storedUser = localStorage.getItem('user');
const token = localStorage.getItem('token');
if (storedUser) {
  initialState.user = JSON.parse(storedUser);

}
if(token)
{
    initialState.token = token
}

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = RootState; // Assuming your RootState combines your 'AuthState'

export default store;


