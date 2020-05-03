import React, { Component } from 'react';
import { Grid, Cell , List, ListItem, ListItemContent} from 'react-mdl'
import image from './images/kate.png'

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Catherine Adegoke</h2>
                        <img src={image}
                            alt='Kate'
                            style={{ height: '250px' }}
                            className='img' />
            
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className = 'contact-list'>
                        <List>
                            <ListItem>
                                <ListItemContent style={{ fontsize:'60px' ,fontweight: 'bold'}}>
                                    <i className = "fa fa-phone-square" aria-hidden ="true"/>
                                    (908)922-3648</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontsize:'60px' ,fontweight: 'bold'}}>
                                    <i className = "fa fa-envelope" aria-hidden ="true"/>
                                    catherine.adegoke@adp.com</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontsize:'60px' ,fontweight: 'bold'}}>
                                    <i className = "fa fa-envelope" aria-hidden ="true"/>
                                    cmadegoke@gmail.com</ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;