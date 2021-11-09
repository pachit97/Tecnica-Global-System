import React from "react"
import { useDispatch } from "react-redux"
import {restaAmount, sumaAmount, removeItemDB} from "../action/actions"
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";

export default function CheckoutCard({
    name,
    id,
    price,
    image,
    amount
  }) {
    const dispatch = useDispatch()

    const suma = () => {
        dispatch(sumaAmount(id))
    }
    const resta = () => {
        return (amount >= 2) ? dispatch(restaAmount(id)) : null
    }
    const RemoveItem = () => {
      console.log("IDDDDD", id)
      dispatch(removeItemDB(id))
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
            <h1 className={`toCartBoton menos ${
              amount === 1 ? "disabled" : ""
            }`}>-</h1>
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
      <td className="table-row__td">
        <CardActions disableSpacing>
          <IconButton onClick={(event) => RemoveItem(event, id)}>
            <DeleteIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </td>
         </tr>
      )
  }