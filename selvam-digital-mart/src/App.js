import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Homepage from './components/homepage/homepage';
import ProductHolder from './components/productHolder/productHolder';
import Description from './components/product/description/description';
import {Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
       < Header/>
      < Homepage />
      <Routes>
        <Route path='items/:category' element={<ProductHolder /> } />
        <Route path='description/:category/:id'element={<Description />} />
      </Routes>
       
    </div>
  );
}

export default App;
