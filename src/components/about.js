import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import image from './images/kate.png'

class About extends Component {
    render(){
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col ={12}>
                        <img src= {image}
                        alt = 'Kate'
                        className = 'img'/>
                
            <div className= 'banner-text'>
                <h1> Experienced IT professional with over 6 years of experience in Software Quality Assurance and Application Development
	•	Experienced in Full Stack Application Development
    .   Experienced in developing and establishing quality assurance standards and measures including writing and executing test plans, test cases, and tracking defects
	•	Extensive knowledge of SDLC (Software Development Life Cycle) methodologies. 
	•	Experienced in analyzing business requirements and developing Test Plans and Test cases and developing the application base on the requiremnts.
	•	Experience in Black Box, Positive/Negative, Data-driven, Unit, System, Integrated, and Back-End Testing. 
	•	Expertise in using Mercury/HP Automated Testing Tool QTP as well as HP Quality Center. 
	•	Possess excellent in communication, presentation, and interpersonal skills. 
	•	Good team player with the ability to work independently in a time sensitive environment. 
	•	Please refer to my Resume for more 
                </h1>

                <hr/>
                <p>Bootstrap | node.js | express | MongpDB | SQL | React | Javascript | Java</p>

                <div className = 'social-links'>
                    <a href = 'https://www.linkedin.com/in/catherine-adegoke-2b5713197/'rel='noopener noreferrer' target = "_blank">
                        <i className = "fa fa-linkedin-square" aria-hidden ="true"/>
                        </a>

                        <a href = 'https://github.com/cmadegoke'rel='noopener noreferrer' target = "_blank">
                        <i className = "fa fa-github-square" aria-hidden ="true"/>
                        </a>
                        <a href = 'https://www.facebook.com/kate.adegoke'rel='noopener noreferrer' target = "_blank">
                        <i className = "fa fa-facebook-square" aria-hidden ="true"/>
                        </a>




                </div>
            </div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default About;