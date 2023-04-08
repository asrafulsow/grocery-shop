import React from 'react';
import grocery from "../../../images/grocery1.png"
import grocery1 from "../../../images/grocery2.png"
import grocery2 from "../../../images/grocery3.png"

const BannerInfo = () => {

    return (
        <div className='p-10'>
            <div className="top-info-area">
                <div class="grid gap-4 md:grid-cols-3 grid-cols-1">
                    <div className='flex md:justify-center justify-between items-center'>
                        <div className="bannerInfoContent">
                            <p className='text-red-600 font-semibold'>Explore sesional</p>
                            <h1 className='font-bold text-2xl'>ORGANIC <br /> VAGITABLE</h1>
                            <small className='mt-3'>Best Hor Health</small><br />
                            <button className='mt-3 px-6 py-2 bg-green-600 text-white rounded-sm'>Shop All</button>
                        </div>
                        <div className="bannerInfoImage">
                            <img src={grocery} alt="" />
                        </div>
                    </div>
                    <div className='flex md:justify-center justify-between items-center'>
                        <div className="bannerInfoContent">
                            <p className='text-red-600 font-semibold'>Explore sesional</p>
                            <h1 className='font-bold text-2xl'>FARM <br /> VAGITABLE</h1>
                            <small className='mt-3'>Best Hor Health</small><br />
                            <button className='mt-3 px-6 py-2 bg-green-600 text-white rounded-sm'>Shop All</button>
                        </div>
                        <div className="bannerInfoImage">
                            <img src={grocery1} alt="" />
                        </div>
                    </div>
                    <div className='flex md:justify-center justify-between items-center'>
                        <div className="bannerInfoContent">
                            <p className='text-red-600 font-semibold'>Explore sesional</p>
                            <h1 className='font-bold text-2xl'>100% NATURAL <br /> FRUITS</h1>
                            <small className='mt-3'>Best Hor Health</small><br />
                            <button className='mt-3 px-6 py-2 bg-green-600 text-white rounded-sm'>Shop All</button>
                        </div>
                        <div className="bannerInfoImage">
                            <img src={grocery2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BannerInfo;