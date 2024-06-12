import './App.css';
import Home from './components/Home';
import Head from './components/Head';
import { Route, Routes } from 'react-router-dom';
import Package from './components/Package';
import Wishlist from './components/Wishlist';
import Footer from './components/Footer';


function App() {
 
  return (
    <div className="App">
      <Head/>      
    
      {/* routes */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/package' element={<Package/>}/>

        <Route path="/package/wishlist" element={<Wishlist/>}/>

      </Routes>

      <Footer/>
</div>
  );
}

export default App;