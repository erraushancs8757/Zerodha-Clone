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
                    <a href='/support' style={{ textDecoration: "none" }}>Track account opening</a><br />
                    <a href='/support' style={{ textDecoration: "none" }}>Track segment activation</a><br />
                    <a href='/support' style={{ textDecoration: "none" }}>Intraday margins</a><br />
                    <a href='/support' style={{ textDecoration: "none" }}>Kite user manual</a><br />

                </div>
                <div className='col-6 p-5 mt-5 mb-5'>
                    <h4>Featured</h4>
                    <ol>
                        <li><a href='/support' style={{ textDecoration: "none" }}>Current takeovers and Delisting january-2026 </a></li>
                        <li><a href='/support' style={{ textDecoration: "none" }}>latest Intraday leverages - MIS & CO</a></li>
                    </ol>


                </div>
            </div>

        </section>
    );
}

export default Hero;