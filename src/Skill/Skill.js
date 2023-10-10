import React from 'react';
import './Skills.css'; 

const Skill = () => {
    return (
        <>
            <div className='skills-page'>
                <div className="container">
                    <h1 className='title_Head2'>Skills</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="skill-card">
                                <img src="https://i.pinimg.com/1200x/52/2e/6b/522e6bc1a11d1726a35f81cbd979395f.jpg" alt="HTML" style={{width: '13rem',height:'10rem'}}/>
                                <h3>HTML & CSS</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skill-card">
                                <img src="https://logowik.com/content/uploads/images/t_3799-javascript.jpg" alt="JavaScript" style={{width: '13rem',height:'10rem'}}/>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skill-card">
                                <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="React.js" style={{width: '13rem',height:'10rem'}} />
                                <h3>React.js</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skill-card">
                                <img src="https://w7.pngwing.com/pngs/353/648/png-transparent-node-js-javascript-hazelcast-openshift-runtime-system-node-js-angle-text-logo.png" alt="Node.js" style={{width: '13rem',height:'10rem'}} />
                                <h3>Node.js</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skill;
