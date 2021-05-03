import React, { Component } from 'react';

import IntroBox from './IntroBox';

import '../../css/Intro/Intro.css';
import '../../css/Intro/Mobile.css';
import $ from 'jquery';

class Intro extends Component{
    constructor(props){
        super(props);
        this.state = {
            introClass: "intro-container",
        }
    }
    componentDidMount = () =>{
        let _this = this;
        $(window).scroll(()=>{
            if(window.pageXOffset > 0 && window.pageXOffset < window.innerWidth){
                let introClass = "intro-container intro-container-hide";
                _this.setState({introClass});
            }else{
                if(window.pageXOffset === 0){
                    let introClass = "intro-container intro-container-show";
                    _this.setState({introClass});
                }
            }
        });
    }

    render = () =>{
        return (
            <React.StrictMode>
                <div className="intro-theme">

                    <div className={this.state.introClass}>
                        <div className="intro-title">
                            <span className="intro-title-brand">Thú Y Mỹ Nữ</span>
                            <span className="intro-title-content">Nơi tin cậy để thăm khám, chuẩn đoán, điều trị nội ngoại trú cho thú cưng</span>
                        </div>
                        <div className="introboxes">
                            <IntroBox bg="var(--infor-bg)" title="KHÁM VÀ ĐIỀUN TRỊ" content = "Chẩn đoán đúng bệnh và đưa ra phương pháp điều trị hiệu quả giúp thú cưng mau bình phục" url="/img/media/medicon1.png"/>
                            <IntroBox bg="var(--primary-bg)" title="XÉT NGHIỆM - CHUẨN ĐOÁN HÌNH ẢNH" content="Chụp X-Quang, siêu âm, làm các xét nghiệp (virus, sinh hóa máu, kháng sinh đồ,...)" url="/img/media/medicon2.png"/>
                            <IntroBox bg="var(--infor-bg)" title="PHẪU THUẬT" content="Phẫu thuật điều tr: nối xương, sỏi niệu,... Phẫu thuật theo yêu cầu, triệt sản, cắt nhân đạo..." url="/img/media/medicon3.png"/>
                        </div>
                    </div>

                </div>
            </React.StrictMode>
        )
    }
}


export default Intro;
