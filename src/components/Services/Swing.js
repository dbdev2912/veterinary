import React, { Component } from 'react';


class Swing extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount = () =>{

    }

    render = () =>{
        return (
            <div className={this.props.class}>
                <span className="swing-dot"/>
                <span className={"swing-rope " + this.props.ropeLength}/>
                <img className="swing-img" src={this.props.src} alt="" />
            </div>
        )
    }
}


export default Swing;
