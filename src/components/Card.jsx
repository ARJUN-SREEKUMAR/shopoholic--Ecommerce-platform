import React from 'react'
import card from './Card.module.css'
import RatingStars from 'react-rating-stars-component';
import Getimg from './firebase/Getimg';
function Card(props) {
  const handleClick = () => {
    alert('Click Happened '+props.id);
  }
  return (
    <div className={card.wrapper}
    onClick={handleClick} >
         <div className={card.dp}>
       
               <img className={card.displaypicture} src={Getimg ({imageName: "sapro.jpeg" }) }  />  
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
                          value={2.5}
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