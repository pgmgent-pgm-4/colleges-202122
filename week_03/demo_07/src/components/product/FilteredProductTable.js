import { useEffect, useState } from 'react';

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilteredProductTable = ({products}) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let p = products.filter(p => p.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1 || p.category.toLowerCase().indexOf(filterText.toLowerCase()) > -1);

    if (inStockOnly) {
      p = p.filter(p => p.stocked === true);
    }

    setFilteredProducts(p);
  }, [filterText, inStockOnly]);

  const handleOnFilterTextChange = (v) => {
    setFilterText(v);
  };

  const handleOnInStockChange = (v) => {
    setInStockOnly(v);
  };

  return (
    <>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={handleOnFilterTextChange} onInStockChange={handleOnInStockChange}/>
      <ProductTable products={filteredProducts} />
      <ProductTable products={filteredProducts} />
    </>
  )
};
export default FilteredProductTable;