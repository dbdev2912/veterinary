import React, { Component } from 'react';

import Option from './Option';
import Guild from './Guild';
import Dream from '../Dream/Dream';

import '../../css/Guilds/Guilds.css';

class Guilds extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount = () =>{

    }

    render = () =>{
        return (
            <div className="guilds">
            <Dream id="gd-1" interval="13000" type="dream-medium dream-swift" top="15" left="25"/>
            <Dream id="gd-2" interval="17500" type="dream-medium dream-quick" top="25" left="48"/>
            <Dream id="gd-3" interval="20000" type="dream-big dream-slow" top="30" left="66"/>
                <div className="guilds-options">
                    <div className="options">
                        <Option changeGuild = {this.props.changeGuild} type="cat" direct={this.props.scrollDirection} url="/img/content/ct-31.jpg"/>
                        <Option changeGuild = {this.props.changeGuild} type="dog" direct={this.props.scrollDirection} url="/img/content/ct-32.jpg"/>
                        <Option changeGuild = {this.props.changeGuild} type="both" direct={this.props.scrollDirection} url="/img/content/ct-30.jpg"/>
                    </div>
                </div>
                <div className="guilds-container">
                    {this.props.data.map(data => <Guild key={data.id} data={data}/>)}
                </div>
            </div>
        )
    }
}


export default Guilds;
