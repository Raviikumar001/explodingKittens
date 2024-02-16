import { GameState } from "./reducers/gameReducer";

export interface AuthState {
    user: User | null; 
    isLoading: boolean;
    error: string | null;
    token: string | null
  }
  
 export type User ={
    
    ID: string,
    name: string,
    username: string,
    total_points: Number,
    total_games_lost: Number
  } 


  export type RootState = {
    auth: AuthState;
    game: GameState; 
}