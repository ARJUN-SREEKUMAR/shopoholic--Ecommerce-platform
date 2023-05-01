import React, { useEffect } from 'react'
import Navbar from './Navbar'
import ho from './Home.module.css'
import { logincontext } from './global/contex'; // usecontext 
import { useContext ,useState,useRef } from 'react'; //usecontext
import Banner from './Banner';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';

function Home () {
  const {islogin,setislogin}=useContext(logincontext) // use contex useage from app.js
  console.log(islogin);
  const [ren, setren] = useState(null)
let a=islogin.displayName;
    useEffect(()=>{
      if (islogin && islogin.displayName) {
        setren(islogin.displayName);
      }

    }, [islogin])  

  //// React multi carousel
  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      slidesToSlide: 3 ,
      partialVisibilityGutter: 40 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 1 ,
      partialVisibilityGutter: 20 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 20 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div className={ho.homewrapper}>
    
    <Navbar />
        <div className={ho.bannerDiv}>
      
            {/* <p className={ho.welcome}>Welcome {
            ren?ren:"Guest User"}
           { console.log(ren)
            }</p>
            <p className={ho.homeIntro}> Home page Coming soon!!!</p> */}
          
           <Carousel responsive={responsive1} autoPlay={true} autoPlaySpeed={3000} showDots={true} renderDotsOutside={true} infinite={true} rewindWithAnimation={true} dotListClass={ho.dotListClass}>
           <Banner titile="50% off on all orders" />
            <Banner titile="Clearence sale"/>
            <Banner titile="Offer closes soon" />
            <Banner titile="Free Home Delivery on first order"/>
</Carousel>;
<div className={ho.renderoutside}>
    &nbsp;
</div>

<Carousel responsive={responsive2} autoPlay={false} partialVisible={true}  showDots={false}  infinite={false}  itemClass={ho.carouselcard} rewind={true} rewindWithAnimation={true}>

<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</Carousel>
        </div>
        
     </div>
  )
}

export default Home 