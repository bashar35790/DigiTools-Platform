import React, { useState } from 'react';
import Button from './Button';

export default function Product({ card, count, onAddToCart }) {
    const [active, setActive] = useState(false);

    const handleBuyNow = () => {
        setActive(true);
        onAddToCart();
        // Reset "Added" state after a short delay for better UX
        setTimeout(() => setActive(false), 2000);
    };

    return (
        <>
            <div className="card shadow-sm hover:shadow-xl transition-all duration-300 relative group border border-gray-100">
                <div className="card-body relative justify-between">
                    {/* Count Badge */}
                    {count > 0 && (
                        <div className="absolute -top-3 -left-3 bg-brand2 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg z-10 animate-scale-in">
                            {count}
                        </div>
                    )}

                    <span className={`badge badge-xs ${card.tag == "Popular" && "bg-[#E1E7FF] text-brand1" || card.tag == "Best Seller" && "bg-[#FEF3C6] text-[#BB4D00]"
                        || card.tag == "New" && "bg-[#DBFCE7] text-[#0A883E]"
                        }  p-3 rounded-full absolute top-2.5 right-2.5`}>{card.tag}</span>

                    {/* card content start  */}
                    <div className="flex flex-col justify-between gap-4">
                        <div className='p-3 shadow-xs w-fit rounded-full bg-gray-50 group-hover:scale-110 transition-transform duration-300'>
                            <img src={card.icon} alt="desing" className='w-8 h-8' />
                        </div>
                        <h2 className="text-2xl font-bold text-heading">{card.name}</h2>
                        <span className=" text-bodyText leading-relaxed">{card.description}</span>
                        <h2 className="text-2xl font-bold text-heading">${card.price} <span className='text-[16px] text-bodyText font-normal'>/{card.period}</span></h2>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-bodyText">
                        {card?.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
                        <Button
                            onClick={handleBuyNow}
                            active={active}
                            title="Buy Now"
                            title2="Added to Cart"
                            addStyle="w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
