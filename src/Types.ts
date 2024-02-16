import { GameState } from "./reducers/gameReducer";

export interface AuthState {
    user: User | null; // Replace 'User' with your actual user data type
    isLoading: boolean;
    error: string | null;
    token: string | null
  }
  
 export type User ={
    // Your user properties (e.g., id, username, email etc.)
    ID: string,
    name: string,
    username: string,
    total_points: Number,
    total_games_lost: Number
  } 


  export type RootState = {
    auth: AuthState;
    game: GameState; // Include the game slice in RootState
}