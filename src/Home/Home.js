import React from "react";
import Typewriter from 'typewriter-effect';

function Home()
{
    return(
        <>
        <div className="home-page">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-column vh-100 justify-content-center align-items-center home">
                        <h1 className="name">boobathi d</h1>

                        <h2 className=""><Typewriter
                        options={{
                            strings: ['Fullstack Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                        /></h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Home;