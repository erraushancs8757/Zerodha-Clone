import React from 'react';
function Team() {
    return ( 
         <div className='container mt-5 p-5  border-top'>
            <div className='row p-5 mt-5 mb-5'>
                <h2 className='  text-center'>People</h2>
            </div>

            <div className='row p-5 mt-5 mb-5 '  style={{lineHeight:"1.9", fontSize:"1.2rem"}}>
                    <div className='col-6 p-5 mt-5 text-center'>
                        <img src='media\images\Raushan.10.jpg' alt='raushanImage' style={{width:"220px", borderRadius:"100%", marginTop:"15px" }}/>
                        <h4 className='mt-5'>Raushan kumar</h4>
                        <h5>  Founder, CEO</h5>
                       
                    </div>
                    <div className='col-6 p-5 mt-5'>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.

                        </p>

                        <p>
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p>
                            Playing basketball is his zen.
                        </p>
                        <p >
                            Connect on <a href='/about' style={{textDecoration:"none"}}> Homepage</a> / <a href='/about' style={{textDecoration:"none"}}>TradingQnA</a>  / <a href='/about' style={{textDecoration:"none"}}>Twitter</a> 
                        </p>
                    </div>
                </div>
            </div>
     );
}

export default Team;