import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Rent from "./Routes/Rent.js";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route path="" element={<Rent/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
