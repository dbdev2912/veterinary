import React, { Component } from 'react';


class Butterfly extends Component{
    constructor(props){
        super(props);
        this.state = {
            butt: "butterfly",
            left: "butt-left butt-rest",
            right: "butt-right butt-rest",
            body: "butt-body butt-rest",
            isTouched: false,
        }
        this.buttMove = this.buttMoveBind.bind(this);
    }
    componentDidMount = () =>{

    }

    buttMoveBind(e){
        if(!this.state.isTouched){

            let  _this  = this;
            setTimeout(()=>{
                let isTouched = true;
                let  butt = "butterfly butt-up";
                let  left = "butt-left butt-quick";
                let  right =  "butt-right butt-quick";
                let  body = "butt-body butt-quick";
                _this.setState({butt, left, right, body, isTouched});
            })
            setTimeout(()=>{
                let  butt = "butterfly butt-toleft";
                let  left = "butt-left butt-fly";
                let  right =  "butt-right butt-fly";
                let  body = "butt-body butt-fly";
                _this.setState({butt, left, right, body});
            }, 2000);
            setTimeout(()=>{
                let  butt = "butterfly butt-toleft";
                let  left = "butt-left butt-rest";
                let  right =  "butt-right butt-rest";
                let  body = "butt-body butt-rest";
                _this.setState({butt, left, right, body});
            }, 4000);
            setTimeout(()=>{
                let butt="butterfly butt-fadeOut";
                _this.setState({butt});
            }, 6000);
            setTimeout(()=>{
                let isTouched = false;
                let butt="butterfly butt-fadeIn";
                _this.setState({butt, isTouched});
            }, 6500);
        }
    }

    render = () =>{
        return (
            <div className={this.state.butt} onMouseEnter = {this.buttMove}>
                <img className={this.state.left} src="/img/content/butt-left.png" alt=""/>
                <img className={this.state.right} src="/img/content/butt-right.png" alt=""/>
                <span className={this.state.body}/>
            </div>
        )
    }
}


export default Butterfly;
