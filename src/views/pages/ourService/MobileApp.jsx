import React from 'react'
import img1 from '../../../assets/images/WebServices/Mobile_App/mobile_app1.jpg'
import img2 from '../../../assets/images/WebServices/Mobile_App/mobile_app2.jpg'
import img3 from '../../../assets/images/WebServices/Mobile_App/mobile_app3.jpg'
import img4 from '../../../assets/images/WebServices/Mobile_App/mobile_app4.jpg'
import img5 from '../../../assets/images/WebServices/Website/01.jpg'
import img6 from '../../../assets/images/WebServices/Web_App/1.jpg'
import img7 from '../../../assets/images/WebServices/Social_Media/1.jpg'
import Footer from '../common/Footer'
import { NavLink } from 'react-router-dom'

const MobileApp = () => {

    return (
        <div className='pt-14 bg-black text-white'>
            <div id="section-1" className="grid grid-cols-4 py-10 px-5 xl:py-20 xl:px-40 gap-10 h-full w-full" >
                <div className="xl:col-span-3 col-span-4">

                    <div className='mx-auto relative '>
                        <div className='relative'>
                            <div className=''>
                                <div className='grid grid-cols-2 md:gap-5 gap-2'>
                                    <div>
                                        <img src={img1} alt="" className='h-full min-w-full' />
                                    </div>
                                    <div>
                                        <img src={img2} alt="" className='h-full min-w-full' />
                                    </div>
                                    <div>
                                        <img src={img3} alt="" className='h-full min-w-full' />
                                    </div>
                                    <div>
                                        <img src={img4} alt="" className='h-full min-w-full' />
                                    </div>
                                </div>
                                <div className='mt-8 mb-20'>
                                    <div>
                                        <h1 className='md:text-5xl text-3xl font-bold'>Mobile App Development</h1>
                                        <p className='h-[2px] w-28 bg-white mt-5'></p>
                                    </div>
                                    <div className='font-medium md:text-sm text-xs mt-10'>
                                        <div>
                                            <p className='md:text-base text-sm md:font-bold font-medium'>Develop Tailored, Domain-Specific Mobile Solutions To Help Meet Your Unique Demands. Employ A Platform-Driven approach To App Development, while ensuring Cost-Efficiency, Better Experiences, Digital at Scale & Speed. Advance Your Business.</p><br />
                                            <p>
                                                Mobile apps are becoming increasingly popular among businesses and service providers. Custom mobile
                                                apps are gaining momentum – as per the reports, on an average, about 7.5 hours per employee per week
                                                are saved by using customized mobile apps, and 82% of the business owners believe that it helped them
                                                earn additional business revenues! Below are some of the most popular advantages of custom mobile app
                                                development for businesses –
                                            </p><br />

                                            <p>o Improves Efficiency</p>
                                            <p>o Offers High Scalability</p>
                                            <p>o Secures Your App Data</p>
                                            <p>o Integration with Existing Software</p>
                                            <p>o Easy to Maintain</p>
                                            <p>o Improves Customer Relationship</p>
                                            <p>o Facilitates New Client Data Retrieval</p>
                                            <p>o Provides Real-time Project Access</p>
                                            <p>o Ease in Project Management</p>
                                            <p>o Record Digital Files for Accountability</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div className='xl:col-span-1 col-span-4'>
                    <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-x-5 gap-y-5'>
                        <NavLink to='/website-development'><div>
                            <img src={img5} alt="" />
                            <h1 className='sm:text-sm text-xs font-bold mt-3'>Website Development</h1>
                        </div></NavLink>
                        <NavLink to='/web-application-development'><div>
                            <img src={img6} alt="" />
                            <h1 className='sm:text-sm text-xs font-bold mt-3'>Web Application Development</h1>
                        </div></NavLink>
                        <NavLink to='/social-media-marketing'><div>
                            <img src={img7} alt="" />
                            <h1 className='sm:text-sm text-xs font-bold mt-3'>Social Media Marketing</h1>
                        </div></NavLink>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default MobileApp