import React, { use, useState } from 'react'
import Product from '../../utility/Product';
import Cart from '../../utility/Cart';




export default function Products({ cardDataPromise }) {
    const cards = use(cardDataPromise);
    const [isSelected, setIsSelected] = useState("available");


    return (
        <>
            <section className='py-20'>
                <div className="container px-5 space-y-10 mx-auto">
                    {/* heading text  */}
                    <div className='space-y-4 text-center'>
                        <h2 className='text-5xl font-extrabold text-heading'>Premium Digital Tools</h2>
                        <p className=' text-bodyText'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>

                        {/* buttons  */}
                        <div className=' p-2 shadow-xs rounded-full w-fit mx-auto space-x-2'>
                            <a onClick={() => setIsSelected("available")} className={`btn ${isSelected == "available" ? "bg-linear-to-l from-brand2 to-brand1 text-white" : ""} rounded-full border-none`}>
                                All Products
                            </a>
                            <a onClick={() => setIsSelected("cart")} className={`btn ${isSelected == "cart" ? "bg-linear-to-l from-brand2 to-brand1 text-white" : ""} rounded-full border-none`}>
                                Cart
                            </a>
                        </div>
                    </div>
                    {/* card container  */}
                    {
                      isSelected == "available"?
                    <div className='grid grid-cols-3 gap-8'>
                        {
                            cards.map(card => <Product key={card.id} card={card}></Product>)
                        }
                    </div>: <Cart></Cart>
                    }
                </div>
            </section>
        </>
    )
}
