import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
 import { Register } from "./pages/Register";
 import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles.scss'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
