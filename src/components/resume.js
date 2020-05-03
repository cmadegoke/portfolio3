import React, {Component} from 'react';
import {Grid,Cell} from "react-mdl";
import image from './images/kate.png'
import Education from './eduction'


class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style= {{textAlign:"center"}}>
                        <img src={image}
                            alt='Kate'
                            style={{ height: '250px'}}
                            className='img' />
                        </div>
                        <h2 style = {{paddingTop: "2em"}}>Catherine Adegoke</h2>
                        
                        </Cell>

                    <Cell className ='resume' col={8}>
                    <h2>Education</h2>
                    
                    </Cell>
                </Grid>
              
            </div>
        )
    }
}

export default Resume;