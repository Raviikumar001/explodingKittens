import React from "react";

type Close= {
    onClose : () => void;
}



const PopupInstructions:React.FC<Close> = ({ onClose }) => {
  
  return (
    <div id="popup" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white p-8 rounded-lg shadow-md">
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
          
        </div>
        <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
        Close

        </button>
      </div>
    </div>
  );
};

export default PopupInstructions;

