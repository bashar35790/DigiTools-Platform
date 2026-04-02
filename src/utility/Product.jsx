import React, { useState } from 'react';
import Button from './Button';

export default function Product({ card, count, onAddToCart }) {
    const [active, setActive] = useState(false);

    const handleBuyNow = () => {
        setActive(true);
        onAddToCart();
    };

    return (
        <>
            <div className="card bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100/50 rounded-2xl overflow-hidden flex flex-col h-full">
                <div className="card-body p-6 lg:p-8 flex flex-col justify-between h-full relative">

                    {/* Tag Badge */}
                    <div className="absolute top-4 right-4 z-10">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${card.tag === "Popular" ? "bg-brand1/10 text-brand1" :
                                card.tag === "Best Seller" ? "bg-amber-100 text-amber-600" :
                                    "bg-emerald-100 text-emerald-600"
                            }`}>
                            {card.tag}
                        </span>
                    </div>

                    <div className="space-y-6">
                        {/* Icon Container */}
                        <div className='p-4 shadow-sm w-fit rounded-2xl bg-gray-50 group-hover:bg-brand1/5 group-hover:scale-110 transition-all duration-500'>
                            <img src={card.icon} alt={card.name} className='w-10 h-10 object-contain' />
                        </div>

                        {/* Text Content */}
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold text-heading group-hover:text-brand1 transition-colors">{card.name}</h2>
                            <p className="text-bodyText leading-relaxed line-clamp-2 text-sm">{card.description}</p>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-extrabold text-heading">${card.price}</span>
                            <span className='text-sm text-bodyText font-medium'>/{card.period}</span>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-3 pt-2">
                            {card?.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="mt-1 shrink-0 rounded-full bg-emerald-100 p-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-heading/80 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Action Button */}
                    <div className="mt-8 pt-4 border-t border-gray-50">
                        <Button
                            onClick={handleBuyNow}
                            active={active}
                            title="Add to Cart"
                            title2="Added to Cart"
                            addStyle="w-full py-4 font-bold"
                            disable= {active}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
