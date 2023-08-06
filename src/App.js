import React from 'react';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/header/Header';
import Slider from './component/slider/Slider';
import Home from './pages/home/Home';
import {Route, Routes} from 'react-router-dom';
import Shop from './pages/shop/Shop';



function App() {
  return (
    <div className="App">
<React.StrictMode>
      <Header/>
      <Slider/>
      <Routes>
      
     <Route index element={<Home/>} />
     <Route path='/Shop' element={<Shop/>}/>
     
    
      </Routes>
      <Footer/>
      </React.StrictMode>
      
    </div>
  );
}

export default App;
