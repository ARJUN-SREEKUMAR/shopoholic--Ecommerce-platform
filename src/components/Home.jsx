import React, { useEffect } from 'react'
import Navbar from './Navbar'
import ho from './Home.module.css'
import { logincontext } from './global/contex'; // usecontext 
import { useContext ,useState,useRef } from 'react'; //usecontext
import Banner from './Banner';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';
import Getimg from './firebase/Getimg';
import { db ,storage,} from './firebase/Firebase';
import { collection,doc ,addDoc,setDoc,updateDoc ,query,where,getDocs} from "firebase/firestore"; 
import Titilecard from './Titilecard';
import Load from './Load';




function Home () {



  const [Looad, setLooad] = useState(false);

  useEffect(() => {
    setLooad(true);

    const timer = setTimeout(() => {
      setLooad(false);
    }, 5000);

    return () => clearTimeout(timer); 
    // Clear the timer on component unmount

  }, []);

  // const [cat,setCat] = useState("")
  // setCat("footware")
  getcategory();

  async function getcategory() {
    const proRef = collection(db, "products");
    const q = query(proRef, where("category", "==", "footware"));
  // const q = query(collection(db, "products"));
  //, where("category", "==", "footwear"))
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());

  });
  console.log(querySnapshot.docs[0].data());
  }


  // const [products, setproducts] = useState([])
  // const [loading, setloading] = useState(false)
  // const [error, seterror] = useState(false)
  // const [lastDoc, setlastDoc] = useState(null)







  const {islogin,setislogin}=useContext(logincontext) // use contex useage from app.js
  // console.log(islogin);
  const [ren, setren] = useState(null)
  const data = ['1', '2', '3','4'];
let a=islogin.displayName;

async function writeUserData(islogin) {
  await setDoc(doc(db, "users" , islogin.uid ), {
    name: islogin.displayName,
    email: islogin.email,
    
  });
}
    // useEffect(()=>{
    //   if (islogin) {
    //     writeUserData(islogin)
    //   }

    // }, [islogin])  

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
      items: 1
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

    
    <div>
      
      <div className={ho.homewrapper}>
    
      <Navbar />
   
          <div className={ho.bannerDiv}>
      
            
             <Carousel responsive={responsive1} autoPlay={true} autoPlaySpeed={3000} showDots={true} renderDotsOutside={true} infinite={true} rewindWithAnimation={true} dotListClass={ho.dotListClass} >
             <Banner titile="50% off on all orders" 
             url={Getimg ({imageName: "B (1).gif" }) } />
  
              <Banner titile="Clearence sale" url={Getimg ({imageName: "B (2).gif" }) } />
  
              <Banner titile="Offer closes soon"  url={Getimg ({imageName: "B (3).gif" }) }/>
  
              <Banner titile="Free Home Delivery on first order"
               url={Getimg ({imageName: "B(4).gif" }) }/>
  </Carousel>
  <div className={ho.renderoutside}>
      &nbsp;
  </div>
    
  
  <Carousel responsive={responsive2} autoPlay={false} partialVisible={true}  showDots={false}  infinite={false}  itemClass={ho.carouselcard} rewind={true} rewindWithAnimation={true}>
  <Titilecard/>
  {data.map((item) => 
  <Card id={item}/> 
  )}
  
  </Carousel>
  
  
  
  
  
          </div>
          
       </div>

      
    </div>      
  );
}

export default Home 