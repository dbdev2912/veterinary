import React, { Component } from 'react';
import '../../css/Services/Services.css';
import '../../css/Services/Chandelier.css';
import '../../css/Services/Mobile.css';
import Service from './Service';
import Chandelier from './Chandelier';

class Services extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount = () =>{

    }

    render = () =>{
        return (
            <div className="services">
                <div className="services-container">
                    <div className="services-column-left">
                        <Service title="LƯU CHUỒNG" content="Bọn mình áp dụng quy trình lưu giữ đảm bảo cho thú cưng nhà bạn sống trong môi trường an toàn và sạch sẽ." align="right"/>
                        <Service title="CHĂM SÓC RĂNG MIỆNG" content="Bọn mình cung cấp dịch vụ chăm sóc răng nhằm phòng và điều trị các bệnh về răng miệng cho vật nuôi." align="right"/>
                        <Service title="THẨM MỸ" content="Bọn mình cung cấp các dịch vụ tắm khô, tắm ướt, chải xù, cắt lông tạo kiểu và cắt móng cho thú cưng." align="right"/>
                    </div>
                    <div className="services-column-mid">
                        <div className="gradient-logo" style={{backgroundImage: "url(/img/content/catfoot-gradient.jpg)", opacity: "0.5"}}>
                            <Chandelier />
                        </div>
                    </div>
                    <div className="services-column-right">
                        <Service title="PHÒNG CHỐNG KÍ SINH TRÙNG - TIÊM PHÒNG" content="Để đảm bảo sức khỏe cho người và vật nuôi, thú cưng cần được tiêm phòng và tái chủng định kì theo hướng dẫn của bác sĩ." align="left"/>
                        <Service align="left" title="VẬN CHUYỂN - KHÁM CHỮA BỆNH TẠI NHÀ" content="Để hỗ trợ quý khách trong việc chăm sóc vật nuôi, chúng tôi cung cấp dịch vụ khám chữa bệnh tại nhà và vận chuyển thú cưng từ nhà quý khách đến cơ sở của bọn mình và ngược lại."/>
                        <Service align="left" title="CẤP CỨU 24/7" content="Bọn mình cung cấp dịch vụ cấp cứu 24/7, kể cả ngày lễ. Trường hợp cấp cứu sau 19h xin vui lòng liên hệ trước và nhớ mang thú cưng tới bệnh viện nha."/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Services;
