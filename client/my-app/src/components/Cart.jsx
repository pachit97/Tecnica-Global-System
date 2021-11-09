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
    


    console.log("productosss",  state)

      function Carrito(){

          return (

            <div >
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
                          amount={e.product.amount}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
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
