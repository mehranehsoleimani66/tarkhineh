
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/header/Header';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
     <Route index element={<Home/>} />
     <Route path='./profile' element={<h4>profile</h4>}/>
     <Route path='./*' element={<h4>not found</h4>}/>
    
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
