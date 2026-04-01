import React from 'react'
import UserImg from '../../assets/user.png';
import BoxImg from '../../assets/package.png';
import RoketImg from '../../assets/rocket.png'
import GetStartCard from '../../utility/GetStartCard';

export default function Getstart() {
    return (
        <section className='py-20 bg-gray-50/50'>
            <div className="container px-6 space-y-16 mx-auto">
                {/* heading text  */}
                <div className='space-y-4 text-center max-w-2xl mx-auto'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-heading'>Get Started in 3 Simple Steps</h2>
                    <p className='text-lg text-bodyText leading-relaxed'>Start using premium digital tools in minutes, not hours. Our streamlined process gets you up and running faster.</p>
                </div>

                {/* card container  */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
                    <GetStartCard
                        num="01"
                        img={UserImg}
                        title="Create Account"
                        des="Sign up for free in seconds. No credit card required to get started."
                    />
                    <GetStartCard
                        num="02"
                        img={BoxImg}
                        title="Choose Products"
                        des="Browse our catalog and select the tools that fit your needs."
                    />
                    <GetStartCard
                        num="03"
                        img={RoketImg}
                        title="Start Creating"
                        des="Download and start using your premium tools immediately."
                    />
                </div>
            </div>
        </section>
    )
}
