import React from 'react';
import Button from './Button';

export default function GetStartCard({ num, img, title, des }) {
    return (
        <>
            <div className="card bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 w-full relative overflow-hidden group">
                <div className="card-body text-center p-8 lg:p-10">
                    <div className='w-24 h-24 mx-auto p-6 bg-linear-to-br from-brand1/10 to-brand2/10 rounded-3xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500'>
                        <img src={img} alt={title} className='w-full h-full object-contain' />
                    </div>
                    <h2 className="text-xl font-bold text-heading mb-2">{title}</h2>
                    <p className='text-bodyText leading-relaxed'>{des}</p>
                </div>
                <div className="absolute top-4 right-4 h-8 w-8 bg-brand1/10 text-brand1 rounded-full flex items-center justify-center font-bold text-xs">
                    {num}
                </div>
            </div>
        </>
    )
}
