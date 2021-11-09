import CheckoutCard from "./CheckoutCard"
import { React } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import  Product  from "./Products"
import "./Cart.css"
import { useSelector } from 'react-redux'
import "./CheckoutCard.css"
import { useEffect } from "react";
import { getAllCart } from "../action/actions";
import { useDispatch } from "react-redux";

var CarritoReducer = ["hola", "adiooo"]

function Cart() {
    const state = useSelector(state => state.cart)
    const dispatch = useDispatch()
    
    var total = 0;
    state?.map(e => ((total) += (e.product.price * e.quantity)))
    

    console.log("productosss",  state)

      function Carrito(){

          return (

            <div className="todo">
              <div className="row row--top-20">
                <div className="col-md-12">
                  <div className="table-container">
                    <table className="table">
                      <thead className="table__thead">
                        <tr>
                          <th className="table__th">Name</th>
                          <th className="table__th">Price</th>
                          <th  className="table__th">Amount</th>
                          <th className="table__th">Subtotal</th>
                          <th className="table__th">Delete</th>
                        </tr>
                      </thead>
                      <tbody className="table__tbody">
                        {state?.map((e) => (
                          <CheckoutCard
                          key={e.product.id}
                          id={e.product.id}
                          name={e.product.name}
                          price={e.product.price}
                          image={e.product.image}
                          amount={e.quantity}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {state.length ? <div>
                      <div className="amount">Total Amount ${total}</div>
                      <img className="imagen" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/288px-Former_Visa_%28company%29_logo.svg.png"></img>
                      <img className="imagen" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"></img>
                      <img className="imagen" src="https://play-lh.googleusercontent.com/MMBG4AZmpMhSfhF5k7QnFmhvFbaF5ZC_BtEOIKRt9TIkUZjul2lWwPZV75PwTfoSm23-jgMxkroRGA-vkDg"></img>
                      <button className="pagar">Pay</button>
                  </div> : null}
                </div>
              </div>
            </div>
          )
      }
      return (
        <div className="totalView">
          <Carrito/>
          <Product/>
        </div>
      )
}


export default Cart
