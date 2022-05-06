import React,{useEffect} from "react";
import CartContainer from "./component/CartContainer";
import NavBar from "./component/NavBar";
import { useDispatch,useSelector } from "react-redux";
import { calculateTotals } from "./folder/cart/cartSlice";
import Modal from "./component/Modal";

function App() {
  const {cartItems} = useSelector((store) => store.cart)
  const {isOpen} = useSelector((store) => store.modal)
   const dispatch = useDispatch()
   useEffect(() => {
    dispatch(calculateTotals());
   }, [cartItems]) 
  return <main>
    {isOpen &&   <Modal/>}
    <NavBar/>
    <CartContainer/>
  </main>;
}
export default App;
