import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';
import Slider from './Component/Slider';
import ProductDetails from './Component/ProductDetails';
import About from './Component/About';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>

            <Slider />
            <ProductList />
          </>
        }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
