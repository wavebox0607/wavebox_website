import React from 'react'

const ServiceDetails = ({ item }) => {

    return (
        <div className='mx-auto relative '>
                <div className='relative'>
                    <div className=''>
                        <div className='grid grid-cols-2 gap-5'>
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
                                <h1 className='text-5xl font-bold'>{item?.title}</h1>
                                <p className='h-[2px] w-28 bg-white mt-5'></p>
                            </div>
                            <p className='font-medium text-sm mt-10'>{item?.description}</p>
                        </div>
                    </div>

                </div>

            </div>
    )
}

export default ServiceDetails