import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter, Route, Routes, Link, Switch} from 'react-router-dom';
import About from './components/About';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Users from './components/Userlist';
import Search from './components/Search';





function App() {

  const [users, setUsers] = useState([]);
  const [showClear, setshowClear] = useState(false);
  


// useEffect(() => {
//   async function fetchMyAPI(){
//     const res = await axios.get('https://api.github.com/users');
//     setUsers(res.data);
//   }
//   fetchMyAPI() 
//  },[])

async function searchName(name){
  const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
  setUsers(res.data.items)
  setshowClear(true)
}

function clearUsers(){
  setUsers([]);
  setshowClear(false);
}


  
  return (
  
    <BrowserRouter>
    <Navbar /> 
     
    <div className="container">
  
    <Routes>

    <Route exact path="/" element = {
        <>
        <Search searchName={searchName} showClear={showClear} clearUsers={clearUsers}/>
        <Users users={users}/>
        </>
    } 
    />
     
     <Route exact path="/about" element={<About/>} />
     
    </Routes>

  
    </div>
    </BrowserRouter>
  );


}

export default App;
