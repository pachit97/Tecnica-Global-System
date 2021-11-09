import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';
import { useEffect } from "react"
import {getAllProducts} from "./action/actions"
import { useDispatch } from 'react-redux';
import {getAllCart} from "./action/actions"

function App() {

   const dispatch = useDispatch()

   useEffect(() => {
    dispatch(getAllCart())
}, [dispatch])
  
  useEffect(() => {
   dispatch(getAllProducts())
}, [])

  return (
    <div className="App">
      <Cart></Cart>
    </div>
  );
}

export default App;
