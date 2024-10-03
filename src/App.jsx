
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import SinglePage from './pages/SinglePage';
import PageNotfound from './pages/PageNotfound';
import Navbar from './componants/Navbar';
import { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
const [CartArr, setCartArr] = useState([]);
console.log(CartArr)


let getCartItem=(ans)=>{
  console.log(ans)
  let existsItem=CartArr.find((ele)=>ele.id===ans.id)
  console.log(existsItem)
  if(!existsItem){
    setCartArr([...CartArr,ans])
    toast.success("item added seccessfully",{position:'top-center'});
  }
  else{
    toast.error("item already added",{position:'top-center'});
  }
}

  return (
    <div className="App">
      <BrowserRouter>
    <div className='div4'>
    <Navbar CartArr={CartArr}/>
    </div>
      <Routes>
        <Route path='/'element={<Home getCartItem={getCartItem}/>}/>
        <Route path='/cart' element={<Cart CartArr= {CartArr} setCartArr={setCartArr}/>}/>
        <Route path='/single' element={<SinglePage/>}/>
        
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<PageNotfound/>}/>
      </Routes>
      <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
