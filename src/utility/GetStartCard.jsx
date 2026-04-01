import React from 'react';
import Button from './Button';

export default function GetStartCard({num, img, title, des}) {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body text-center">
                    <div className='w-fit h-fit mx-auto p-5 bg-linear-to-r from-brand1/10 to-brand2/10 rounded-full'>
                        <img src={img} alt="user" className=' w-16 h-16 mx-auto z-10' />
                    </div>
                    <h2 className="card-title justify-center text-heading">{title}</h2>
                    <p className='text-bodyText'>{des}</p>
                </div>
                <Button title={num} addStyle="w-8 h-8 p-1 absolute top-2 right-2 rounded-full"></Button>
            </div>
        </>
    )
}
