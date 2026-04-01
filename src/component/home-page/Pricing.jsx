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
                <div className="container px-5 space-y-10 mx-auto">
                    {/* heading text  */}
                    <div className='space-y-4 text-center'>
                        <h2 className='text-5xl font-extrabold text-heading'>Simple, Transparent Pricing</h2>
                        <p className=' text-bodyText'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    </div>
                    {/* card container  */}
                    <div className='flex gap-8 max-md:flex-wrap'>
                        {
                            PricingData.map(card => {
                                return (
                                    <div className={`card bg-[#F9FAFC] shadow-sm w-full text-heading ${card.tag ? "bg-linear-to-r from-brand1 to-brand2 text-white" : ""}`} key={card.id}>
                                        <div className="card-body relative space-y-6 justify-between">
                                            <span className={`badge p-3 bg-[#FEF3C6] text-[#BB4D00] rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${card.tag ? " visible" : " hidden"}`}>
                                                {card.tag}
                                            </span>
                                            <div className="flex flex-col">
                                                <h2 className="text-2xl font-bold ">{card.name}</h2>
                                                <span className="">{card.description}</span>
                                            </div>

                                            <div className="flex items-end">
                                                <h2 className="text-4xl font-bold ">${card.price}</h2>
                                                <span className="">/{card.period}</span>
                                            </div>

                                            <ul className=" flex flex-col gap-2 ">
                                                {
                                                    card.features.map((single, index) => <li key={index}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        <span>{single}</span>
                                                    </li>)
                                                }
                                            </ul>
                                            <div className="">
                                                <Button title={card.buttonText} addStyle={`w-full`}></Button>
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
