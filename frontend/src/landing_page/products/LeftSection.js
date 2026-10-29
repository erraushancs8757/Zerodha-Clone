import React from 'react';
function LeftSection({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore  }) {
    return (

       <div className='container mt-5 mb-5'>
        <div className='row '>
            <div className='col-6 mb-5 p-5 '>
                <img src={imageUrl} alt='imgUrl'/>
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p className='mt-5 '>{productDescription}</p>
                  

                 <div className='mt-5 '>
                 <a href={tryDemo} style={{textDecoration:"none"}}>TryDemo</a>
                 <a href={learnMore} style={{marginLeft:"20px", textDecoration:"none"}}>Learn More</a>
                 </div >
                 
                 <div className='mt-5'>
                 <a href={googlePlay}> <img src='media\images\googlePlayBadge.svg' alt='googlePlayBadge'/> </a>
                 <a href={appStore} style={{marginLeft:"20px"}}> <img src='media\images\appstoreBadge.svg' alt='appstoreBadge'/> </a>
                 </div>

                 
                 
            </div>
            
        </div>
       </div>
    );
}

export default LeftSection;