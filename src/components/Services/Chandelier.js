import React, { Component } from 'react';

import Swing from './Swing';

class Chandelier extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount = () =>{

    }

    render = () =>{
        return (
            <div className="chandelier">
                <Swing src="/img/content/swing-1.png" class="swing swing-quick" ropeLength="rope-short"/>
                <Swing src="/img/content/swing-2.png" class="swing swing-slow" ropeLength="rope-long"/>
                <Swing src="/img/content/swing-3.png" class="swing" />
            </div>
        )
    }
}


export default Chandelier;
