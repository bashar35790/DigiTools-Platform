import React from 'react'

export default function Cta() {
    return (
        <>
            <section className='py-20 bg-linear-to-r from-brand1 to-brand2'>
                <div className="container px-5 space-y-10 mx-auto text-white">
                    {/* heading text  */}
                    <div className='space-y-4 text-center'>
                        <h2 className='text-4xl font-extrabold'>Simple, Ready to Transform Your Workflow?</h2>
                        <p className=''>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    </div>

                    <div className='space-y-4'>
                        <div className='flex gap-2.5 justify-center '>
                            <button className='btn rounded-full bg-base-100'>Explore Products</button>
                            <button className='btn rounded-full btn-outline'>Explore Products</button>
                        </div>
                        <p className='text-center'>14-day free trial • No credit card required • Cancel anytime</p>
                    </div>


                </div>
            </section>
        </>
    )
}
