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
            <Card shadow={0} style={{width: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', 
    background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>React Project</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Github</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
        )
    }
    else if (this.state.activeTab=== 1){
        return(
            <div><h1>this is mongo</h1></div>
        )
    }
    else if (this.state.activeTab=== 2){
        return(
            <div><h1>this is sql</h1></div>
        )
    }
    else if (this.state.activeTab=== 3){
        return(
            <div><h1>this is Javascript</h1></div>
        )
    }
}
    render(){
        return(
            <div className= "category-tabs">
                <Tabs activeTab={this.state.activeTab}onChange={(tabId)=>this.setstate({activeTab:tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>SQL</Tab>
                    <Tab>Javascript</Tab>
                </Tabs>
                <section className ="projects-grid">
                    <Grid className ="projects-grid">
                        <Cell col={12}>
                            <div className = "content">{this.categories()}</div>


                        </Cell>
                    </Grid>

                </section>
                
            </div>
        )
    }
}

export default Project;