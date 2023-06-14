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


  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [products3, setProducts3] = useState([]);
  const [products4, setProducts4] = useState([]);
  const [products5, setProducts5] = useState([]);
  const [products6, setProducts6] = useState([]);
  const [Looad, setLooad] = useState(false);

  // useEffect(() => {
  //   setLooad(true);

  //   const timer = setTimeout(() => {
  //     setLooad(false);
  //   }, 5000);

  //   return () => clearTimeout(timer); 
  //   // Clear the timer on component unmount

  // }, []);

  // const [cat,setCat] = useState("")
  // setCat("footware")

  
  useEffect(() => {
    getcategory1();
    getcategory2();
    getcategory3();
    getcategory4();
  }, []);




  async function getcategory1() {
    const proRef = collection(db, "products");
    const q = query(proRef, where("category", "==", "mobile"));
  // const q = query(collection(db, "products"));
  //, where("category", "==", "footwear"))
  const querySnapshot = await getDocs(q);
  // console.log(q);
  // console.log(doc.data());
  // console.log(querySnapshot.docs[0].data().titile);
  
  const productsData = querySnapshot.docs.map((doc) => doc.data());
  setProducts(productsData);


  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data().titile);
   
  });
  // console.log(" => ", doc.data());
  // console.log(querySnapshot.docs[0]);
  }

  async function getcategory2() {
    const proRef = collection(db, "products");
    const q = query(proRef, where("category", "==", "footwear"));
  // const q = query(collection(db, "products"));
  //, where("category", "==", "footwear"))
  const querySnapshot = await getDocs(q);
  // console.log(q);
  // console.log(doc.data());
  // console.log(querySnapshot.docs[0].data().titile);
  
  const productsData = querySnapshot.docs.map((doc) => doc.data());
  setProducts2(productsData);


  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data().titile);
   
  });
  // console.log(" => ", doc.data());
  // console.log(querySnapshot.docs[0]);
  }

  async function getcategory3() {
    const proRef = collection(db, "products");
    const q = query(proRef, where("category", "==", "electronics"));
  // const q = query(collection(db, "products"));
  //, where("category", "==", "footwear"))
  const querySnapshot = await getDocs(q);
  // console.log(q);
  // console.log(doc.data());
  // console.log(querySnapshot.docs[0].data().titile);
  
  const productsData = querySnapshot.docs.map((doc) => doc.data());
  setProducts3(productsData);


  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data().titile);
   
  });
  // console.log(" => ", doc.data());
  // console.log(querySnapshot.docs[0]);
  }

  async function getcategory4() {
    const proRef = collection(db, "products");
    const q = query(proRef, where("category", "==", "personal care"));
  // const q = query(collection(db, "products"));
  //, where("category", "==", "footwear"))
  const querySnapshot = await getDocs(q);
  // console.log(q);
  // console.log(doc.data());
  // console.log(querySnapshot.docs[0].data().titile);
  
  const productsData = querySnapshot.docs.map((doc) => doc.data());
  setProducts4(productsData);


  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data().titile);
   
  });
  // console.log(" => ", doc.data());
  // console.log(querySnapshot.docs[0]);
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
      
            
             <Carousel responsive={responsive1} autoPlay={false} autoPlaySpeed={3000} showDots={true} renderDotsOutside={true} infinite={true} rewindWithAnimation={true} dotListClass={ho.dotListClass} >
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
    
  
  <Carousel responsive={responsive2} autoPlay={true} partialVisible={true}  showDots={false}  infinite={false}  itemClass={ho.carouselcard} rewind={false} rewindWithAnimation={true} draggable={true}>
  <Titilecard/>
  {products.map((item) => 
  <Card item={item}/> 
  )}
  
  </Carousel>
  <Carousel responsive={responsive2} autoPlay={true} partialVisible={true}  showDots={false}  infinite={false}  itemClass={ho.carouselcard} rewind={false} rewindWithAnimation={true}>
  <Titilecard/>
  {products2.map((item) => 
  <Card item={item}/> 
  )}
  
  </Carousel>
  <Carousel responsive={responsive2} autoPlay={true} partialVisible={true}  showDots={false}  infinite={false}  itemClass={ho.carouselcard} rewind={false} rewindWithAnimation={true}>
  <Titilecard/>
  {products3.map((item) => 
  <Card item={item}/> 
  )}
  
  </Carousel>
  <Carousel responsive={responsive2} autoPlay={true} partialVisible={true}  showDots={false}  infinite={false}  itemClass={ho.carouselcard} rewind={false} rewindWithAnimation={true}>
  <Titilecard/>
  {products4.map((item) => 
  <Card item={item}/> 
  )}
  
  </Carousel>


 
  
  
  
  
  
          </div>
          
       </div>

      
    </div>      
  );
}

export default Home 