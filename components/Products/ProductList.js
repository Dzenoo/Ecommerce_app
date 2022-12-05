import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";
import { useState } from "react";
import { useRef } from "react";

function ProductList(props) {
  const [query, setQuery] = useState("");
  const enteredValue = useRef();

  const inputChangeHandler = () => {
    const valueOfInput = enteredValue.current.value;
    setQuery(valueOfInput);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Products..."
        className="search__products"
        ref={enteredValue}
        onChange={inputChangeHandler}
      />
      <ul className={classes.list}>
        {props.products
          .filter((product) => product.title.toLowerCase().startsWith(query))
          .map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
      </ul>
    </>
  );
}

export default ProductList;
