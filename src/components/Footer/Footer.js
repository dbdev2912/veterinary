import React, { Component } from 'react';
import '../../css/Footer/Footer.css';
import '../../css/Footer/Mobile.css';

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount = () =>{

    }

    render = () =>{
        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-col">
                    </div>
                    <div className="footer-col">
                        <div className="logo-container">
                            <img src="/img/content/catfoot-gradient.png" alt=""/>
                        </div>
                        <div className="company-infor">
                            <span className="footer-company-name">Thú Y Mỹ Nữ</span>
                            <span className="footer-company-address">57 - Cách Mạng tháng Tám, phường Bùi Hữu Nghĩa, quận Bình Thủy, thành phố Cần Thơ.</span>
                            <span className="hotline">Hotline: 19001111 <img src="/img/content/phone.png" alt=""/></span>
                        </div>
                        <div className="more-utils">
                            <span className="util">Chính sách</span>
                            <span className="util">API</span>
                            <span className="util">Bản quyền</span>
                            <span className="util">Sản phẩm</span>
                            <span className="util">Dịch vụ</span>
                            <span className="util">Khác</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;
