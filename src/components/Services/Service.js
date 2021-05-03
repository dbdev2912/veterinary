import React, { Component } from 'react';

import $ from 'jquery';

class Service extends Component{
    constructor(props){
        super(props);
        this.state = {
            className: "service",
        }
    }
    componentDidMount = () =>{
        let _this = this;
        $(window).scroll(()=>{
            if(window.pageXOffset === window.innerWidth){
                let className = "service service-to-top";
                _this.setState({className});
            }else{
                if(window.pageXOffset===0 || window.pageXOffset === window.innerWidth*2)
                {
                    let className = "service service-to-bot";
                    _this.setState({className});
                }
            }
        });
    }

    render = () =>{
        return (
            <div className={this.state.className}  style={{textAlign: this.props.align}}>
                <span className="service-title">{this.props.title}</span>
                <span className="service-description">{this.props.content}</span>
            </div>
        )
    }
}


export default Service;
