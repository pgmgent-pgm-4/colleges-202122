import logo from './logo.svg';

import products from './data/products.json';

import './App.css';
import { FilteredProductTable } from './components/product';

function App() {
  return (
    <div className="App">
      <FilteredProductTable products={products}/>
    </div>
  );
}

export default App;
