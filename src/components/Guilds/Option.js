import React, { Component } from 'react';

import $ from 'jquery';

class Option extends Component{
    constructor(props){
        super(props);
        this.state = {
            className: "option",
        }
    }


    componentDidMount = () =>{
        let _this = this;
        $(window).scroll(()=>{
            if(this.props.direct === "toRight"){
                let className="option option-rotate-left";
                _this.setState({className});
            }else{
                let className="option option-rotate-right";
                _this.setState({className});
            }
        });
    }

    render = () =>{
        return (
            <div className={this.state.className} onClick={()=>{this.props.changeGuild(`${this.props.type}`)}}>
                <span className="dot"/>
                <span className="spine"/>
                <div className="option-img-container">
                    <div className="option-img" style={{backgroundImage: `url(${this.props.url})`}}></div>
                </div>
            </div>
        )
    }
}


export default Option;
