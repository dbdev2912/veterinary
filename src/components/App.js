import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import $ from "jquery";


import Nav from './Nav/Nav';
import Intro from './Intro/Intro';
import Services from './Services/Services';
import Guilds from './Guilds/Guilds';
import Foods from './Foods/Foods';
import Medic from './Medic/Medic';
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';
import Utils from './Utils/Utils';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentPosition: 0,
            stopScrolling: true,
            navShow: true,

            animateState: {
                services: false,
            },
            scrollDirection: "",
            guilds : [
                {id: "dog1", url: "/img/content/ct-11.jpg", icon: "/img/content/ct-51.png", title: "Thức ăn dành cho từng độ tuổi / giai đoạn phát triển."},
                {id: "dog2", url: "/img/content/ct-16.jpg", icon: "/img/content/ct-51.png", title: "Hoạt động thường nhật."},
                {id: "dog3", url: "/img/content/ct-20.jpg", icon: "/img/content/ct-51.png", title: "Nghỉ ngơi và thư giản."},

                {id: "cat1", url: "/img/content/ct-17.jpg", icon: "/img/content/ct-50.png", title: "Thức ăn dành cho từng độ tuổi / giai đoạn phát triển."},
                {id: "cat2", url: "/img/content/ct-18.jpg", icon: "/img/content/ct-50.png", title: "Hoạt động thường nhật."},
                {id: "cat3", url: "/img/content/ct-19.jpg", icon: "/img/content/ct-50.png", title: "Nghỉ ngơi và thư giản."},

                {id: "both1", url: "/img/content/ct-21.jpg", icon: "/img/content/ct-52.png", title: "Hòa hợp giống loài."},
                {id: "both2", url: "/img/content/ct-22.jpg", icon: "/img/content/ct-52.png", title: "Hoạt động thường nhật."},
                {id: "both3", url: "/img/content/ct-23.jpg", icon: "/img/content/ct-52.png", title: "Nghỉ ngơi và thư giản"},
            ],
            guildsFilted: [],

            blogs: [
                {id: "blog1", url: "/img/content/ct-10.jpg", type: "bh", title: "Thăm khám định kì cho boss", content: "Đưa các bosses đến cơ sở y tế định kỳ để đảm bảo sức khỏe, đồng thời sớm phát hiện những nguy cơ trong tương lai"}, // big-horizontal: width: 60%; height: 60%
                {id: "blog2", url: "/img/content/ct-1.jpg", type: "bv", title: "Triệt sản cho Quàng thượng", content: "Lợi ích của việc triệt sản, những lưu ý trước và sau khi đưa quàng thượng đi \"thiến\". "},  //big-vertical: width: 40%; height: 100%;
                {id: "blog3", url: "/img/content/ct-14.jpg", type: "mh", title: "Phòng khám của bọn mình", content: "Cùng dạo một vòng phòng khám cùng với các trang thiết bị bọn mình hiện có nhé"}, // medium-horizontal: width: 30%; height: 40%;
                {id: "blog4", url: "/img/content/ct-15.jpg", type: "mh", title: "Thực đơn cho cún sơ sinh", content: "Cách cho cún sơ sinh ăn và những lưu ý về chế độ dinh dưỡng"},
            ],

            foods: [
                {id: "food0", src:"/img/content/ct-40.png"},
                {id: "food1", src:"/img/content/ct-41.png"},
                {id: "food2", src:"/img/content/ct-42.png"},
                {id: "food3", src:"/img/content/ct-43.png"},
                {id: "food4", src:"/img/content/ct-44.png"},
            ],
            medics:[
                {id: "medic0", src:"/img/content/ct-50.jpg"},
                {id: "medic1", src:"/img/content/ct-51.jpg"},
                {id: "medic2", src:"/img/content/ct-52.jpg"},
                {id: "medic3", src:"/img/content/ct-53.jpg"},
                {id: "medic4", src:"/img/content/ct-54.jpg"},
            ]
        };

        this.pageMove = this.pageMoveHandler.bind(this);
        this.navSwitching = this.navSwitchingBind.bind(this);
        this.findGuilds = this.findGuildsBind.bind(this);
    }
    componentDidMount = () =>{
        let _this = this;
        $(function() {
            $("#container").on("mousewheel DOMMouseScroll", function(event) { // catch mouse wheel event & translate scroll
                var currentPosition = _this.state.currentPosition;

                let e = event.originalEvent;
                var delta = e.wheelDelta>0||e.detail<0?1:-1;
                var scrollDirection;
                let limit = 4*($(this).width() - window.innerWidth) / window.innerWidth;

                if(delta < 0){
                    if(currentPosition < limit){
                        scrollDirection = "toRight";
                        currentPosition +=1;
                    }
                }
                else{
                    if(currentPosition>0){
                        scrollDirection = "toLeft";
                        currentPosition -=1;
                    }
               }

               window.scroll({
                   top: 0,
                   left: currentPosition*window.innerWidth/4,
                   behavior: 'smooth'
               });

               _this.setState({currentPosition, stopScrolling: true, scrollDirection});
            });


            $(window).scroll(function(event){


                if(window.pageXOffset>0){
                    $("#navbar").attr('class', 'navbar navbar-hide')
                }else{
                    $("#navbar").attr('class', 'navbar')
                }

                let dist = window.innerWidth/4;
                setTimeout(()=>{
                        if(window.pageXOffset % dist !==0 ){
                        let newCurrent = Math.ceil( (window.pageXOffset) / dist);
                        if(newCurrent !== _this.state.currentPosition){
                            _this.setState({ currentPosition: newCurrent })
                        }
                    }
                }, 250);
            });

            $("#container").on('mousemove', (e)=>{
                let x = e.clientX;
                if(x > window.innerWidth*80/100){
                    $('.move-utils-next').fadeIn(250);
                }else{
                    $('.move-utils-next').fadeOut(250);
                }
                if(x < window.innerWidth*20/100){
                    $('.move-utils-prev').fadeIn(250);
                }else{
                    $('.move-utils-prev').fadeOut(250);
                }

            });
        });
    }

    pageMoveHandler = (direction) => {
        let currentPosition = this.state.currentPosition;

        let limit = 4*($("#container").width() - window.innerWidth) / window.innerWidth;


        if(currentPosition > 3 && currentPosition <= limit){
            var scrollDirection;
            if(direction > 0){
                scrollDirection = "toRight";
                let nearest = Math.round(currentPosition/4)+1;

                currentPosition = nearest*4;
            }else{
                scrollDirection = "toLeft";
                let nearest = Math.round(currentPosition/4)-1;

                currentPosition = nearest*4;
            }

            window.scroll({
                top: 0,
                left: currentPosition*window.innerWidth/4,
                behavior: 'smooth'
            });

            this.setState({currentPosition, scrollDirection});
        }else{
            if(currentPosition < 3){
                if(direction > 0){
                    currentPosition = 4;
                }else{
                    currentPosition=0;
                }
                window.scroll({
                    top: 0,
                    left: currentPosition*window.innerWidth/4,
                    behavior: 'smooth'
                });

                this.setState({currentPosition});
            }else{
                currentPosition = limit-4;

                window.scroll({
                    top: 0,
                    left: currentPosition*window.innerWidth/4,
                    behavior: 'smooth'
                });

                this.setState({currentPosition});
            }
        }
    }

    navSwitchingBind(){
        if(!this.state.navShow){
            $('#navbar').animate({
                left: "0",
            });
            let navShow = true;
            this.setState({navShow});
        }else{
            $('#navbar').animate({
                left: "-110vw",
                background: "transparent",
            });
            let navShow = false;
            this.setState({navShow});
        }
    }

    findGuildsBind = (key) =>{
        let guildsFilted = [];
        switch(key){
            case "cat":
                guildsFilted = this.state.guilds.filter(g => g.id.slice(0, 3) === "cat");
                break;

            case "dog":
                guildsFilted = this.state.guilds.filter(g => g.id.slice(0, 3) === "dog");
                break;

            default:
                guildsFilted = this.state.guilds.filter(g => g.id.slice(0, 4) === "both");
                break;
        }
        this.setState({guildsFilted})
    }

    render = () =>{
        return (
            <React.StrictMode>
            <Nav />
            <Utils />
            <div id="container">
                <button onClick={this.navSwitching} className="navbar-switch">
                    <img src="/img/content/catfoot-gradient.png" alt=""/>
                </button>
                <button onClick={()=>{this.pageMove(-1)}} className="move-utils-prev">
                    <img src="/img/content/prev.png" alt=""/>
                </button>
                <button onClick={()=>{this.pageMove(1)}} className="move-utils-next">
                    <img src="/img/content/next.png" alt=""/>
                </button>
                <Router>
                    <Route path="/" exact render={(props=>
                        <React.StrictMode>
                            <Intro />
                            <Services />
                            <Guilds changeGuild={this.findGuilds} scrollDirection={this.state.scrollDirection} data={this.state.guildsFilted.length>0?this.state.guildsFilted:this.state.guilds.filter(g => g.id.slice(0, 3)==="cat")}/>
                            <Foods foods={this.state.foods}/>
                            <Medic medics={this.state.medics}/>
                            <Blogs data={this.state.blogs}/>
                        </React.StrictMode>
                    )}/>
                </Router>
                <Footer />
            </div>
            </React.StrictMode>
        )
    }
}


export default App;
