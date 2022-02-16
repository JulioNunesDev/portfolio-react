import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState,useEffect} from 'react';
import './App.css';
import NaveBar from './components/NavebBar';
import Home from './components/Home/Home'
import Projetos from './components/Home/Projetos';

const api = 'http://localhost:5000/categories'

function App() {



  return (
    <div className="App">
     
     <BrowserRouter>
     <NaveBar/>
     <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route path='/projetos' element={<Projetos  />}/>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
