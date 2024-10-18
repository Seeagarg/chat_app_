import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Auth from './Auth/Auth';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Auth><Home/></Auth>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
