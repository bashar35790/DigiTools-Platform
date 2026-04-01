import React from 'react'
import UserImg from '../../assets/user.png';
import BoxImg from '../../assets/package.png';
import RoketImg from '../../assets/rocket.png'
import GetStartCard from '../../utility/GetStartCard';

export default function Getstart() {
    return (
        <section className='py-20'>
            <div className="container px-5 space-y-10 mx-auto">
                {/* heading text  */}
                <div className='space-y-4 text-center'>
                    <h2 className='text-5xl font-extrabold text-heading'>Get Started in 3 Steps</h2>
                    <p className=' text-bodyText'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                {/* card container  */}
                <div className='flex gap-8 max-md:flex-wrap '>

                    <GetStartCard
                        num="01"
                        img={UserImg}
                        title="Create Account"
                        des="Sign up for free in seconds. No credit card required to get started."

                    >

                    </GetStartCard>
                    <GetStartCard
                        num="02"
                        img={BoxImg}
                        title="Choose Products"
                        des="Browse our catalog and select the tools that fit your needs."

                    >
                    </GetStartCard>
                    <GetStartCard
                        num="03"
                        img={RoketImg}
                        title="Start Creating"
                        des="Download and start using your premium  tools immediately."

                    >
                    </GetStartCard>

                </div>

            </div>
        </section>
    )
}
