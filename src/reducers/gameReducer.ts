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
  cards: cardImages, // Initialize cards with cardImages
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

      // Update state with shuffled cards
      state.cards = shuffledCards;
    },

    flipCard(state, action: PayloadAction<number>) {
      const index = state.cards.findIndex((c) => c.id === action.payload);
      if (index !== -1) {
        state.cards[index].flip = true;
      }
    },

    removeCard(state, action: PayloadAction<number>) {
      // Find the index of the card to remove
      const index = state.cards.findIndex((c) => c.id === action.payload);
      if (index !== -1) {
        const card = state.cards[index];
        if (card.type === "cat") {
          // If the card type is 'cat', remove it from the array
          state.cards.splice(index, 1);
        } else if (card.type === "diffuse") {
          // If the card type is 'diffuse', set diffuse to true
          state.diffuse = true;
          // Then remove the diffuse card from the array
          state.cards.splice(index, 1);
        } else if (card.type === "explode" && state.diffuse) {
          // If the card type is 'explode' and diffuse is true, set diffuse to false
          state.diffuse = false;
          // Then remove the explode card from the array
          state.cards.splice(index, 1);
        }

        // Check if the last remaining card is a Shuffle card
        if (state.cards.length === 1 && state.cards[0].type === "shuffle") {
          state.won = true; // Set won state to true
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

// else if (card.type === 'shuffle') {
//     // If the card type is 'shuffle', shuffle the cards again
//     state.cards = [...cardImages];
//     const shuffledCards = [...state.cards]
//         .sort(() => Math.random() - 0.5)
//         .map((card) => ({ ...card, id: Math.random() }));
//     state.cards = shuffledCards;
//     }
