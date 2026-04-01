import React, { use } from 'react'
import Button from '../../utility/Button';
import Product from '../../utility/Product';




export default function Products({cardDataPromise}) {
    const cards = use(cardDataPromise);
    console.log(cards)

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
                            <Button title="Products"></Button>
                            <button className='px-4 py-2 rounded-full'>Cart </button>
                        </div>
                    </div>
                    {/* card container  */}
                    <div className='grid grid-cols-3 gap-8'>
                        {
                            cards.map(card =>  <Product key={card.id} card={card}></Product>  )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
