import React, { Component } from 'react';


class Blog extends Component{
    constructor(props){
        super(props);
        this.state = {
            contentState: "blog-content-container",
        }
        this.mouseEnter = this.mouseEnterBind.bind(this);
        this.mouseLeave = this.mouseLeaveBind.bind(this);
    }
    componentDidMount = () =>{

    }

    mouseEnterBind = () =>{
        let contentState = "blog-content-container blog-content-show";
        this.setState({contentState});
    }
    mouseLeaveBind = () =>{
        let contentState = "blog-content-container blog-content-hide";
        this.setState({contentState});
    }

    render = () =>{
        return (
            <div className={`blog-container ${this.props.class}`}>
                <div className="blog" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style={{backgroundImage: `url(${this.props.data.url})`}}>
                    <div className={this.state.contentState}>
                        <span className="blog-title">{this.props.data.title}</span>
                        <span className="blog-content">{this.props.data.content}</span>
                    </div>
                </div>
            </div>
        )
    }
}


export default Blog;
