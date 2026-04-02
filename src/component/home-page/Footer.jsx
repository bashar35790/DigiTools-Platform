import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-heading text-white pt-20 pb-10 px-6">
                <div className="container mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
                        <div className='space-y-6'>
                            <h6 className="text-3xl font-bold bg-linear-to-r from-brand1 to-brand2 text-transparent bg-clip-text">DigiTools</h6>
                            <p className="text-gray-400 leading-relaxed max-w-xs">
                                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand1 transition-colors group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                                </a>
                                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand1 transition-colors group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                                </a>
                                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand1 transition-colors group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h6 className="font-bold uppercase tracking-wider text-sm text-gray-300">Services</h6>
                            <ul className="space-y-4 text-gray-400">
                                <li><a className="hover:text-brand1 transition-colors cursor-pointer">Branding</a></li>
                                <li><a className="hover:text-brand1 transition-colors cursor-pointer">Design</a></li>
                                <li><a className="hover:text-brand1 transition-colors cursor-pointer">Marketing</a></li>
                                <li><a className="hover:text-brand1 transition-colors cursor-pointer">Advertisement</a></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h6 className="font-bold uppercase tracking-wider text-sm text-gray-300">Company</h6>
                            <ul className="space-y-4 text-gray-400">
                                <li><a className="hover:text-brand1 transition-colors cursor-pointer">About us</a></li>
                                <li><a className="hover:text-brand1 transition-colors cursor-pointer">Contact</a></li>
                                <li><a className="hover:text-brand1 transition-colors cursor-pointer">Jobs</a></li>
                                <li><a className="hover:text-brand1 transition-colors cursor-pointer">Press kit</a></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h6 className="font-bold uppercase tracking-wider text-sm text-gray-300">Newsletter</h6>
                            <p className="text-gray-400 text-sm">Subscribe to get the latest updates and offers.</p>
                            <div className="flex flex-col gap-3">
                                <input type="email" placeholder="email@example.com" className="bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-brand1 transition-colors" />
                                <button className="bg-linear-to-r from-brand1 to-brand2 text-white font-bold py-3 rounded-full hover:shadow-lg transition-all active:scale-95">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row pt-8 border-t border-white/5 w-full justify-between items-center gap-6 text-gray-500 text-sm'>
                        <p>© 2026 Digitools. All rights reserved.</p>
                        <div className='flex gap-6'>
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
