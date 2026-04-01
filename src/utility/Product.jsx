import React from 'react';
import Button from './Button';

export default function Product({ card }) {

    return (
        <>
            <div className="card shadow-sm">
                <div className="card-body relative justify-between">
                    <span className={`badge badge-xs ${card.tag == "Popular" && "bg-[#E1E7FF] text-brand1" || card.tag == "Best Seller" && "bg-[#FEF3C6] text-[#BB4D00]"
                        || card.tag == "New" && "bg-[#DBFCE7] text-[#0A883E]"
                        }  p-3 rounded-full absolute top-2.5 right-2.5`}>{card.tag}</span>

                    {/* card content start  */}
                    <div className="flex flex-col justify-between gap-4">
                        <div className='p-3 shadow-xs w-fit rounded-full'>
                            <img src={card.icon} alt="desing" className='w-8 h-8' />
                        </div>
                        <h2 className="text-2xl font-bold text-heading">{card.name}</h2>
                        <span className=" text-bodyText">{card.description}</span>
                        <h2 className="text-2xl font-bold text-heading">{card.price} <span className='text-[16px] text-bodyText font-normal'>/{card.period}</span></h2>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-bodyText">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{card?.features[0]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{card?.features[1]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{card?.features[2]}</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <Button title="Buy Now" addStyle="w-full"></Button>
                    </div>
                </div>
            </div>
        </>
    )
}
