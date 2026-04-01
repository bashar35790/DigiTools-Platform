import React from 'react'

export default function Cta() {
    return (
        <>
            <section className='py-20 bg-linear-to-r from-brand1 to-brand2 overflow-hidden'>
                <div className="container px-6 space-y-12 mx-auto text-white text-center relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/5 blur-3xl rounded-full scale-150 -z-10"></div>

                    {/* heading text  */}
                    <div className='space-y-4 max-w-3xl mx-auto'>
                        <h2 className='text-3xl md:text-5xl font-extrabold leading-tight'>Ready to Transform Your Digital Workflow?</h2>
                        <p className='text-lg opacity-90'>Join 50,000+ users who are already working smarter with DigiTools.</p>
                    </div>

                    <div className='space-y-8'>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <button className='btn btn-lg rounded-full bg-white text-brand1 border-none px-10 hover:bg-gray-50 hover:scale-105 transition-all w-full sm:w-auto'>Explore Products</button>
                            <button className='btn btn-lg rounded-full btn-outline border-white text-white px-10 hover:bg-white/10 hover:scale-105 transition-all w-full sm:w-auto'>Watch Demo</button>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center text-sm font-medium opacity-80">
                            <span className="flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                14-day free trial
                            </span>
                            <span className="flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                No credit card required
                            </span>
                            <span className="flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Cancel anytime
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
