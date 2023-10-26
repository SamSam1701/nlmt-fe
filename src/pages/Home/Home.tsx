import { Col, Row } from "antd";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="container">
            <Row>
                <Col>
                    <ul className="title-category__list">
                        <li><Link className="title-category__link" to={"/"}>LINH KIỆN ĐIỆN NƯỚC</Link></li>
                        <li><Link className="title-category__link" to={"/"}>MÁY NƯỚC NÓNG CÔNG NGHIỆP</Link></li>
                        <li><Link className="title-category__link" to={"/"}>MÁY NƯỚC NÓNG TẤM PHẲNG</Link></li>
                        <li><Link className="title-category__link" to={"/"}>MÁY NƯỚC NONG NLMT</Link></li>
                        <li><Link className="title-category__link" to={"/"}>ĐIỆN NĂNG LƯỢNG MẶT TRỜI</Link></li>
                        <li><Link className="title-category__link" to={"/"}>BỒN NƯỚC INOX 304</Link></li>
                        <li><Link className="title-category__link" to={"/"}>MÁY BƠM NƯỚC TĂNG ÁP</Link></li>
                        <li><Link className="title-category__link" to={"/"}>LỌC NƯỚC ĐẦU NGUỒN</Link></li>
                        <li><Link className="title-category__link" to="/">BỒN NƯỚC NHỰA 4 LỚP</Link></li>
                        <li><Link className="title-category__link" to={"/"}>MÁY LỌC NƯỚC RO</Link></li>
                        <li><Link className="title-category__link" to={"/"}>THIẾT BỊ VỆ SINH NHÀ TẮM</Link></li>
                    </ul>
                </Col>
                <Col>
                    <img src="https://cdn.tgdd.vn/Files/2019/05/04/1164891/4-luu-y-truoc-khi-mua-may-nuoc-nong-nang-luong-mat-12.jpg" alt="avt" />
                </Col>
            </Row>
        </div>
    )
}