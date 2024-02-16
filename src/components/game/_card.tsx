
import React from 'react'

interface CardType {
    src: string;
    id?: number;
    type: string;
    flip: boolean
  }


interface CardProps {
    card:CardType
    handleChoice: (card: CardType) => void
  }
const CardComponent:React.FC<CardProps> = ({card,handleChoice}) => {

    const handleClick = ()=> {
        handleChoice(card)
        }

  return (
    <div className="card" >
    <div className={card.flip ?"flipped": ""}>
        <img className="front" height={350} width={350} src={card.src} alt="card fornt" />
        <img className="back" onClick={handleClick} height={400} width={400}  src="/cat.jpeg" alt="card back" />
    </div>

</div>
  )
}

export default CardComponent