import React from 'react'
import Button from '../../utility/Button'

export default function Products() {
    return (
        <>
            <section className='py-20'>
                <div className="container px-5">
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
                    <div>
                        <div className="card w-96 bg-base-100 shadow-sm">
                            <div className="card-body">
                                <span className="badge badge-xs badge-warning">Most Popular</span>
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-bold">Premium</h2>
                                    <span className="text-xl">$29/mo</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>High-resolution image generation</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Customizable style templates</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Batch processing capabilities</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>AI-driven image enhancements</span>
                                    </li>
                                    <li className="opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="line-through">Seamless cloud integration</span>
                                    </li>
                                    <li className="opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="line-through">Real-time collaboration tools</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="btn btn-primary btn-block">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
