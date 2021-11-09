import React from "react"
import { useDispatch } from "react-redux"


export default function CheckoutCard({
    name,
    id,
    price,
    image,
    amount
  }) {
    const dispatch = useDispatch()

    const suma = () => {
       // dispatch(sumaAmount(id))
    }
    const resta = () => {
        /*dispatch(restaAmount(id))*/
    }
    var stock = 20

      return(
         <tr>
             <td>{name}</td>
             <td>{price}</td>
             <td data-column="Progress" className="table-row__td">
        <div className={`component_toCartCantidad ${!stock ? "disabled" : ""}`}>
          <div
            className={`toCartBoton1 menos1 ${
              amount === 1 ? "disabled" : ""
            }`}
            onClick={resta}
          >
            {" "}
            <h1 className="toCartBoton menos">-</h1>
          </div>
          <div className="">{amount}</div>
          <div
            className={`toCartBoton mas ${
              amount === stock ? "disabled" : ""
            }`}
            onClick={suma}
          ><h1 className="toCartBoton menos">+</h1></div>
        </div>
      </td>
      <td>
        <p >${price * amount}</p>
      </td>
         </tr>
      )
  }