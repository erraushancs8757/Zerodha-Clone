import React from 'react';
function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>

            <div className='p-5  ' id='supportwrapper'>
                <h4>Support Portal</h4>
                <button type="button" class="btn-solid theme-primary">My Tickets</button>
            </div>

            <div className='row p-5 '>
                <div className='col-6 p-5 mt-5 mb-5'>
                    <h4>Search for an answer or browser help optics to create a ticket</h4>
                    <input placeholder='Eg: How do I open my account how do I activate F&O... ' /> <br />
                    <span style={{ textDecoration: "none" }}>Track account opening</span><br />
                    <span style={{ textDecoration: "none" }}>Track segment activation</span><br />
                    <span style={{ textDecoration: "none" }}>Intraday margins</span><br />
                    <span style={{ textDecoration: "none" }}>Kite user manual</span><br />

                </div>
                <div className='col-6 p-5 mt-5 mb-5'>
                    <h4>Featured</h4>
                    <ol>
                        <li><span style={{ textDecoration: "none" }}>Current takeovers and Delisting january-2026 </span></li>
                        <li><span style={{ textDecoration: "none" }}>latest Intraday leverages - MIS & CO</span></li>
                    </ol>


                </div>
            </div>

        </section>
    );
}

export default Hero;