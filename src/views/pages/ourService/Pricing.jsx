import React from 'react'
import { TiTick } from "react-icons/ti"
import { CgEditBlackPoint } from "react-icons/cg"

const Pricing = () => {
    return (
        <div className='py-20 bg-[#E2E2E2] h-full w-full text-black'>
            <div className='mt-8 mb-20'>
                <h1 className='flex justify-center md:text-5xl text-3xl font-bold'>E-Commerce Website Pricing</h1>
                {/* <p className='h-[2px] w-28 bg-white mt-5'></p> */}
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 xl:max-w-[1200px] px-5 md:mx-auto gap-5 md:gap-0'>
                <div className='bg-white flex flex-col gap-y-5 xl:p-10 p-5 rounded-md'>
                    <div>
                        <h1 className='text-2xl font-bold'>E-Commerce Website (Wordpress)</h1>
                    </div>
                    <div className='text-sm text-gray-600 font-medium'>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veniam deserunt velit harum quas, debitis modi asperiores. Delectus, adipisci veniam!</p> */}
                    </div>
                    <div className='text-2xl font-bold'>
                        <p>BDT 25,000 <span className='text-sm'>Minimum</span></p>
                    </div>
                    <div >
                        <h1 className='font-bold mb-3'>Features</h1>
                        <div className='text-sm text-gray-600 font-medium flex flex-col gap-y-1'>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Mordan U/I & U/X</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Mobile Responsive Design</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Product Management System</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Order & Return Management System</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Customer Managment System</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Invoice Generate</p>
                            </div>

                        </div>
                    </div>

                    <div className='text-center mt-5'>
                        <a href='tel:+8801677515579' className='px-10 py-2 bg-transparent lg:hover:bg-[#EC385B] lg:hover:border-[#EC385B] duration-500 lg:hover:text-white rounded-md border-2 border-black'>Contact Us</a>
                    </div>
                </div>

                <div className='bg-[#222D3F] text-white flex flex-col gap-y-5 xl:px-10 px-5 py-5 md:py-8 xl:py-16 rounded-md md:h-[110%] md:-mt-[7%] lg:-mt-[6%]'>
                    <div>
                        <h1 className='text-2xl font-bold'>E-Commerce Website (Laravel)</h1>
                    </div>
                    <div className='text-sm font-medium'>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veniam deserunt velit harum quas, debitis modi asperiores. Delectus, adipisci veniam!</p> */}
                    </div>
                    <div className='text-2xl font-bold'>
                        <p>BDT 40,000 <span className='text-sm'>Minimum</span></p>
                    </div>
                    <div >
                        <h1 className='font-bold mb-3'>Features</h1>
                        <div className='text-sm  font-medium flex flex-col gap-y-1'>
                        <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Mordan U/I & U/X</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Mobile Responsive Design</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Product Management System</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Order & Return Management System</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Customer Managment System</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Invoice Generate</p>
                            </div>

                        </div>
                    </div>

                    <div className='text-center mt-5'>
                        <a href='tel:+8801677515579' className='px-10 py-2 bg-[#EC385B] lg:hover:bg-transparent duration-500  rounded-md border-2 border-[#EC385B]'>Contact Us</a>
                    </div>
                </div>
                <div className='bg-white flex flex-col gap-y-5 xl:p-10 p-5 rounded-md'>
                    <div>
                        <h1 className='text-2xl font-bold'>E-Commerce Website (React.JS)</h1>
                    </div>
                    <div className='text-sm text-gray-600 font-medium'>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veniam deserunt velit harum quas, debitis modi asperiores. Delectus, adipisci veniam!</p> */}
                    </div>
                    <div className='text-2xl font-bold'>
                        <p >BDT 60,000 <span className='text-sm'>Minimum</span>  </p>
                    </div>
                    <div >
                        <h1 className='font-bold mb-3'>Features</h1>
                        <div className='text-sm text-gray-600 font-medium flex flex-col gap-y-1'>
                        <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Mordan U/I & U/X</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Mobile Responsive Design</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Product Management System</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Order & Return Management System</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Customer Managment System</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TiTick />
                                <p>Invoice Generate</p>
                            </div>

                        </div>
                    </div>

                    <div className='text-center mt-5'>
                        <a href='tel:+8801677515579' className='px-10 py-2 bg-transparent lg:hover:bg-[#EC385B] lg:hover:border-[#EC385B] duration-500 lg:hover:text-white rounded-md border-2 border-black'>Contact Us</a>
                    </div>
                </div>

            </div>


            <div className='pt-40 xl:max-w-[1200px] px-5 md:mx-auto'>
                <h1 className='text-4xl font-bold'>Add-Ons</h1>

                <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-3 mt-5'>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Payment Gateway</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Discount/ Offer</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Product Variant (Dynamic)</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Multi Language</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Multi Currency</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Extra Pages</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Affiliation</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Extra Sub-Category</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Product Duplication</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Stock Out Product</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Stock Out Alert </li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Top Selling Product</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Lowest Selling Product</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>News Letter</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Website Visitor Monitoring</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Website Setup</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Mobile Bottom Navbar</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Activity Log</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Advance Sales Report</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Employe Managment</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgEditBlackPoint />
                        <li>Ads Integration</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing