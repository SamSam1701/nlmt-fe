import Search from "antd/es/input/Search";
import "./Header.css";
import { CaretDownOutlined, PhoneFilled, ShoppingFilled } from "@ant-design/icons";
const Header = () => {
    return (
        <header className="header-wrapper">
            <section className="top-bar">
                <div className="container">
                    <ul className="top-bar__item-list">
                        <li>CSKH: 0353741175</li>
                        <li>Hệ thống đại lý sản phẩm</li>
                        <li>Hướng dẫn mua hàng</li>
                        <li>Chính sách bảo hành</li>
                    </ul>
                </div>
            </section>
            <section className="nav-bar">
                <div className="Logo">
                    <img src="https://azco.vn/wp-content/uploads/2019/11/thumb-logo-la-gi.jpg" alt="logo" width="150px" height="100px" />
                </div>
                <div className="search-input">
                    <Search placeholder="Nhập từ khóa tím kiếm" onSearch={() => console.log('ưd')} enterButton />
                </div>

                <div className="cart">
                    <div className="contact">
                        <div className="icon-circle">
                            <PhoneFilled />
                        </div>
                        <div className="phone-content">
                            <p>0353741175</p>
                            <p>TƯ VẤN BÁN HÀNG</p>
                        </div>
                    </div>

                    <div>
                        <div className="icon-circle">
                            <ShoppingFilled />
                        </div>
                    </div>
                </div>

            </section>
            <section className="category-bar">
                <div className="category-bar__container container">
                    <div className="title-category">
                        <h3>DANH MỤC SẢN PHẨM</h3>
                    </div>
                    <ul className="list-title">
                        <li><h4 className="title-item">TRANG CHỦ</h4></li>
                        <li><h4 className="title-item">GIỚI THIỆU</h4></li>
                        <li>
                            <h4 className="title-item">
                                SẢN PHẨM
                                <span className="down-icon">
                                    <CaretDownOutlined />
                                </span>
                            </h4>
                        </li>
                        <li><h4 className="title-item">DỊCH VỤ</h4></li>
                        <li><h4 className="title-item">TIN TỨC</h4></li>
                        <li><h4 className="title-item">LIÊN HỆ</h4></li>
                    </ul>
                </div>
            </section>
        </header>
    );
}

export default Header;