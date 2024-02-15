
import React from 'react'

interface CardType {
    src: string;
    id: number;
    type: string;
  }


interface CardProps {
    card: {
      src: string;
      id: number;
      type: string;
    },
    hanldeChoice: (card: CardType) => void
  }
const CardComponent:React.FC<CardProps> = ({card,hanldeChoice}) => {

    const handleClick = ()=> {
        hanldeChoice(card)
        }

  return (
    <div className="card" >
    <div>
        <img className="front" height={400} width={400} src={card.src} alt="card fornt" />
        <img className="back" onClick={handleClick} src="/cat.jpeg" alt="card back" />
    </div>

</div>
  )
}

export default CardComponent