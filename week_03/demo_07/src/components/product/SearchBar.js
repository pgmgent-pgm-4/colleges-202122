import { useCallback } from "react";

import { Form, FormGroup, Input, Label } from 'reactstrap';

const SearchBar = ({filterText, isInStockOnly, onFilterTextChange, onInStockChange}) => {

  const handleFilterTextOnChange = useCallback((ev) => {
    if(typeof onFilterTextChange === 'function') {
      onFilterTextChange(ev.target.value);
    }
  }, [onFilterTextChange]);

  const handleInStockOnChange = useCallback((ev) => {
    if(typeof onInStockChange === 'function') {
      onInStockChange(ev.target.checked);
    }
  }, [onInStockChange]);

  return (
    <Form>
      <FormGroup>
        <Label htmlFor="txtFilterText">Search</Label>
        <Input type="text" placeholder="Search..." value={filterText} onChange={handleFilterTextOnChange}/>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="chkInStockOnly">Only show products in stock</Label>
        <Input type="checkbox" checked={isInStockOnly} onChange={handleInStockOnChange}/>
      </FormGroup>
    </Form>
  )
};

export default SearchBar;