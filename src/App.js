import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Variables from './Components/Variables';
import Dyanamic_Class from './Components/Dyanamic_Class';
import Api from './API-Practice/Api';
import User_Info from './API-Practice/User_Info';

function App() {
  return (
   <BrowserRouter>
   <Header></Header>
   <Routes>
    <Route path='/variable' element={<Variables></Variables>} ></Route>
    <Route path='/Api' element={<Api></Api>}></Route>
    <Route path='/UserT' element={<User_Info></User_Info>}></Route>
    <Route path='/dyanamic_class' element={<Dyanamic_Class></Dyanamic_Class>} ></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
