import React from 'react';
import './Certificate.css'; 

const Certificate = () => {
    return (
      <>
        <div className='Certificate_page'>
            <div className="container">
                <h1 className='title_Head1'>Certificates</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="certificate-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AsK02mLCYWdibSMEiYXh27-LyDh6FE6dGg&usqp=CAU" className="card-img-top" alt="..."/>
                            <div className="overlay">
                                <h2>JavaScript Certificate</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="certificate-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AsK02mLCYWdibSMEiYXh27-LyDh6FE6dGg&usqp=CAU" className="card-img-top" alt="..."/>
                            <div className="overlay">
                                <h2>ReactJs Certificate</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default Certificate;

