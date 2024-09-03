import React from 'react'

const Footer = () => {
    return (
        <div className='  bg-slate-900  '>


            <div className=' grid grid-cols-1 lg:grid-cols-4 md:grid-cols-12 p-16 text-white  gap-6'>
                <div className=' flex flex-col gap-5'>
                    <h2 className=' text-4xl text-white'>Texture</h2>
                    <p>Textures and Patterns: Incorporate various materials and patterns to add depth and interest functionality with aesthetics also comfortable and practical.</p>
                </div>
                <div className=' flex flex-col gap-5'>
                    <h2 className=' text-4xl text-white'> Product</h2>
                    <p>1  Classic Fashion. <br />
                        2 New Arrivals<br />
                        3 Exclusive Offers<br />
                        4  WEEKELY OFFERS<br />
                    </p>
                </div>
                <div className=' flex flex-col gap-5'>
                    <h2 className=' text-4xl text-white'>Useful links</h2>
                    <p> YOUR ACCOUNTS <br />
                         RATE US<br />
                        DELIVERY & PRICING<br />
                        HELPS<br />
                    </p>
                </div>
                <div className=' flex flex-col gap-5'>
                    <h2 className=' text-4xl text-white'>Contact Us</h2>
                    <p>PHONE NUMBER <br />
                        INFO@gmail.COM<br />
                        RIGISTRIZATION <br />
                        AREAS<br />
                    </p>
                </div>
            </div>




        </div>
    )
}
export default Footer