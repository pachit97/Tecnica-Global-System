import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./productCard";

function Product() {
  const state = useSelector((state) => state.products);

  return (
    <div className="productos">
      {state?.map((e) => (
        <ProductCard
          key={e.id}
          id={e.id}
          name={e.name}
          price={e.price}
          image={e.image}
          amount={e.amount}
        />
      ))}
    </div>
  );
}

export default Product;
