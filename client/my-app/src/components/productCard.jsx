import React from "react";
import { useDispatch } from "react-redux";
import "./productCard.css";
import { getAddToCart } from "../action/actions";
import { useEffect } from "react";
import { getAllCart } from "../action/actions";
import { useSelector } from "react-redux";

const ProductCard = ({ image, name, price, id, amount }) => {
  const state = useSelector((state) => state.cart);
 
  const dispatch = useDispatch();


  const cartOnClick = () => {
    
   
    var busco = state?.find((e) => e.id === id);
    if (!busco) {
      dispatch(getAddToCart(id));
    }else{
        dispatch(getAllCart())
    }
  };
  var priceOffer = "$300";

  return (
    /*  <div className="container">
                <h3 className="name2">{name}</h3>   
                    <div className="imagen">
                        <img className="img" src={image} alt="no image" style={{width:180}}/>
                    </div>
                <h3 className="continent">{price}</h3>
                <button onClick={cartOnClick}>Add to cart</button>
            </div>*/
    <div class="container">
      <div class={`card-${id} card-div`}>
        <div class="like-icon-div">
          <label htmlFor={`card-${id}-like`} class="like-icon-div-child">
            <input type="checkbox" id={`card-${id}-like`} />
            <i class="far fa-heart heart-empty"></i>
            <i class="fas fa-heart heart-fill"></i>
          </label>
        </div>

        <div class="gow-img-div img-div">
          <img
            src={image}
            alt="god-of-war-figurine"
          />
        </div>
        <div class="text-container">
          <h2 class="item-name">{name}</h2>
          <p class="date">{amount}</p>
          <div class="pricing-and-cart">
            <div class="pricing">
              <p class="previous-price">{priceOffer}</p>
              <p class="current-price">{price}</p>
            </div>
            <button onClick={cartOnClick} class="fas fa-shopping-cart"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
