import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import image from './images/kate.png'


class Landing extends Component {
    render(){
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col ={12}>
                        <img src= {image}
                        alt = 'Kate'
                        className = 'img'/>
                
            <div className= 'banner-text'>
                <h1> Catherine Adegoke
                </h1>

                <hr/>
                <p>Bootstrap | node.js | express | MongpDB | SQL | React | Javascript | Java</p>

                <div className = 'social-links'>
                    <a href = 'http://google.com'rel='noopener noreferrer' target = "_blank">
                        <i className = "fa fa-linkedin-square" aria-hidden ="true"/>
                        </a>

                        <a href = 'http://google.com'rel='noopener noreferrer' target = "_blank">
                        <i className = "fa fa-github-square" aria-hidden ="true"/>
                        </a>
                        <a href = 'http://google.com'rel='noopener noreferrer' target = "_blank">
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

export default Landing;