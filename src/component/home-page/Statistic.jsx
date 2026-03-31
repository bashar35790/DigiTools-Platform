import React from 'react'

export default function Statistic() {
    return (
        <>
            <section className='py-20 bg-linear-to-r from-brand1 to-brand2'>
                <div className=" container mx-auto px-5 flex gap-5 justify-center items-center">
                    <div className='text-center'>
                        <h3 className='text-6xl font-extrabold text-white'>50K+</h3>
                        <p className='font-medium text-2xl text-white'>Active Users</p>
                    </div>
                      <div className="divider"></div>
                    <div className='text-center'>
                        <h3 className='text-6xl font-extrabold text-white'>200+</h3>
                        <p className='font-medium text-2xl text-white'>Premium Tools</p>
                    </div>
                      <div className="divider">OR</div>
                    <div className='text-center'>
                        <h3 className='text-6xl font-extrabold text-white'>4.9</h3>
                        <p className='font-medium text-2xl text-white'>Rating</p>
                    </div>
                </div>
            </section>
        </>
    )
}
