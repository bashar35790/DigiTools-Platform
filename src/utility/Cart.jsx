import React from "react";
import Writen from "../assets/products/writing.png";

const Cart = ({ cart, onRemoveFromCart, setActiveView }) => {
    const totalPrice = cart.reduce((total, item) => {
        // Robust price parsing
        const priceValue = typeof item.price === 'string'
            ? parseFloat(item.price.replace(/[^\d.]/g, ''))
            : item.price;
        return total + (priceValue * item.quantity);
    }, 0);

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 px-5 space-y-6 animate-fade-in">
                <div className="bg-gray-50 p-10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-heading">Your cart is empty</h3>
                    <p className="text-bodyText max-w-xs mx-auto">Looks like you haven't added anything to your cart yet. Explore our premium tools!</p>
                </div>
                <button
                    onClick={() => setActiveView("available")}
                    className="btn bg-linear-to-l from-brand2 to-brand1 text-white rounded-full px-8 hover:shadow-lg transition-all"
                >
                    Start Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="bg-gray-50/50 rounded-3xl p-8 shadow-inner animate-fade-in">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-heading">Your Selection</h2>
                <button
                    onClick={() => setActiveView("available")}
                    className="text-brand1 font-medium hover:underline flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Products
                </button>
            </div>

            <div className="space-y-4">
                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group animate-slide-up"
                    >
                        <div className="flex items-center gap-6">
                            <div className="text-2xl bg-gray-50 p-4 rounded-xl group-hover:scale-105 transition-transform">
                                <img src={item.icon} alt={item.name} className="w-12 h-12" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold text-heading">{item.name}</h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-brand2 font-semibold text-lg">${item.price}</span>
                                    <span className="badge badge-sm bg-gray-100 text-gray-500 border-none">Qty: {item.quantity}</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => onRemoveFromCart(item.id)}
                            className="p-3 rounded-full text-red-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                            aria-label="Remove item"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-10 border-t border-gray-100 pt-8">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-500 text-lg">Estimated Total:</span>
                    <span className="text-3xl font-extrabold text-heading">${totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full py-4 rounded-2xl cursor-pointer text-white font-bold text-lg bg-linear-to-l from-brand2 to-brand1 hover:shadow-xl hover:shadow-brand1/20 transition-all transform active:scale-[0.98]">
                    Checkout Now
                </button>
            </div>
        </div>
    );
};

export default Cart;
