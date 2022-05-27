import './App.css';
import React, { useState } from 'react'
import Header from './Header/Header';
import Nazm from './Components/Nazm';
import Nasr from './Components/Nasr';
import Maqolalar from "./Components/Maqolalar";
import Forum from "./Components/Forum"
import { Routes,Route,} from "react-router-dom";
import Main from './Components/Main';
import EachAuthor from './Components/EachAuthor';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import EachBook from './Components/EachBook';
import Profile from './Components/Profile';
import Setting from './Components/Setting';


function App() {

  const[userObj,setUserObj]=useState({})
  const[newArr, setNewArr]= useState([])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route  path="/" element={<Main/>} />
        <Route path="nazm" element={<Nazm/>} />
        <Route path="nasr" element={<Nasr/>} />
        <Route path="maqolalar" element={<Maqolalar/>} />
        <Route path="forum" element={<Forum/>} />
        <Route  path="/eachauthor/:id"   element={<EachAuthor />} />
        <Route  path="signin" element={<SignIn/>} />
        <Route  path="signup" element={<SignUp userObj={userObj} setUserObj={setUserObj}/>} />
        <Route  path="/eachbook/:id"   element={<EachBook  setNewArr={setNewArr}/>} />
        <Route  path="profile"   element={<Profile userObj={userObj} newArr={newArr} />} />
        <Route  path="setting"   element={<Setting userObj={userObj} setUserObj={setUserObj}/>} />
      </Routes>
    </div>
  );
}

export default App;
