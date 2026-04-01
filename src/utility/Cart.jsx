import React from "react";
import Writen from "../assets/products/writing.png";

const Cart = () => {
    return (
        <div className="bg-gray-100 flex flex-col items-center py-5">
            <div className="container px-5">
                {/* Cart Box */}
                <div className="bg-white rounded-2xl shadow-md w-full mt-10 p-6">
                    <h2 className="text-xl font-semibold mb-6">Your Cart</h2>

                    {/* Items */}
                    <div className="space-y-4">
                        <div
                            className="flex justify-between items-center bg-gray-100 p-4 rounded-xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-2xl bg-white p-3 rounded-full">
                                    <img src={Writen} alt="writen" />
                                </div>
                                <div>
                                    <h3 className="font-medium">AI Writing Pro</h3>
                                    <p className="text-gray-500">$29</p>
                                </div>
                            </div>

                            <button className="text-pink-500 hover:underline cursor-pointer">
                                Remove
                            </button>
                        </div>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between items-center mt-6">
                        <span className="text-gray-500">Total:</span>
                        <span className="text-xl font-semibold">$74</span>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full mt-6 py-3 rounded-full cursor-pointer text-white font-medium bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition">
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
