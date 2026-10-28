import React from 'react';
function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center mt-5 p-5'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                

                <div className='col-4  mt-5' >
                    <img src='media\images\zerodhaFundhouse.png' alt='zerodhaFundhouse'/>
                    <p className='mt-5 mx-5 text-small'>Our asset management venture
                      that is creating simple and transparent index
                       funds to help you save for your goals.</p>
                </div>
                <div className='col-4  mt-5  ' >
                     <img src='media\images\sensibullLogo.svg' alt='sensibullLogo' style={{width:"200px",  height:"110px"}}/>
                    <p className='mt-5 mx-5 text-small'>Options trading platform that lets you
                           create strategies, analyze positions, and examine
                          data points like open interest, FII/DII, and more.</p>
                </div>

                <div className='col-4  mt-5' >
                    <img src='media\images\tijori.svg' alt='tijori'/>
                    <p className='mt-5 mx-5 text-small'>Investment research platform
                  that offers detailed insights on stocks,
                     sectors, supply chains, and more.</p>
                </div>



                 <div className='col-4  mt-5' >
                    <img src='media\images\streakLogo.png' alt='zerodhaFundhouse' style={{width:"200px",  height:"110px"}}/>
                    <p className='mt-5 mx-5 text-small'>Systematic trading platform
                      that allows you to create and backtest
                          strategies without coding.</p>
                </div>
                <div className='col-4  mt-5  ' >
                     <img src='media\images\smallcaseLogo.png' alt='sensibullLogo' style={{width:"200px",  height:"110px"}}/>
                    <p className='mt-5 mx-5 text-small'>Thematic investing platform
                      that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>

                <div className='col-4  mt-5' >
                    <img src='media\images\dittoLogo.png' alt='tijori' style={{width:"200px",  height:"110px"}}/>
                    <p className='mt-5 mx-5 text-small'>Personalized advice on life
                      and health insurance. No spam
                         and no mis-selling.</p>
                </div>

                <button className='btn btn-solid theme-primary p-2 fs-md ' style={{ width: "20%", margin: "0 auto" }}>Sign Now</button>
            </div>
        </div>

     );
}

export default Universe;