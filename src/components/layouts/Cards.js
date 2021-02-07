import React from 'react'
import  { data }  from '../../assets';
import Title from './Title';
export default function Cards() {
    return (
        <div className="dark">
            <Title children="BEST RATES" />
            <div className="cardsContainer">
                { data.cards && data.cards.map(card => {
                    return (
                    <div className="card" key={card.cardName}>
                        <div className="img-cover">
                            <img src={card.cardImage} alt={card.cardName} />
                        </div>
                        <h3 className="float-text">{card.cardName}</h3>
                        <div className="card-text">
                            <h3>{card.cardName}</h3>
                            <p>Selling at</p>
                            <h1>₦ {card.cardRate}</h1>
                        </div>   
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
