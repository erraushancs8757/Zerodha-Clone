import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 p-5 border-bottom'>
                <h1>Charges</h1>
                <p className='mb-5'>List of all charges and taxes</p>
            </div>

            <div className='row p-5 mt-5'>
                <div className='col-4 p-5'>
                    <img src='media\images\pricing0.svg'/>
                    <h2 className='fs-lg'>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media\images\intradayTrades.svg'/>
                    <h2 className='fs-lg'>Intraday and F&O trades</h2>
                     <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>


                </div>
                <div className='col-4 p-5'>
                     <img src='media\images\pricing0.svg'/>
                    <h2 className='fs-lg'>Free direct MF</h2>
                     <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;