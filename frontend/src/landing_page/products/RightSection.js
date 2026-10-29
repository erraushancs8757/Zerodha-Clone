import React from 'react';
function RightSection({ imageUrl, productName, productDescription, learnMore, KiteConnect}) {
    return (
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6 mt-5 p-5'>
                    <h1>{productName}</h1>
                    <p >{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{ textDecoration: "none" }}>LearnMore  <i class="fa-solid fa-arrow-right-long"></i></a>
                        {/* <a href={KiteConnect} style={{ textDecoration: "none" }}>Kite Connect  <i class="fa-solid fa-arrow-right-long"></i></a> */}
                    </div>
                </div>
                <div className='col-6'>
                    <img src={imageUrl} alt='imageUrl' />
                </div>
            </div>
        </div>
    );
}

export default RightSection;