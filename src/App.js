import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Variables from './Components/Variables';

function App() {
  return (
   <BrowserRouter>
   <Header></Header>
   <Routes>
    <Route path='/variable' element={<Variables></Variables>} ></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
