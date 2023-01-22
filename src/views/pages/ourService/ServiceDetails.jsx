import React from 'react'

const ServiceDetails = ({ item }) => {

    return (
        <div className='mx-auto relative '>
            <div className='relative'>
                <div className=''>
                    <div className='grid grid-cols-2 md:gap-5 gap-2'>
                        {
                            item?.image.map((item, id) =>
                                <div key={id}>
                                    <img src={item} alt="" className='h-full min-w-full' />
                                </div>
                            )
                        }
                    </div>
                    <div className='mt-8 mb-20'>
                        <div>
                            <h1 className='md:text-5xl text-3xl font-bold'>{item?.title}</h1>
                            <p className='h-[2px] w-28 bg-white mt-5'></p>
                        </div>
                        <div className='font-medium md:text-sm text-xs mt-10'>
                            {item.id === 1 && <div>
                                <p className='md:text-base text-sm md:font-bold font-medium'>WAVE BOX delivering the best web development services to craft bespoke websites, web-tools, etc. to global businesses and startups with 100% project delivery and we are specialized in Personal, Organizations & E-Commerce websites.</p><br />
                                <p>
                                    Living in the digital world, A website is the online portfolio of a company. Nowadays, people are busy and
                                    smart. They have no time to go to the store. They search the internet to find out about a product or service
                                    before making a purchase. They can learn about the brand, features, price, size, colour through their
                                    website. A website not only provides credibility but also helps to give a positive impression that your
                                    company is bigger and more successful.<br /><br />
                                    Ultimately A website is important because it helps build credibility as a business, is also important for your
                                    business to promote your brand and to generate more leads and optimize conversion rate & consequently
                                    growing business.
                                </p><br />
                                <p>I. Organizational Website</p>
                                <p>ii. E-commerce Website</p>
                                <p>iii. Personal Portfolio Website</p>
                                <p>iv. Blog wWebsite</p>
                                <p>v. Business Website</p>
                                <p>vi. Online Community Website</p>
                                <p>vii. Membership Website</p>
                                <p>viii. Online Courses Website</p>
                                <p>ix. Online Marketplace Website</p>
                                <p>x. Dropshipping Website</p>
                                <p>xi. Affiliate Website</p>
                                <p>xii. Micro Job Website</p>
                                <p>xiii. Job Board Website</p>
                                <p>xiv. Directory Listing Website</p>
                                <p>xv. Travel Website</p>
                                <p>xvi. Fashion / Lifestyle Website</p>
                                <p>xvii. Social Network Website</p>
                            </div>}
                            {item.id === 2 && <div>
                                <p className='md:text-base text-sm md:font-bold font-medium'>WAVE BOX offer top backend development services for web applications. Our master-coders provide custom REST API services and solutions to make the web apps interactive and user-friendly. We hold years of expertise in building on-site as well as cloud-based backend app solutions web and IoT applications.  Whereas the powerful backend we develop will scale up your app when needed, performs faster and offers seamless 3rd party integration with optimum data storage security.</p>
                            </div>}

                            {item.id === 3 && <div>
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
                            </div>}

                            {item.id === 4 && <div>
                                <p className='md:text-base text-sm md:font-bold font-medium'>A beautiful brand and world-class website won’t do much for your business without customers. We transform websites, search engines and social media into powerful marketing tools that bring new customers through the door using the latest in content marketing and inbound strategy. In the digital arena where business and commerce are heading to, Digital marketing tools and techniques provide business owners the best chances for competition, survival and even business growth. Digital marketing provides cost-effective marketing channels that deliver results and reports claimed getting considerable savings by using digital marketing methods of promotion for their products and services. Our digital marketing wings served by streamlining digital marketing campaigns towards conversion optimization.</p><br />

                                <p>o Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.</p>
                                <p>o Google & You Tube AdSense</p>
                                <p>o Social media marketing</p>
                                <p>o Email marketing</p>
                                <p>o Content marketing</p>
                            </div>}


                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ServiceDetails