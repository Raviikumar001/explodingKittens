import React from "react";
import { Link } from "react-router-dom";

const Instructions: React.FC = () => {
  return (
    <div className="full-height-bg ">
      <div className="grid content-center text-xl">
        <div
          className=' bg-white
            px-4
            py-8
            shadow
            mt-[10%]
            mr-[20%]
            ml-[20%]
            sm:rounded-lg
            sm:px-10" '
        >
          {" "}
          Cat card 😼 - Defuse card 🙅‍♂️ - Shuffle card 🔀 - Exploding kitten card 💣
          <p>1. If the card drawn from the deck is a cat card, then the card is removed from the deck.</p>
          <p>2. If the card is exploding kitten (bomb) then the player loses the game.</p>
          <p>3. If the card is a defusing card, then the card is removed from the deck. This card can be used to defuse one bomb that may come in subsequent cards drawn from the deck.</p>
          <p>4.If the card is a shuffle card, then the game is restarted and the deck is filled with 5 cards again.</p>
          <br />
          Note:* If the last remaing card is shuffle card, then it is assumend You have Won the game.
          <button className="block mt-3 border-2 border-sky-300 p-1 rounded-md hover:bg-orange-300">
            <Link to="/app">
            Main Menu </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
