import React from 'react'
import card from './Card.module.css'
import RatingStars from 'react-rating-stars-component';
function Card() {
  return (
    <div className={card.wrapper}>
         <div className={card.dp}>
            <img className={card.displaypicture} src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png"/>  
            <hr></hr>
           
            </div>
            <div className={card.titile}>
              convers 
            </div>
            <div className={card.discription}>
              Men's Chuck 70 Organic Canvas High Top Sneakers
            </div>
            <div className={card.rating}>
                    <RatingStars
                          count={5}
                          edit={false}
                          size={22}
                          value={3.5}
                          isHalf={true}
                          activeColor="#DAA520"

                    />
            </div>
            <div className={card.pricing}>
              ₹<span className={card.amount}>2,999</span>
            </div>
    </div>
  )
}

export default Card