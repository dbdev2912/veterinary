import React, { Component } from 'react';

import '../../css/Nav/Nav.css';

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount = () =>{

    }

    render = () =>{
        return (
            <div id="navbar" className="navbar">
                <div className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Trang chủ</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">Dịch vụ</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">Giới thiệu</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">Thông tin</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">Sản phẩm</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">Liên hệ</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Nav;
