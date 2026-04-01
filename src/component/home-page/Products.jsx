import React, { use, useState } from 'react'
import Product from '../../utility/Product';
import Cart from '../../utility/Cart';




export default function Products({
    cardDataPromise,
    cart,
    onAddToCart,
    onRemoveFromCart,
    onClearCart,
    activeView,
    setActiveView
}) {
    const cards = use(cardDataPromise);

    return (
        <>
            <section className='py-20'>
                <div className="container px-6 space-y-16 mx-auto">
                    {/* heading text  */}
                    <div className='space-y-6 text-center max-w-3xl mx-auto'>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-heading leading-tight'>Premium Digital Tools</h2>
                        <p className='text-lg text-bodyText leading-relaxed'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

                        {/* View Toggle Buttons */}
                        <div className='p-1.5 shadow-sm rounded-full w-fit mx-auto flex items-center bg-gray-100/50 backdrop-blur-sm border border-gray-100'>
                            <button
                                onClick={() => setActiveView("available")}
                                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${activeView === "available" ? "bg-white text-brand1 shadow-md" : "text-gray-500 hover:text-brand1"}`}
                            >
                                All Products
                            </button>
                            <button
                                onClick={() => setActiveView("cart")}
                                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeView === "cart" ? "bg-white text-brand1 shadow-md" : "text-gray-500 hover:text-brand1"}`}
                            >
                                Cart {cart.length > 0 && <span className="bg-brand1 text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center">{cart.length}</span>}
                            </button>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="animate-fade-in">
                        {activeView === "available" ? (
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {cards.map(card => {
                                    const cartItem = cart.find(item => item.id === card.id);
                                    return (
                                        <Product
                                            key={card.id}
                                            card={card}
                                            count={cartItem ? cartItem.quantity : 0}
                                            onAddToCart={() => onAddToCart(card)}
                                        />
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="max-w-4xl mx-auto">
                                <Cart cart={cart} onRemoveFromCart={onRemoveFromCart} onClearCart={onClearCart} setActiveView={setActiveView} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

