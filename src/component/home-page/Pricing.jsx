import React from 'react'
import Button from '../../utility/Button';


const PricingData = [
    {
        id: 1,
        name: "Starter",
        description: "Perfect for getting started",
        price: 0,
        period: "monthly",
        tag: null,
        tagType: null,
        features: [
            "Access to 10 free tools",
            "Basic templates",
            "Community support",
            "1 project per month"
        ],
        buttonText: "Get Started Free",
    },
    {
        id: 2,
        name: "Pro",
        description: "Best for professionals",
        price: 29,
        period: "monthly",
        tag: "Most Popular",
        tagType: "popular",
        features: [
            "Access to all premium tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
            "Advanced analytics"
        ],
        buttonText: "Start Pro Trial",
    },
    {
        id: 3,
        name: "Enterprise",
        description: "For teams and businesses",
        price: 99,
        period: "monthly",
        tag: null,
        tagType: null,
        features: [
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding"
        ],
        buttonText: "Contact Sales",
    }
];

export default function Pricing() {
    return (
        <>
            <section className='py-20'>
                <div className="container px-6 space-y-16 mx-auto">
                    {/* heading text  */}
                    <div className='space-y-4 text-center max-w-2xl mx-auto'>
                        <h2 className='text-4xl md:text-5xl font-extrabold text-heading'>Simple, Transparent Pricing</h2>
                        <p className='text-lg text-bodyText'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    </div>
                    {/* card container  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            PricingData.map(card => {
                                return (
                                    <div className={`card overflow-hidden transition-all duration-300 hover:shadow-xl ${card.tag ? "bg-linear-to-br from-brand1 to-brand2 text-white scale-105 z-10 shadow-xl" : "bg-[#F9FAFC] text-heading border border-gray-100"}`} key={card.id}>
                                        <div className="card-body relative p-8 lg:p-10 space-y-6 flex flex-col justify-between h-full">
                                            {card.tag && (
                                                <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                                                    {card.tag}
                                                </span>
                                            )}

                                            <div className="space-y-4">
                                                <div>
                                                    <h2 className="text-2xl font-bold">{card.name}</h2>
                                                    <p className={`text-sm ${card.tag ? "text-white/80" : "text-bodyText"}`}>{card.description}</p>
                                                </div>

                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-4xl font-extrabold">${card.price}</span>
                                                    <span className={`text-sm ${card.tag ? "text-white/80" : "text-bodyText"}`}>/{card.period}</span>
                                                </div>

                                                <ul className="space-y-3 pt-4">
                                                    {
                                                        card.features.map((feature, index) => (
                                                            <li key={index} className="flex items-center gap-3">
                                                                <div className={`shrink-0 rounded-full p-1 ${card.tag ? "bg-white/20" : "bg-success/10"}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className={`size-3 ${card.tag ? "text-white" : "text-success"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                                    </svg>
                                                                </div>
                                                                <span className="text-sm font-medium">{feature}</span>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>

                                            <div className="pt-6">
                                                <Button
                                                    title={card.buttonText}
                                                    addStyle={`w-full py-4 text-lg ${card.tag ? "bg-white text-brand1 hover:bg-gray-50 border-none" : ""}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
