import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuickView from '../QuickView/QuickView';

const FlashSingleProduct = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [view, setView] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    return (
        <div
            className="flex flex-col justify-center p-4  border"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <QuickView to={`/home/${product._id}`} view={view} setView={setView}></QuickView>
            <Link to={`/home/${product._id}`}>
                <div className="">
                    <img className='className={`w-64 h-[200px] object-cover  rounded-lg transition-all duration-300' src={product.image} alt="" />
                </div>
            </Link>

            <h3 className="text-base font-medium mt-4 mb-2">
                {product?.title}
            </h3>
            <p className="mt-2">
                <del className="text-gray-300">$150.00</del>
                <span className="text-red-600"> $129.00</span>
            </p>
            <div className="cart-footer space-x-2">
                <Link to={`/home/${product._id}`}>
                    <span className="cursor-pointer text-xs font-bold hover:underline border">
                        ADD TO CART
                    </span>
                </Link>
                <span
                    onClick={() => setView(true)}
                    className="cursor-pointer text-xs font-bold hover:underline border"
                >
                    QUICK VIEW
                </span>
            </div>
        </div>
    );
};

export default FlashSingleProduct;