import React, { Component } from 'react';

import '../../css/Blogs/Blogs.css';

import Blog from './Blog';
import Dream from '../Dream/Dream';


class Blogs extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount = () =>{

    }

    render = () =>{
        return (
            <div className="blogs">
                <Dream id="bl-1" interval="13000" type="dream-medium dream-swift" top="75" left="25"/>
                <Dream id="bl-2" interval="20000" type="dream-big dream-slow" top="30" left="66"/>
                <h1 className="blogs-title">Một vài bài viết dành cho các đồng Sen.</h1>
                <a className="blog-to-all" href="/blog">Xem tất cả.</a>
                <div className="blogs-container">
                    <div className="blog-col-big">
                        <Blog class="blog-big" data={this.props.data[0]}/>
                        <Blog class="blog-medium" data={this.props.data[2]}/>
                        <Blog class="blog-medium" data={this.props.data[3]}/>
                    </div>
                    <div className="blog-col-small">
                        <Blog class="blog-cover" data={this.props.data[1]}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Blogs;
