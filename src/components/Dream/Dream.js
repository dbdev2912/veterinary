import React, { Component } from 'react';
import $ from 'jquery';

import '../../css/Dream/Dream.css';

class Dream extends Component{
    constructor(props){
        super(props);
        this.state = {
            top: false,
            left: false,
        }
    }
    componentDidMount = () =>{
        var top, left;
        top  = parseInt(Math.floor(Math.random() * 100));
        left = parseInt(Math.floor(Math.random() * 100));

        $(`#${this.props.id}`).animate({
            top:  `${ top%(100-parseInt(this.props.top))}vh`,
            left: `${ left%(100-parseInt(this.props.left))}vw`,
        }, parseInt(this.props.interval));
        setInterval(()=>{
            top  = parseInt(Math.floor(Math.random() * 100));
            left = parseInt(Math.floor(Math.random() * 100));


            $(`#${this.props.id}`).animate({
                top:  `${ top%(100-parseInt(this.props.top))}vh`,
                left: `${ left%(100-parseInt(this.props.left))}vw`,
            }, parseInt(this.props.interval));
        }, parseInt(this.props.interval));
    }

    render = () =>{
        return (
            <div id={this.props.id} className={"dream "+this.props.type} style={{left: this.props.left+"vw", top: this.props.top+"vh"}}>
                <img className={this.props.type} src={this.props.src?this.props.src:"/img/content/dream.png"} alt=""/>
            </div>
        )
    }
}


export default Dream;
