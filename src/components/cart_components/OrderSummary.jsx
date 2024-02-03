import { Link } from "react-router-dom"


const OrderSummary = () => {
    return (
        <div id="summary" className="w-1/4 px-5  py-7 shadow-lg rounded bg-[white]">
            <h1 className="font-semibold text-lg md:text-2xl border-b pb-4 text-center uppercase">Order Summary</h1>
            <div className="flex justify-between mt-2 mb-5">
                <span className="font-semibold text-sm uppercase">Sub Total</span>
                <span className="font-semibold text-sm">₹600</span>
            </div>
            <div className="flex justify-between mt-2 mb-5">
                <span className="font-semibold text-sm uppercase">Tax</span>
                <span className="font-semibold text-sm">₹400</span>
            </div>
            <div className="flex justify-between mt-2 mb-5">
                <span className="font-semibold text-sm uppercase">Discount</span>
                <span className="font-semibold text-sm">₹400</span>
            </div>
            <div className="py-5">
                <label htmlFor="promo" className="font-semibold inline-block mb-1 text-sm uppercase">coupon Code</label>
                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
            <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total</span>
                    <span>₹600</span>
                </div>
                <button className="bg-black font-semibold hover:bg-[#00000090] transition-all py-3 text-sm text-white uppercase w-full">
                    <Link to={'/cart/checkout'}>
                        checkout
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default OrderSummary