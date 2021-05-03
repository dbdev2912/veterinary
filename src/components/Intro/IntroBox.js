import React, { Component } from 'react';


class IntroBox extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount = () =>{

    }

    render = () =>{
        return (
            <div className="introbox" style={{background: this.props.bg}}>
                <div className="intro-box-img">
                    <img src={this.props.url} alt=""/>
                </div>
                <div className="intro-box-content">
                    <span className="intro-box-title">{this.props.title}</span>
                    <span className="intro-box-content">{this.props.content}</span>
                </div>
            </div>
        )
    }
}


export default IntroBox;
