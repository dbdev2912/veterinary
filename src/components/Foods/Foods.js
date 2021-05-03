import React, { Component } from 'react';

import '../../css/Foods/Foods.css';
import '../../css/Foods/Mobile.css';
import $ from 'jquery';
import Dream from '../Dream/Dream';
class Foods extends Component{
    constructor(props){
        super(props);
        this.state = {
            contentState: "foods-content",
        }
        this.next = this.nextBind.bind(this);
        this.prev = this.prevBind.bind(this);
    }
    componentDidMount = () =>{
        let _this = this;
        $(window).scroll(()=>{
            if(window.pageXOffset === 3*window.innerWidth){
                let contentState = "foods-content foods-content-up";
                _this.setState({ contentState });
            }else{
                if(window.pageXOffset >= 4*window.innerWidth || window.pageXOffset <= 2*window.innerWidth){
                    let contentState = "foods-content foods-content-down";
                    _this.setState({ contentState });
                }
            }
        });
        $(()=>{
            setTimeout(()=>{
                $('.foods-next').click();
            }, 500);
        })
    }
    nextBind(){
        if(this.state.current || this.state.current===0){
            let current = this.state.current+1;
            let prev = current - 1;
            if(current === this.props.foods.length){
                current = 0;
            }
            let id = this.props.foods[current].id;

            let prevId = this.props.foods[prev].id;

            let midPoint = ($('.foods-carousel').width() - $(`#${id}`).width())/2;
            let endPoint = $('.foods-carousel').width();

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
            let id = this.props.foods[0].id;
            $(`#${id}`).attr('style', `left: 0px`);
            let midPoint = ($('.foods-carousel').width() - $(`#${id}`).width())/2;
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
                current = this.props.foods.length - 1;
            }
            let id = this.props.foods[current].id;

            let prevId = this.props.foods[prev].id;

            let midPoint = ($('.foods-carousel').width() - $(`#${id}`).width())/2;
            let endPoint = $('.foods-carousel').width();
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
            let id = this.props.foods[0].id;
            let endPoint = $('.foods-carousel').width();
            let midPoint = ($('.foods-carousel').width() - $(`#${id}`).width())/2;

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
            <div className="foods">
            <Dream id="fd-1" interval="8000" src="/img/content/dream-pale-pink.png" type="dream-big dream-swift" top="10" left="25"/>
            <Dream id="fd-2" interval="4000" src="/img/content/dream-pale-pink.png" type="dream-medium dream-slow" top="30" left="80"/>
            <Dream id="fd-3" interval="7500" src="/img/content/dream-pale-yellow.png" type="dream-small dream-swift" top="75" left="25"/>
            <Dream id="fd-4" interval="15000" src="/img/content/dream-pale-yellow.png" type="dream-medium dream-slow" top="30" left="66"/>
                <div className={this.state.contentState}>
                    <h1 className="foods-content-title">THỰC PHẨM DÀNH CHO CÁC BÉ</h1>
                    <span className="foods-content-content">Tại các cơ sở, bọn mình có bán một số loại thực phẩm phù hợp với từng loại thú cưng theo từng độ tuổi khác nhau.</span>
                </div>

                <div className="foods-carousel-container">
                    <span className="foods-next" onClick={this.next}/>
                    <span className="foods-prev" onClick={this.prev}/>
                    <div className="foods-carousel">
                        {this.props.foods.map(f=>
                            <div key={f.id} id={f.id} className="foods-img-container">
                                <img src={f.src} alt=""/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}


export default Foods;
