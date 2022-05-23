import './App.css';
import Header from './Header/Header';
import Slider from './Components/Slider';
import Nazm from './Components/Nazm';
import Nasr from './Components/Nasr';
import Maqolalar from "./Components/Maqolalar";
import Forum from "./Components/Forum"
import { Routes,Route,} from "react-router-dom";
import Main from './Components/Main';
import EachAuthor from './Components/EachAuthor';
import data from './Data';
import React, { useState } from "react";

function App() {

  const [newObj, setnewObj] = useState([...data]);

  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Main/>
      <Routes>
        <Route  path="main" element={<Main/>} />
        <Route path="nazm" element={<Nazm/>} />
        <Route path="nasr" element={<Nasr/>} />
        <Route path="maqolalar" element={<Maqolalar/>} />
        <Route path="forum" element={<Forum/>} />
        <Route  path="EachAuthor/:id"  newObj={newObj} element={<EachAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
