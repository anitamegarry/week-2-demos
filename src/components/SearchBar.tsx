
interface textProps {
  text: string;
  onTextChange: (newText: string) => void;
  onStockCheck: () => void;
  checkStock: boolean;
}


export default function SearchBar({text, onTextChange, onStockCheck, checkStock}: textProps) {
  return (
    <>
      <form action="">
        <input type="text" name="product-search" value={text} onChange={(event) => onTextChange(event.target.value)}/>
        <label htmlFor="product-search"></label>
        <input type="checkbox" checked={checkStock} onChange={onStockCheck}/>
      </form>
    </>
  );
}
