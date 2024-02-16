import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardType {
  src: string;
  id?: number;
  type: string;
  flip: boolean;
}

const cardImages: CardType[] = [
  { src: "/cat2.png", type: "cat", flip: false },
  { src: "/cat3.jpeg", type: "cat", flip: false },
  { src: "/diffuse.png", type: "diffuse", flip: false },
  { src: "/exploding.jpeg", type: "explode", flip: false },
  { src: "/shuffle.png", type: "shuffle", flip: false },
];

export interface GameState {
  cards: CardType[];
  diffuse: boolean;
  explode: boolean;
  won: boolean;
}

const initialState: GameState = {
  cards: cardImages, 
  diffuse: false,
  explode: false,
  won: false,
};
const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    shuffleCards(state) {
      state.cards = [...cardImages];
      state.diffuse = false;
      // Shuffle the cards
      const shuffledCards = [...state.cards].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));

      
      state.cards = shuffledCards;
    },

    flipCard(state, action: PayloadAction<number>) {
      const index = state.cards.findIndex((c) => c.id === action.payload);
      if (index !== -1) {
        state.cards[index].flip = true;
      }
    },

    removeCard(state, action: PayloadAction<number>) {

      const index = state.cards.findIndex((c) => c.id === action.payload);
      if (index !== -1) {
        const card = state.cards[index];
        if (card.type === "cat") {
        
          state.cards.splice(index, 1);
        } else if (card.type === "diffuse") {
      
          state.diffuse = true;
   
          state.cards.splice(index, 1);
        } else if (card.type === "explode" && state.diffuse) {
       
          state.diffuse = false;
        
          state.cards.splice(index, 1);
        }

 
        if (state.cards.length === 1 && state.cards[0].type === "shuffle") {
          state.won = true; 
        }
      }
    },
    resetGame(state){
        state.diffuse=false
        state.explode =false
        state.won = false
    }


  },
});

export const { shuffleCards, flipCard, removeCard , resetGame} = gameSlice.actions;
export default gameSlice.reducer;

