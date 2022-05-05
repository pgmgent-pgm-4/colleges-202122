import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

import { Table } from 'reactstrap';

import styles from  './ProductTable.module.css';

const ProductTable = ({products}) => {
  const rows = [];
  let lastCategory = null;
  products.forEach((product, index) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} category={product.category} />
      );
    };
    rows.push(
      <ProductRow key={index} product={product} />
    );
    lastCategory = product.category;
  });
  return (
    <Table striped className={styles.tbl_wicked}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
};
export default ProductTable;