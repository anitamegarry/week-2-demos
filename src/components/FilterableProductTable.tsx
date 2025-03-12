import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";


export interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface FilterableProductTableProps {
  products: Product[];
}

export default function FilterableProductTable({
  products,
}: FilterableProductTableProps) {

  const [text, setText] = useState("")
  const [stocked, setStocked] = useState(false)

  function updateText(newText: string) {
    setText(newText)
  }

  function changeStock() {
    setStocked((prevStocked) => !prevStocked)
  }

  return (
    <div>
      <SearchBar text={text} onTextChange={updateText} onStockCheck={changeStock} checkStock={stocked}/>
      <ProductTable products={products} text={text} checkStock={stocked}/>
    </div>
  );
}
