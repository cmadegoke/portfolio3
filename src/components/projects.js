import React, {Component} from 'react';
import {Tabs,Tab,Grid,Cell, Card, CardTitle,CardText,CardActions,CardMenu,IconButton,Button } from 'react-mdl'


class Project extends Component {
    constructor(props){
        super(props);
        this.state={activeTab:0};
    }
      categories(){
    if(this.state.activeTab=== 0){
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className = "landing-grid">
            <div className ="projects-grid">
            <Card shadow={0} style={{width: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', 
      background: 'url(images/schedulingApp.png) center / cover'}}></CardTitle>
    <CardText>
    <strong>Work Scheduling App</strong>
    <br></br>
    This App is to add Management to schedule employees on a given Day, Week or Month 
    </CardText>
    <CardActions border>
    <Button colored href= 'https://github.com/CToomb1/Project-2' target ="_blank">Github</Button>
    <Button colored href= 'https://frozen-plateau-38544.herokuapp.com/' target ="_blank">Heroku</Button>

    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
      <Card shadow={0} style={{width: '450', margin: 'auto'}}>
      <CardTitle style={{color: '#fff', height: '176px', 
      background: 'url(images/NoteTaker.png) center / cover'}}></CardTitle>
      <CardText>
      <strong>Note Taker</strong>
    <br></br>
    A simple Note Taker app to help you organize your daily routine
      </CardText>
      <CardActions border>
      <Button colored href= 'https://github.com/cmadegoke/NoteTaker/' target ="_blank">Github</Button>
      <Button colored href= 'https://mysterious-thicket-05410.herokuapp.com/notes' target ="_blank">Heroku</Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
      </CardMenu>
  </Card>
        <Card shadow={0} style={{width: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', 
        background: 'url(images/sql.png) center / cover'}}></CardTitle>
        <CardText>
        <strong>Employee Management SQL</strong>
    <br></br>
    This app shows my ability to use SQL commands
        </CardText>
        <CardActions border>
        <Button colored href= 'https://github.com/cmadegoke/MySql' target ="_blank">Github</Button>
        <Button colored href= 'https://drive.google.com/file/d/1veJhBh5Byf14y0lstMPM04HI1jlOSM2E/view' target ="_blank">Google Drive</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    
        <Card shadow={0} style={{width: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', 
        background: 'url(images/fitnessApp.png) center / cover'}}></CardTitle>
        <CardText>
        <strong>Fitness App</strong>
    <br></br>
    This App tracks your daily fitness routine. There is also a dashborad to view your dialy progress
        </CardText>
        <CardActions border>
        <Button colored href= 'https://github.com/cmadegoke/Workout-Tracker' target ="_blank">Github</Button>
        <Button colored href= 'https://lit-plains-23025.herokuapp.com/' target ="_blank">Heroku</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
     
     <Card shadow={0} style={{width: '450', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', 
     background: 'url(images/foodCast.png) center / cover'}}></CardTitle>
     <CardText>
     <strong>Food Forecast</strong>
    <br></br>
     This project is a 5 day forecast with suggested recipes based on the weather 
     (i.e. rain, snow, sun conditions). 
     </CardText>
     <CardActions border>
     <Button colored href= 'https://cmadegoke.github.io/5-DayFoodcast/' target ="_blank">Github</Button>
        

     </CardActions>
     <CardMenu style={{color: '#fff'}}>
         <IconButton name="share" />
     </CardMenu>
 </Card>
  
  <Card shadow={0} style={{width: '450', margin: 'auto'}}>
  <CardTitle style={{color: '#fff', height: '176px', 
  background: 'url(images/weatherforecast.png) center / cover'}}></CardTitle>
  <CardText>
  <strong>Weather Forecast</strong>
    <br></br>
     Weather Forecaset show a  5 day weather forcaset based on the City, Zip Code, County or State
  </CardText>
  <CardActions border>
      <Button colored href= 'https://cmadegoke.github.io/Weather_Dashboard/ 'target ="_blank">Github</Button>
  </CardActions>
  
</Card>
    </div>
    </Grid>
    </div>
        )
        }
    
    
    }

    render(){
        return(
            <div className= "category-tabs">
                <Tabs activeTab={this.state.activeTab}onChange={(tabId)=>this.setstate({activeTab:tabId})} ripple>
                    <Tab>Projects</Tab>
                    
                </Tabs>
                
                    <Grid>
                        <Cell col={9}>
                            <div className = "content">{this.categories()}</div>


                        </Cell>
                    </Grid>

                
                
            </div>
        )
    }
}

export default Project;