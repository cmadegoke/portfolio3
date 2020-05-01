import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import image from './images';


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
                <h1>blahblah</h1>
            </div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Landing;