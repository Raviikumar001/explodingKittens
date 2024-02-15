
export interface AuthState {
    user: User | null; // Replace 'User' with your actual user data type
    isLoading: boolean;
    error: string | null;
    
  }
  
 export type User ={
    // Your user properties (e.g., id, username, email etc.)
    Id: string,
    Name: string,
    Username: string,
    TotalPoints: Number,
    TotalGamesLost: Number
  } 


  export type RootState = {
    auth: AuthState
  }