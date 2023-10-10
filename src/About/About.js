import React from "react";
import boobathi from '../Assets/boobathi.jpg';
const PDF_FILE_URL = ".../Boobathi_D-Resume.pdf"
function About()
{
    const downloadFilePDF = (url)=>{
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return(
        <>
        
        <div className="about-page">
            <div className="row">
                <div className="col-md-6 col-12 d-flex justify-content-center align-items-center vh-100">
                    <img src={boobathi} className="my-image rounded-circle" height='300px'/>
                </div>
                <div className="col-md-5 col-12 d-flex justify-content-center align-items-center vh-100">
                    <div>
                        <h1 className="">About <span className="text-success">Me</span></h1>
                        <p className="text-justify ">
                            Aspiring for the job role of fullstack developer at your company which would provide me with ample opportunities to showcase my technical abilities while working on complex projects & tasks assigned by you or your team.
                        </p>
                        <button className="title_Head4" onClick={()=>{downloadFilePDF(PDF_FILE_URL)}}>DOWNLOAD CV</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default About;