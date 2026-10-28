import React from 'react';
function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-6 p-5 '>
                    <img src='media/images/largestBroker.svg' alt='largestBroker' />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1 >Largest stock broker in india </h1>
                    <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit cupiditate ipsum quod placeat dignissimos in et autem ipsa nobis. Amet perferendis ducimus voluptates ullam iste explicabo neque voluptatibus? Qui, expedita!</p>

                    <div className='row'>

                        <div className='col-6'>
                            <ul>
                                <li>Features of options</li>
                                <li>Commodity derivative</li>
                                <li>Features of options</li>
                            </ul>
                        </div>

                        <div className='col-6'>
                            <ul>
                                <li>Stocks & ipo</li>
                                <li>Direct mutual funds</li>
                                <li>Bonda and Gov. security</li>
                            </ul>

                        </div>
                    </div>
                    <img src='media\images\pressLogos.png' alt='pressLogos' style={{ width: "90%", height: "25%" }} />

                </div>
            </div>
        </div>

    );
}

export default Awards;