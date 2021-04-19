import React from 'react';
import logo from './football.jpg';

import './App.css';
import ListStudentComponent from './ListStudentComponent';

function Home() {
    return (
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

                    <div className="jumbotron">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-8">
                                    <h1 className="display-4">Mescoe Notice Board </h1>
                                    <p className="lead"><h1>list of students selected for National Level Sports Competition</h1></p>
                                    <hr className="my-4" />
                                   
<div>   <ListStudentComponent/></div>

                                </div>
                                <div className="col-4">
                                    <img src={logo} className="App-logo" alt="Logo"/>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
