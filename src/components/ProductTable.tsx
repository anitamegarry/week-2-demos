import { Product } from "./FilterableProductTable.tsx";
import ProductCategoryRow from "./ProductCategoryRow.tsx";

interface ProductTableProps {
  products: Product[];
  text: string;
  checkStock: boolean
}

export default function ProductTable({ products, text, checkStock }: ProductTableProps) {
  // separate out the list based on the data so I've got fruits and vegetables

  function filterByName() {
    return products.filter((product) => product.name.toLowerCase().includes(text.toLowerCase()))
  }

  function filterByStockStatus() {
    return products.filter((product) => product.stocked)
  }

  if (text) {
    products = filterByName()
  }

  if (checkStock) {
    products = filterByStockStatus()
  }


  function groupByProductType({ products }: { products: Product[] }) {
    return Object.groupBy(products, ({ category }) => category);
  }
  const productCategories = groupByProductType({ products });



  return (
    <>
      <h1>Product table here...</h1>
      {
      
      Object.keys(productCategories).map((category) => {
        return (
          <ProductCategoryRow
            category={category}
            products={productCategories[category]}
          />
        );
      })}
    </>
  );
}
