import React from 'react';
import './Welcome.css'
import logo from './logo.png';
import Principal from './Principal.png'
function Services() {
    return (
        <>


        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-4">
                                <div className="card" style={{ width: "20rem", }}>
                                    <img src={logo} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">vision and mission </h5>
                                        <p className="card-text"><p><b> Vision : </b>To Groom - Motivated, Environment friendly, Self-esteemed, Creative and Oriented Engineers.</p><p>

<b>Mission :</b> To Develop Industry Oriented Manpower to accept the challenges of Globalization by,
  -  Promoting Value Education through motivated trained faculty 
  -  Maintaining conducive environment for education at affordable cost
  -  Promoting Industry Institute interaction 
  -  involving alumni.</p>
</p>
                                        <a href="#" className="btn btn-primary">click here for more</a>
                                    </div>
                                </div></div>
                            <div className="col-4">
                                <div className="card text-white bg-primary mb-3" style={{ width: "30rem", }}>
                                    <div className="card-header"><h2>principal's message </h2></div>
                                    <img src={Principal} className="card-img-top" alt="..." />

                                    <div className="card-body">
                                        <h5 className="card-title">
Dr. A. A. Keste 
Principal, MES College of Engineering
</h5>
                                        <p className="card-text"><p>Dear Students,
Welcome to Modern Education Society's College of Engineering, Pune-01. Ours is one of the leading institutions imparting quality technical education in Mechanical Engineering, E & TC Engineering and Computer Engineering four year degree courses and Two years PG Courses in Computer Engineering, Signal Processing and Mechancial Design Engineering affiliated to University of Pune. It has been possible only because of outstanding reputation and dedication of Modern Education Society for all these years under able guidance of Visionary and International Educator Sir V. K. Joag and others. 
</p>
<p>
Our vision is 'To produce world class engineers for converting global challenges into the opportunities through the value embedded quality Technical education'. All the teaching faculty in the institute, strive hard to impart training for the students to make them competent, motivated engineers and scientists ultimately developing the institute as a centre of academic excellence. They serve the purpose of inculcating a solid foundation of knowledge and enhancing confidence, creativity and innovation in the students. Here, we constantly work hard to upgrade the existing labs in all the three departments. One such lab worth to mention here is 'BAKER-MESCOE Metrology Lab' in Mechanical Engineering Department. This is state of the art lab where the students are exposed to modern and sophisticated instruments and test facilities. 
</p>
<p>
The college has conducive environment and enormous learning opportunities for the right candidates to foster their character building and good future life ultimately to emerge as tomorrow's nation builders.
Good luck for your bright and challenging career!!
</p> 
</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                </div><div className="col-4">
                                <div className="card text-white bg-secondary mb-3" style={{ width: "18rem", }}>
                                    <div className="card-header">Intake Capacity</div>
                                    <div className="card-body">
                                        <h5 className="card-title"> Under Graduate courses</h5><p className="card-text">
                                       
Computer Engineering Intake - 120 ( 2nd Shift - 60 ) Electronics & Telecommunication Engineering Intake - 120 Mechanical Engineering Intake - 120
</p>
<h5 className="card-title"> Post Graduate courses</h5>

<p className="card-text">



ME in Mechanical Engineering Design Intake - 24 ME in Signal Processing Intake - 24 ME in Computer Engineering Intake - 24
</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}

export default Services;
