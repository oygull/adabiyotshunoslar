import './App.css';
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

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route  path="main" element={<Main/>} />
        <Route path="nazm" element={<Nazm/>} />
        <Route path="nasr" element={<Nasr/>} />
        <Route path="maqolalar" element={<Maqolalar/>} />
        <Route path="forum" element={<Forum/>} />
        <Route  path="/eachauthor/:id"   element={<EachAuthor />} />
        <Route  path="signin" element={<SignIn/>} />
        <Route  path="signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
