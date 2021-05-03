import React, { Component } from 'react';

import $ from 'jquery';

class Guild extends Component{
    constructor(props){
        super(props);
        this.state = {
            className: "guild-container",
            contentState: "guild-content-container",
        }
        this.mouseEnter = this.mouseEnterBind.bind(this);
        this.mouseLeave = this.mouseLeaveBind.bind(this);
    }
    componentDidMount = () =>{
        let _this = this;

        $(window).scroll(()=>{
            if(window.pageXOffset === 2*window.innerWidth){
                let className="guild-container guild-container-padIn";
                _this.setState({className});
            }else{
                let className="guild-container guild-container-padOut";
                _this.setState({className});
            }
        });
    }

    mouseEnterBind = () =>{
        let contentState = "guild-content-container guild-up";
        this.setState({contentState});
    }

    mouseLeaveBind = () =>{
        let contentState = "guild-content-container guild-down";
        this.setState({contentState});
    }


    render = () =>{
        return (
            <div className="guild" onMouseEnter = {this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <div className={this.state.className}>
                    <div className="guild-content" style={{ backgroundImage: `url(${this.props.data.url})` }}>
                        <div className={this.state.contentState}>
                            <img className="guild-icon" src={this.props.data.icon} alt=""/>
                            <span className="guild-title">{this.props.data.title}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Guild;
