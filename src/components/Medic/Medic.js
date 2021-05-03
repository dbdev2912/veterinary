import React, { Component } from 'react';

import '../../css/Medic/Medic.css';
import '../../css/Medic/Butterfly.css';
import $ from 'jquery';

import Butterfly from './Butterfly';

class Medic extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.next = this.nextBind.bind(this);
        this.prev = this.prevBind.bind(this);
    }
    componentDidMount = () =>{
        $(()=>{
            $('.medic-next').click();
        });
    }

    nextBind(){
        if(this.state.current || this.state.current===0){
            let current = this.state.current+1;
            let prev = current - 1;
            if(current === this.props.medics.length){
                current = 0;
            }
            let id = this.props.medics[current].id;

            let prevId = this.props.medics[prev].id;

            let midPoint = ($('.medic-carousal-container').width() - $(`#${id}`).width())/2;
            let endPoint = $('.medic-carousal-container').width();

            $(`#${id}`).attr('style', `left: 0px`);


            $(`#${id}`).animate({
                opacity: "1",
                left: `${midPoint}px`,
            }, 500, ()=>{

            });

            $(`#${prevId}`).animate({
                opacity: "0",
                left: `${endPoint}px`,
            }, 500, ()=>{
                $(`#${prevId}`).attr("style", "opacity: 0; left: 0");
            });

            this.setState({current});

        }else{
            let current = 0;
            let id = this.props.medics[0].id;
            $(`#${id}`).attr('style', `left: 0px`);
            let midPoint = ($('.medic-carousal-container').width() - $(`#${id}`).width())/2;
            $(`#${id}`).animate({
                opacity: "1",
                left: `${midPoint}px`,
            });
            this.setState({current});
        }
    }

    prevBind(){
        if(this.state.current || this.state.current===0){
            let current = this.state.current - 1;
            let prev = current + 1;
            if(current === -1){
                current = this.props.medics.length - 1;
            }
            let id = this.props.medics[current].id;

            let prevId = this.props.medics[prev].id;

            let midPoint = ($('.medic-carousal-container').width() - $(`#${id}`).width())/2;
            let endPoint = $('.medic-carousal-container').width();
            $(`#${id}`).attr('style', `left: ${endPoint}px`);


            $(`#${id}`).animate({
                opacity: "1",
                left: `${midPoint}px`,
            }, 500, ()=>{

            });

            $(`#${prevId}`).animate({
                opacity: "0",
                left: `0px`,
            }, 500, ()=>{
                $(`#${prevId}`).attr("style", `opacity: 0; left: 0px`);
            });


            this.setState({current});

        }else{
            let current = 0;
            let id = this.props.medics[0].id;
            let endPoint = $('.medic-carousal-container').width();
            let midPoint = ($('.medic-carousal-container').width() - $(`#${id}`).width())/2;

            $(`#${id}`).attr('style', `left: ${endPoint}px`);

            $(`#${id}`).animate({
                opacity: "1",
                left: `${midPoint}px`,
            });
            this.setState({current});
        }
    }


    render = () =>{
        return (
            <div className="medic">
                <div className="medic-column">
                    <div className="medic-cell">
                        <img src="/img/content/ct-12.jpg" alt=""/>
                    </div>
                    <div className="medic-carousal">
                        <Butterfly />
                        <span className="medic-next" onClick={this.next}/>
                        <span className="medic-prev" onClick={this.prev}/>
                        <div className="medic-carousal-container">
                        {this.props.medics.map(m=>
                            <div className="medic-img-card" id={m.id} key={m.id}>
                                <div className="medic-img" style={{backgroundImage: `url('${m.src}')`}}/>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
                <div className="medic-column medic-column-right">

                </div>
            </div>
        )
    }
}


export default Medic;
