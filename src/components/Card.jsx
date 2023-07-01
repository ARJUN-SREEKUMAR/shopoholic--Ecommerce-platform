import React from 'react'
import card from './Card.module.css'
import Productview from './Productview';
import RatingStars from 'react-rating-stars-component';
import Getimg from './firebase/Getimg';
import { useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import { productcontext , logincontext } from './global/contex';
import { useContext } from 'react';



function Card(props) {
  
  let navigate = useNavigate();
  // const {islogin,setislogin}=useContext(logincontext.itemm)
  const prooo=props.item;
const [expopro, setexpopro] = useState(prooo);

 
  
  const handleClick = () => {
    // alert('Click Happened '+props.item.titile);
    //navigate to product page with props.item.id
    // setProduct(prooo);
    
    navigate('/product', { state: { obj1: prooo } });


  }

  const [content, setContent] = useState(props.item.desc);

  const limitWords = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  const limitedContent = limitWords(content, 10); // Limit to 5 words

  
  return (
    <div className={card.wrapper}
    onClick={handleClick} >
         <div className={card.dp}>
       
               <img className={card.displaypicture} src={props.item.imageURL1 } alt='Unable to load  image plese report to shopoholic ' />  
               
            {/* <hr></hr> */}
           
            </div>

            <div className={card.titile}>
              {limitWords(props.item.titile, 3)}
              </div>
            <div className={card.discription}>
              {limitedContent}
            </div>
            <div className={card.rating}>
                    <RatingStars
                          count={5}
                          edit={false}
                          size={22}
                          value={props.item.rating}
                          isHalf={true}
                          activeColor="#DAA520"

                    />
            </div>
            <div className={card.pricing}>
              ₹<span className={card.amount}>{props.item.price}</span>
            </div>
            

    </div>
  )

}

export default Card