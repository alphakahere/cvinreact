import React from 'react'
import photo from './images/photo.jpeg'
import './Profile.css'
function Profile() {
    return (
        <div className="col-12 col-md-4 pt-3 lef-area">
            <div className="card">
                <img src={photo} className="mx-auto card-img" alt="My_Photo_CV"/>
                <div className="card-body">
                    <h2 className="card-title text-center w-100">Alpha Diallo</h2>
                    <p className="card-text text-center">Web Developer</p>
                    <hr/>
                    <h6><i class="fas fa-phone-alt mr-4"></i><span className="font-italic">00221775280693</span></h6>
                    <h6><i class="fas fa-envelope mr-4"></i><span className="font-italic">alphakahere@gmail.com</span></h6>
                    <h6><i class="fas fa-map-marker-alt mr-4"></i><span>Mermoz, Dakar</span></h6>
                    <hr />
                    {/** Technical Skills */}
                   
                    <div className="technicalSkills">
                        <h3><i class="fas fa-book mr-3"></i><span className="text">Technical Skills</span></h3>
                        <div className="card-body">
                            <div className="skill mb-4 ml-4">
                                <h6>HTML/CSS</h6>
                                <div className="progress" style={{height:'5px'}}>
                                    <div className="progress-bar" role="progressbar" style={{width: '98%', backgroundColor:'black'}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="skill mb-4 ml-4">
                                <h6>Bootstrap</h6>
                                <div className="progress" style={{height:'5px'}}>
                                    <div className="progress-bar" role="progressbar" style={{width: '90%', backgroundColor:'black'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="skill mb-4 ml-4">
                                <h6>JavaScript</h6>
                                <div className="progress" style={{height:'5px'}}>
                                    <div className="progress-bar" role="progressbar" style={{width: '85%', backgroundColor:'black'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="skill mb-4 ml-4">
                                <h6>Wordpress</h6>
                                <div className="progress" style={{height:'5px'}}>
                                    <div className="progress-bar" role="progressbar" style={{width: '70%', backgroundColor:'black'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="skill mb-4 ml-4">
                                <h6>React</h6>
                                <div className="progress" style={{height:'5px'}}>
                                    <div className="progress-bar" role="progressbar" style={{width: '50%', backgroundColor:'black'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div> 
                            <div className="skill mb-4 ml-4">
                                <h6>SQL</h6>
                                <div className="progress" style={{height:'5px'}}>
                                    <div className="progress-bar" role="progressbar" style={{width: '80%', backgroundColor:'black'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>                              
                        </div>
                        <hr />
                        <div className="personnalSkills">
                            <h3><i class="fas fa-book mr-3"></i><span className="text">Personnal Skills</span></h3>
                            <div className="card-body">
                                <div className="skill mb-4 ml-4">
                                    <h6>Creativity</h6>
                                    <div className="progress" style={{height:'5px'}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '95%', backgroundColor:'black'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill mb-4 ml-4">
                                    <h6>LeaderShip</h6>
                                    <div className="progress" style={{height:'5px'}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '95%', backgroundColor:'black'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill mb-4 ml-4">
                                    <h6>Communication</h6>
                                    <div className="progress" style={{height:'5px'}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '98%', backgroundColor:'black'}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill mb-4 ml-4">
                                    <h6>Curiosity</h6>
                                    <div className="progress" style={{height:'5px'}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '99%', backgroundColor:'black'}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill mb-4 ml-4">
                                    <h6>Rigorous</h6>
                                    <div className="progress" style={{height:'5px'}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '88%', backgroundColor:'black'}} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
