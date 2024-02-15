
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState , User} from "../Types";


export const initialState: AuthState ={
    user: null,
    isLoading: false,
    error: null,
    token: null
}
type Payload = {
    user :User,
    token: string
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loginStart(state) {
        state.isLoading = true;
        state.error = null;
      },
      registerStart(state) {
        state.isLoading = true;
        state.error = null
      },
      registerSuccess(state,action: PayloadAction<Payload>) {
        state.isLoading = false;
        state.user = action.payload.user
        state.token = action.payload.token
        localStorage.setItem('user', JSON.stringify(action.payload.user)); 
        localStorage.setItem('token', JSON.stringify(action.payload.token)); 
      },

      loginSuccess(state, action: PayloadAction<Payload>) {
        state.isLoading = false;
        state.user = action.payload.user
        state.token = action.payload.token
        localStorage.setItem('user', JSON.stringify(action.payload.user)); 
        localStorage.setItem('token', JSON.stringify(action.payload.token)); 
      },
      registerFailure(state, action: PayloadAction<string>) {
        state.isLoading = false;
        state.error = action.payload;
      },

      loginFailure(state, action: PayloadAction<string>) {
        state.isLoading = false;
        state.error = action.payload;
      },
     
      logout() {
       
        localStorage.removeItem('user');
      },
      removeError(state){
        state.error = null;
      }
    },
  });

  export const { loginStart, loginSuccess, loginFailure, logout , registerStart, registerSuccess, removeError,registerFailure/* and register actions */ } =
  authSlice.actions;
export default authSlice.reducer;