
import './App.css';
import Header from './component/header/header';
import {Route, Routes} from 'react-router-dom';
import Footer from './component/footer/footer';
function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
     <Route index element={<h4>home</h4>} />
     <Route path='./profile' element={<h4>profile</h4>}/>
     <Route path='./*' element={<h4>not found</h4>}/>
    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
