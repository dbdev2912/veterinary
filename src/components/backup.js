import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';


import Nav from './Nav/Nav';
import Intro from './Intro/Intro';
import $ from "jquery";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount = () =>{
        $(document).ready(function(){
            $('.scroll-horizontal').attr('style', "height: 100vh; width: 100%; overflow: hidden; position: relative;")
        });
    }

    render = () =>{
        return (
            <React.StrictMode>
            <Nav />
                <HorizontalScroll reverseScroll = { true }>
                    <Intro />
                    <Intro />
                </HorizontalScroll>
            </React.StrictMode>
        )
    }
}


export default App;
