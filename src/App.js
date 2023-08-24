import React from 'react';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/header/Header';
import Slider from './component/slider/Slider';
import Home from './pages/home/Home';
import {Route, Routes} from 'react-router-dom';
import Shop from './pages/shop/Shop';
import { createContext,useEffect,useState } from 'react';



export const cartContext = createContext()
function App() {
  const [cardFood,setCardFood]=useState([])
  // check the  localstorage at the first render and  set the first food
  useEffect(()=>{
    const prevCartArr = JSON.parse( localStorage.getItem('cart'))
    if (prevCartArr){
      setCardFood(prevCartArr)
    }
    else{
      setCardFood([])
    }
   }
   ,[])
   // set the second or more foods
   useEffect(()=>{
     if (cardFood!==undefined && cardFood.length>0){
      localStorage.setItem('cart',JSON.stringify(cardFood))
     }
   },[cardFood])
 
    const buyFoodHandler=(item)=>{
    setCardFood(item)

   }

  return (
    <div className="App">
<React.StrictMode>
  <cartContext.Provider value={{cardFood,buyFoodHandler}}>
      <Header/>
      <Slider/>
      <Routes>
     <Route index element={<Home/>} />
     <Route path='/Shop' element={<Shop />}/>
     
    
      </Routes>
      <Footer/>
  </cartContext.Provider>
      </React.StrictMode>
      
    </div>
  );
}

export default App;
