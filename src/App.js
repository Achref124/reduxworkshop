import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './Components/AddProduct';
function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/' element={<ProductList />} />
     <Route path='/AddProduct' element={<AddProduct />} />
     </Routes>
    </div>
  );
}

export default App;
