
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState , User} from "../Types";

export const initialState: AuthState ={
    user: null,
    isLoading: false,
    error: null
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
      registerSuccess(state,action: PayloadAction<User>) {
        state.isLoading = false;
        state.user = action.payload
        localStorage.setItem('user', JSON.stringify(action.payload)); 
      },

      loginSuccess(state, action: PayloadAction<User>) {
        state.isLoading = false;
        state.user = action.payload;

        localStorage.setItem('user', JSON.stringify(action.payload)); 
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