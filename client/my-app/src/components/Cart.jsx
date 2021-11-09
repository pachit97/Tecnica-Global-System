import CheckoutCard from "./CheckoutCard"
import { React } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import  Product  from "./Products"
import "./Cart.css"
import { useSelector } from 'react-redux'
import "./CheckoutCard.css"

var CarritoReducer = ["hola", "adiooo"]

function Cart() {
    const state = useSelector(state => state.cart)
    
    var productos = state[0]?.products
    
    console.log("productosss", productos, state)

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
                          <th colspan="3" className="table__th">Amount</th>
                          <th className="table__th">Subtotal</th>
                          <th className="table__th">Delete</th>
                        </tr>
                      </thead>
                      <tbody className="table__tbody">
                        {productos?.map((e) => (
                          <CheckoutCard
                          key={e.id}
                          id={e.id}
                          name={e.name}
                          price={e.price}
                          image={e.image}
                          amount={e.amount}
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
