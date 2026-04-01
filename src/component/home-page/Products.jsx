import React, { use, useState } from 'react'
import Product from '../../utility/Product';
import Cart from '../../utility/Cart';




export default function Products({
    cardDataPromise,
    cart,
    onAddToCart,
    onRemoveFromCart,
    activeView,
    setActiveView
}) {
    const cards = use(cardDataPromise);

    return (
        <>
            <section className='py-20'>
                <div className="container px-5 space-y-10 mx-auto">
                    {/* heading text  */}
                    <div className='space-y-4 text-center'>
                        <h2 className='text-5xl font-extrabold text-heading'>Premium Digital Tools</h2>
                        <p className=' text-bodyText'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>

                        {/* buttons  */}
                        <div className=' p-2 shadow-xs rounded-full w-fit mx-auto space-x-2 bg-gray-50/50 backdrop-blur-sm'>
                            <button
                                onClick={() => setActiveView("available")}
                                className={`btn ${activeView === "available" ? "bg-linear-to-l from-brand2 to-brand1 text-white shadow-lg" : "hover:bg-gray-100"} rounded-full border-none transition-all duration-300`}
                            >
                                All Products
                            </button>
                            <button
                                onClick={() => setActiveView("cart")}
                                className={`btn ${activeView === "cart" ? "bg-linear-to-l from-brand2 to-brand1 text-white shadow-lg" : "hover:bg-gray-100"} rounded-full border-none transition-all duration-300`}
                            >
                                Cart {cart.length > 0 && `(${cart.length})`}
                            </button>
                        </div>
                    </div>
                    {/* card container  */}
                    {
                        activeView === "available" ?
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {
                                    cards.map(card => {
                                        const cartItem = cart.find(item => item.id === card.id);
                                        return (
                                            <Product
                                                key={card.id}
                                                card={card}
                                                count={cartItem ? cartItem.quantity : 0}
                                                onAddToCart={() => onAddToCart(card)}
                                            />
                                        );
                                    })
                                }
                            </div> : <Cart cart={cart} onRemoveFromCart={onRemoveFromCart} setActiveView={setActiveView} />
                    }
                </div>
            </section>
        </>
    )
}
