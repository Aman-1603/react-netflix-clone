import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NavBar from './component/NavBar';

const App = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
    <NavBar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/signup' element = {<Signup/>}/>
      <Route path='/profile' element = {<Profile/>}/>
    </Routes>
    </div>
  );
}

export default App;
