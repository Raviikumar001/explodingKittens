import { configureStore } from '@reduxjs/toolkit';
import { RootState } from './Types';  
import authReducer ,{initialState} from './reducers/authReducer';
import gameReducer  from './reducers/gameReducer';





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
    game: gameReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = RootState; 

export default store;


