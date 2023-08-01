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
    getcategory5();
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
   
 // console.log(doc.id, " => ", doc.data().titile); works
   
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
  console.log(proRef);
  // console.log(doc.data());
  // console.log(querySnapshot.docs[0].data().titile);
  
  const productsData = querySnapshot.docs.map((doc) => doc.data());
  setProducts2(productsData);


  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data().titile);
   
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
    // console.log(doc.id, " => ", doc.data().titile);
   
  });
  // console.log(" => ", doc.data());
  // console.log(querySnapshot.docs[0]);
  }

  async function getcategory4() {
    const proRef = collection(db, "products");
    const q = query(proRef, where("category", "==", "personal care"));
 
  const querySnapshot = await getDocs(q);
  
  
  const productsData = querySnapshot.docs.map((doc) => doc.data());
  setProducts4(productsData);


  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data().titile);
   
  });
  // console.log(" => ", doc.data());
  // console.log(querySnapshot.docs[0]);

  }
  async function getcategory5() {
    const proRef = collection(db, "products");
    const q = query(proRef, where("category", "==", "dress"));
  // const q = query(collection(db, "products"));
  //, where("category", "==", "footwear"))
  const querySnapshot = await getDocs(q);
  // console.log(q);
  // console.log(doc.data());
  // console.log(querySnapshot.docs[0].data().titile);
  
  const productsData = querySnapshot.docs.map((doc) => doc.data());
  setProducts5(productsData);


  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data().titile);
   
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
             {/* <Banner titile="50% off on all orders" 
             url={Getimg ({imageName: "B (1).gif" }) } /> */}
              <Banner titile="Free Home Delivery on first order"
               url="https://github.com/ARJUN-SREEKUMAR/welcome-project/blob/main/B(4).gif?raw=true"/>
  
              <Banner titile="Clearence sale" url="https://github.com/ARJUN-SREEKUMAR/welcome-project/blob/main/B%20(1).gif?raw=true" />
  
              <Banner titile="Offer closes soon"  url="https://github.com/ARJUN-SREEKUMAR/welcome-project/blob/main/B%20(2).gif?raw=true"/>
  
              <Banner titile="Free Home Delivery on first order"
               url="https://github.com/ARJUN-SREEKUMAR/welcome-project/blob/main/B(4).gif?raw=true"/>
  </Carousel>
  <div className={ho.renderoutside}>
      &nbsp;
  </div>
    
  
  <Carousel responsive={responsive2} autoPlay={false} partialVisible={true}  showDots={false}  infinite={false}  itemClass={ho.carouselcard} rewind={false} rewindWithAnimation={true} draggable={true}>
  <Titilecard img="https://firebasestorage.googleapis.com/v0/b/shopoholic2-e4682.appspot.com/o/category_images%2Ffootwear.jpg?alt=media&token=f2a46183-863d-4626-8c9e-e721d0b9ada6"/>
  {products.map((item) => 
  <Card item={item}/> 
  )}
  
  </Carousel>
  <Carousel responsive={responsive2} autoPlay={false} partialVisible={true}  showDots={false}  infinite={false}  itemClass={ho.carouselcard} rewind={false} rewindWithAnimation={true}>
  <Titilecard img="https://firebasestorage.googleapis.com/v0/b/shopoholic2-e4682.appspot.com/o/category_images%2Ffootwear%20(1).jpeg?alt=media&token=677ea0ae-0434-44a2-b147-20dbfd2eb598"/>
  {products2.map((item) => 
  <Card item={item}/> 
  )}
  
  </Carousel>
  <Carousel responsive={responsive2} autoPlay={false} partialVisible={true}  showDots={false}  infinite={false}  itemClass={ho.carouselcard} rewind={false} rewindWithAnimation={true}>
  <Titilecard img="https://firebasestorage.googleapis.com/v0/b/shopoholic2-e4682.appspot.com/o/category_images%2Felectronics%20(1).png?alt=media&token=0c2dae9d-2b7a-4df0-97d6-b1a497249dd4"/>
  {products3.map((item) => 
  <Card item={item}/> 
  )}
  
  </Carousel>
  <Carousel responsive={responsive2} autoPlay={false} partialVisible={true}  showDots={false}  infinite={false}  itemClass={ho.carouselcard} rewind={false} rewindWithAnimation={true}>
  <Titilecard img="https://firebasestorage.googleapis.com/v0/b/shopoholic2-e4682.appspot.com/o/category_images%2Fpersonal%20care%20(1).jpeg?alt=media&token=60f9de72-cb21-475e-a03f-79592974cd02"/>
  {products4.map((item) => 
  <Card item={item}/> 
  )}
  
  </Carousel>
  <Carousel responsive={responsive2} autoPlay={false} partialVisible={true}  showDots={false}  infinite={false}  itemClass={ho.carouselcard} rewind={false} rewindWithAnimation={true}>
  <Titilecard img="https://firebasestorage.googleapis.com/v0/b/shopoholic2-e4682.appspot.com/o/category_images%2Fdress%20(1).jpeg?alt=media&token=6471e8fb-b98c-446e-a492-82ed6d3548a9"/>
  {products5.map((item) => 
  <Card item={item}/> 
  )}
  
  </Carousel>

 
  
  
  
  
  
          </div>
          
       </div>

      
    </div>      
  );
}

export default Home 