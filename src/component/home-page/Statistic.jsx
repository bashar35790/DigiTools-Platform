import React from 'react'

export default function Statistic() {
    return (
        <>
            <section className='py-12 lg:py-20 bg-linear-to-r from-brand1 to-brand2'>
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
                        <div className='text-center md:border-r md:border-white/20 flex-1 space-y-2 md:space-y-4 w-full last:border-r-0'>
                            <h3 className='text-5xl lg:text-7xl font-extrabold text-white'>50K+</h3>
                            <p className='font-medium text-lg lg:text-2xl text-white/90'>Active Users</p>
                        </div>
                        <div className='text-center md:border-r md:border-white/20 flex-1 space-y-2 md:space-y-4 w-full last:border-r-0'>
                            <h3 className='text-5xl lg:text-7xl font-extrabold text-white'>200+</h3>
                            <p className='font-medium text-lg lg:text-2xl text-white/90'>Premium Tools</p>
                        </div>
                        <div className='text-center flex-1 space-y-2 md:space-y-4 w-full'>
                            <h3 className='text-5xl lg:text-7xl font-extrabold text-white'>4.9</h3>
                            <p className='font-medium text-lg lg:text-2xl text-white/90'>User Rating</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
