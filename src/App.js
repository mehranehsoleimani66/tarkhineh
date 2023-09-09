import React from 'react';
import './styles/App.css';
import Footer from './component/Footer/Footer';
import Header from './component/header/Header';
//import Slider from './component/slider/Slider';
import Home from './pages/home/Home';
import {Route, Routes} from 'react-router-dom';
import Shop from './pages/shop/Shop';
import { createContext,useEffect,useState } from 'react';
import CardPage from './pages/cart/CardPage';
import CardList from './pages/cart/CardList';
import Login from './pages/login/Login';
//import Profile from './pages/Profile';

export const cartContext = createContext()
export const userContext = createContext()
function App() {

  const [cardFood,setCardFood]=useState([])
  const [user,setUser]=useState({})

  //test

  useEffect(()=>{
  console.log (user,'user dideh shod')
},[])

useEffect(()=>{
  
  if (user?.token){
   localStorage.setItem('user',JSON.stringify(user))
  }
},[user])




useEffect(()=>{
  const prevUser = JSON.parse( localStorage.getItem('user'))
  if (prevUser){
    setUser(prevUser)
  }
  else {
    setUser([])
  }
  
}
 ,[])

  // check the  localstorage at the first render and  set the first food
  useEffect(()=>{
    const prevCartArr = JSON.parse( localStorage.getItem('cart'))
    if (prevCartArr){
      setCardFood(prevCartArr)
    }
    else {
      setCardFood([])
    }
    
  }
   ,[])

   // set the second or more foods
   useEffect(()=>{
     if (cardFood!==undefined){
      localStorage.setItem('cart',JSON.stringify(cardFood))
     }
   },[cardFood])
 
    const buyFoodHandler=(item)=>{
    setCardFood(item)

   }
   const setUserHandler=(item)=>{
    setUser(item)
    

   }

  return (
    <div className="App">
<React.StrictMode>
  <cartContext.Provider value={{cardFood,buyFoodHandler}}>
  <userContext.Provider value={{user,setUserHandler}}>
      <Header/>
      
      <Routes>
     <Route index element={<Home/>} />
     <Route path='/Shop' element={<Shop />}/>
     <Route path='/CardPage' element={<CardPage />}/>
     <Route path='/Cardlist' element={<CardList />}/>
     <Route path='/login' element={<Login />}/>
     {/* <Route path='/profile' element={<Profile />}/> */}
      </Routes>
      <Footer/>
  </userContext.Provider>
  </cartContext.Provider>
      </React.StrictMode>
      
    </div>
  );
}

export default App;
