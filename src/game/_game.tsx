import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from "../components/game/_card";
import { RootState } from "../Types";
import { shuffleCards, flipCard, removeCard } from "../reducers/gameReducer";
import Popup from "../components/game/_GameOverPopup";
import WonPopup from "../components/game/_GameWonPopup";

interface CardType {
    src: string;
    id?: number;
    type: string;
    flip: boolean;
  }


const Game: React.FC = () => {
    const dispatch = useDispatch();
    const cards = useSelector((state: RootState) => state.game.cards); // Accessing cards from Redux state
    const diffuse = useSelector((state: RootState) => state.game.diffuse)
    const won = useSelector((state: RootState) => state.game.won)

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  

    const handleChoice = (card: CardType) => {
        console.log(card)
        if (card.id !== undefined) {
            dispatch(flipCard(card.id));
        } // Dispatching action to flip the card

        setTimeout(() => {
            if (card.type === 'cat') {
                if (card.id !== undefined)
                dispatch(removeCard(card.id)); // If it's a cat, remove the card
            } else if (card.type === 'diffuse') {
                if (card.id !== undefined)
                dispatch(removeCard(card.id)); // If it's a diffuse, remove the card
            } else if (card.type === 'shuffle') {
                dispatch(shuffleCards()); // If it's a shuffle, shuffle the cards again
            } else if (card.type === 'explode') {
                if (diffuse) {
                    if (card.id !== undefined)
                    dispatch(removeCard(card.id));
                         // If it's an explode and diffuse is true, remove the card
                }else {
                    openPopup()
                }
            }
        }, 800);
    };

    useEffect(()=> {
        dispatch(shuffleCards())
    }, [])
  
    console.log(diffuse, 'diffuse')
    console.log(cards)
    return (
        <div className="game-bg flex flex-col gap-5 bg-orange-900" >
            <h1 className="text-center text-2xl pt-10 text-white">Exploding Kittens</h1>
            <button onClick={() => dispatch(shuffleCards())} className="">New Game</button>
            <div className="card-grid">
                {cards.map((card) => (
                    <div key={card.id}>
                        <CardComponent card={card} handleChoice={() => handleChoice(card)} />
                    </div>
                ))}
            </div>

            {isPopupOpen && <Popup onClose={closePopup} />}
            {won && <WonPopup onClose={closePopup} />}
        </div>
    );
};

export default Game;
