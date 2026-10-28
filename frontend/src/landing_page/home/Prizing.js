import React from 'react';
function Prizing() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-4'>
                    <h2 className='mb-5'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{ textDecoration: "none" }}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>

                </div>
                <div className='col-2'></div>
                <div className='col-6 text-center'>
                    <div className='row '>
                        <div className='col p-3 border'>
                            <h2 className='mb-4'>&#8377;0</h2>
                            <p>Free account opening</p>
                        </div>

                        <div className='col border p-3'>
                            <h2 className='mb-4'>&#8377;0</h2>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>

                        <div className='col border p-3'>
                            <h2 className='mb-4'>&#8377;20</h2>
                            <p>Intraday andF&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prizing;