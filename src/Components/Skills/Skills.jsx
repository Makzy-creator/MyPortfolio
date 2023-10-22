import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section className='skills'>
        <div className="mainText">
            <span>Technical and professional skills</span>
        </div>

        <div className="skillMain">
            <div className="left">
                <h3>Technical Skills</h3>
                <div className="skillBar">
                    <div className="info">
                        <p>HTML</p>
                        <P>99%</P>
                    </div>
                    <div className="bar">
                        <span>html</span>
                    </div>
                </div>

                <div className="skillBar">
                    <div className="info">
                        <p>CSS</p>
                        <P>80%</P>
                    </div>
                    <div className="bar">
                        <span>css</span>
                    </div>
                </div>

                <div className="skillBar">
                    <div className="info">
                        <p>ReactJs</p>
                        <P>50%</P>
                    </div>
                    <div className="bar">
                        <span>React.js</span>
                    </div>
                </div>

                <div className="skillBar">
                    <div className="info">
                        <p>javascript</p>
                        <P>40%</P>
                    </div>
                    <div className="bar">
                        <span>javascript</span>
                    </div>
                </div>
            </div>

            <div className="right">
                <h3>Professional Skills</h3>
                    <div className="professional">
                        <div className="box">
                            <div className="circle">
                                <div className="points" style="--i:1;"></div>
                                <div className="points" style="--i:2;"></div>
                                <div className="points" style="--i:3;"></div>
                            </div>
                            <div className="text">
                                <big>90%</big>
                                <small>Team Work</small>
                            </div>
                        </div>

                        <div className="box">
                            <div className="circle">
                                <div className="points" style="--i:1;"></div>
                                <div className="points" style="--i:2;"></div>
                                <div className="points" style="--i:3;"></div>
                            </div>
                            <div className="text">
                                <big>90%</big>
                                <small>Team Work</small>
                            </div>
                        </div>

                        <div className="box">
                            <div className="circle">
                                <div className="points" style="--i:1;"></div>
                                <div className="points" style="--i:2;"></div>
                                <div className="points" style="--i:3;"></div>
                            </div>
                            <div className="text">
                                <big>90%</big>
                                <small>Team Work</small>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    </section>
  )
}

export default Skills