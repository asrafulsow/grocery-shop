import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import './banner.css'
import banner1 from "../../../images/baner1.png";
import banner2 from "../../../images/baner2.png";
import banner3 from "../../../images/baner3.png"
import { FcViewDetails, FcFlashOn, FcOrgUnit, FcMultipleDevices, FcWebcam, FcMultipleSmartphones, FcShop, FcSelfie } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <div className=" flex justify-center flex-row h-1/4 overflow-hidden pb-5 pt-5 pr-10 w-[90%] mx-auto">
                {/* the first hover with navigation part will be here  */}
                <div className=' divide-y divide-gray-300 bg-[rgba(98,255,111,0.78)] w-1/4 mx-auto p-5 hidden md:block'>
                    {/* banner category area */}
                    <h2 className='text-xl font-bold mb-5'>Categoriess</h2>
                    <div className="all-category-area space-y-5 font-bold text-base mt-5 list-none cursor-pointer pt-5">
                        {/* single catagory */}
                        <li className='flex items-center'>
                            <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                                <FcViewDetails className='w-full h-[20px]' />
                            </div>
                            <span>All Categories</span>
                        </li>
                        {/* single catagory */}
                        <Link to="/shop" className='flex items-center'>
                            <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                                <FcFlashOn className='w-full h-[20px]' />
                            </div>
                            <span>Baking Materials</span>
                        </Link>
                        {/* single catagory */}
                        <Link to="/shop" className='flex items-center'>
                            <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                                <FcOrgUnit className='w-full h-[20px]' />
                            </div>
                            <span>Bread and Juice</span>
                        </Link>
                        <li></li>
                        {/* single catagory */}
                        <Link to="/shop" className='flex items-center'>
                            <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                                <FcMultipleSmartphones className='w-full h-[20px]' />
                            </div>
                            <span> Fresh Seafood</span>
                        </Link>
                        {/* single catagory */}
                        <Link to="/shop" className='flex items-center'>
                            <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                                <FcMultipleDevices className='w-full h-[20px]' />
                            </div>
                            <span>Milks and Dairies</span>
                        </Link>
                        {/* single catagory */}
                        <Link to="/shop" className='flex items-center'>
                            <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                                <FcSelfie className='w-full h-[20px]' />
                            </div>
                            <span>Vegetibles</span>
                        </Link>
                        {/* single catagory */}
                        <Link to="/shop" className='flex items-center'>
                            <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                                <FcShop className='w-full h-[20px]' />
                            </div>
                            <span>Deals the Day</span>
                        </Link>
                        {/* single catagory */}
                        <Link to="/shop" className='flex items-center'>
                            <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                                <FcWebcam className='w-full h-[20px]' />
                            </div>
                            <span>Clothing & Beauty</span>
                        </Link>
                    </div>
                    {/* banner category area */}
                </div>

                {/* and this is the caruousel part  */}
                <Swiper className="md:w-3/4 md:h-1/2 md:basis-3/4 md:float-right	"
                    effect={"cube"}
                    rewind={true}
                    navigation={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Autoplay, Pagination]}
                >
                    <SwiperSlide>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div>
                                <p className='md:text-5xl text-2xl font-bold my-4'>NEW <span className='text-green-600'>ORGANIC</span></p>
                                <p className='md:text-5xl text-2xl font-bold my-4'><span className='font-normal'>FRESH</span></p>
                                <p className='md:text-5xl text-2xl font-bold'><span className='font-normal'>VEGITABLE</span></p>
                                <Link to="/shop"><button className="btn md:btn-wide bg-green-600 my-9">Shop Now</button></Link>
                            </div>
                            <img className='box-border md:h-[80%] h-20% w-1/2' src={banner1} alt="" />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div>
                                <p className='md:text-5xl text-2xl font-bold my-4'>NEW <span className='text-green-600'>100%</span></p>
                                <p className='md:text-5xl text-2xl font-bold my-4'><span className='font-normal'>NATURAL</span></p>
                                <p className='md:text-5xl text-2xl font-bold'><span className='font-normal'>FRUITS</span></p>
                                <Link to="/shop"><button className="btn md:btn-wide bg-green-600 my-9">Shop Now</button></Link>
                            </div>
                            <img className='box-border md:h-[80%] h-20% w-1/2' src={banner2} alt="" />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div>
                                <p className='md:text-5xl text-2xl font-bold my-4 '>BEST <span className='text-green-600'>IN QUALITY</span></p>
                                <p className='md:text-5xl text-2xl font-bold my-4'><span className='font-normal'>FRESH</span></p>
                                <p className='md:text-5xl text-2xl font-bold'>8K <span className='font-normal'>GROCERY</span></p>
                                <Link to="/shop"><button className="btn md:btn-wide bg-green-600 my-9">Shop Now</button></Link>
                            </div>
                            <img className='box-border md:h-[80%] h-20% w-1/2' src={banner3} alt="" />
                        </div>

                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default Banner;