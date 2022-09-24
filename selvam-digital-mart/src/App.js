import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Homepage from './components/homepage/homepage';
import Product from './components/product/product';


function App() {
  return (
    <div className="App">
      < Header/>
      < Homepage />
      <Product />
    </div>
  );
}

export default App;
