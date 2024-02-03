

import OrderSummary from '../components/cart_components/OrderSummary';
import CartDetails from '../components/cart_components/CartDetails';
const Cart = () => {
  return (


    <div className="container mx-auto overflow-x-hidden z-0">
      <div className="flex my-5 gap-3 justify-between ">
        <CartDetails />
        <OrderSummary />
      </div>
    </div>



  )
}

export default Cart