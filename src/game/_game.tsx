import { useEffect, useState } from "react"
import CardComponent from "../components/game/_card";

const cardImages = [
    { "src": "/cat2.png", type: 'cat'},
    { "src": "/cat3.jpeg" , type:'cat'},
    { "src": "/diffuse.png", type: 'diffuse'},
    { "src": "/exploding.jpeg", type: 'explode'},
    { "src": "/shuffle.png" , type: 'shuffle'}, 
]


interface CardType {
    src: string;
    id: number;
    type: string;
  }


const Game = () => {
    const [cards, setCards] = useState<CardType[]>([]); 

    const shuffleCards = ()=> {
        const shuffleCards = [...cardImages]
        .sort( ()=> Math.random() - 0.5)
        .map( (card)=> ({ ...card, id: Math.random()}))

        setCards(shuffleCards)
    }

    console.log(cards);

    const handleChoice = (card: CardType)=> {
        console.log(card);
    }
    useEffect(()=> {
        shuffleCards()
    },[])
    
  return (
    <div  className="game-bg flex flex-col gap-5">

        <h1 className="text-center text-2xl pt-10 text-white">Exploding Kittens</h1>
        <button onClick={shuffleCards} className="text-center" >New Game</button>

        <div className="card-grid">
        {cards.map( (card)=>  (
            <div key={card.id}>
                <CardComponent card={card}
                    hanldeChoice={handleChoice}
                />

            </div>
            
            ))}
        </div>

    </div>
  )
}

export default Game