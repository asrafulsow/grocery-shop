import React, { useEffect, useState } from 'react';
import FlashSingleProduct from '../FlashSingleProduct/FlashSingleProduct';

const FlashSale = () => {
    const [second, setSecond] = useState(9);
    const [minute, setMinute] = useState(12);
    const [hour, setHour] = useState(10);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (second === 0 && minute === 0 && hour === 0) {
                clearInterval(intervalId);
            } else {
                if (second === 0 && minute === 0) {
                    setHour(hour - 1);
                    setMinute(60);
                } else {
                    if (second === 0) {
                        setMinute(minute - 1);
                        setSecond(59);
                    } else {
                        setSecond(second - 1);
                    }
                }
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [second, minute, hour]);

    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('/product.JSON')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <div className="flashsale-area w-11/12 mx-auto pb-10">
                <div className="top-content-flashsale inline-flex pb-10 space-x-5">
                    <h2 className="font-bold text-xl">Flash Sale Today!</h2>
                    <p>Deals ends in :</p>
                    {/* count-down start */}
                    <div className="count-down">
                        <span className="countdown font-sans text-base bg-red-600 text-white p-2">
                            <span style={{ "--value": hour }}></span>h:
                            <span style={{ "--value": minute }}></span>m:
                            <span style={{ "--value": second }}></span>s
                        </span>
                    </div>
                </div>
                {/* single Flash Product */}
                <div className="single_Flash_Prouct-area">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSale;