import './App.scss'
import { Routes ,Route } from 'react-router-dom';
import Home from './components/Route/home.component';
import Navbar from './components/Route/Navbar.component';

const App=()=> {
  
  
  const Shop= ()=>{
    return <h1>Im shop</h1>
  }
  return (
  
    <Routes>
      <Route path='/' element={<Navbar></Navbar>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>} />
      </Route>

    </Routes>

  );
}

export default App;
