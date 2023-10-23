import { Row, Col } from "antd";
import "./Footer.css";
import { HomeFilled, IeCircleFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-widgets">
                <Row justify="space-evenly">
                    <Col span={4}>
                        <h3 className="footer-title">THÔNG TIN LIÊN HỆ</h3>
                        <div className="footer-widgets__contact">
                            <ul className="footer-widgets__list">
                                <li className="footer-widgets__item">
                                    <p>
                                        <b className="footer-widgets__item-title">
                                            <span className="footer-widgets__icon">
                                                <HomeFilled />
                                            </span>
                                            Địa chỉ chính:
                                        </b>
                                        Trường Chinh, Tây Thạnh, Tân Phú
                                    </p>
                                </li>
                                <li className="footer-widgets__item">
                                    <p>
                                        <b className="footer-widgets__item-title">
                                            <span className="footer-widgets__icon">
                                                <PhoneFilled />
                                            </span>
                                            Hotline:
                                        </b>
                                        0353741175
                                    </p>
                                </li>
                                <li className="footer-widgets__item">
                                    <p>
                                        <b className="footer-widgets__item-title">
                                            <span className="footer-widgets__icon">
                                                <MailFilled />
                                            </span>
                                            Email:
                                        </b>
                                        phuocsamqt2001@gmail.com
                                    </p>
                                </li>
                                <li className="footer-widgets__item">
                                    <p>
                                        <b className="footer-widgets__item-title">
                                            <span className="footer-widgets__icon">
                                                <IeCircleFilled />
                                            </span>
                                            Website:
                                        </b>
                                        nangluongphatdat.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col span={4}>
                        <h3 className="footer-title">HỖ TRỢ KHÁCH HÀNG</h3>
                        <div>
                            <ul className="footer-widgets__list">
                                <li className="footer-widgets__item">
                                    <p className="footer-widgets__support-item"><a href="#" className="footer-widgets__support-item">Liên Hệ</a></p>
                                </li>
                                <li className="footer-widgets__item">
                                    <p className="footer-widgets__support-item">
                                        <a
                                            href="#"
                                            className="footer-widgets__support-item"
                                        >
                                            Hướng Dẫn Mua Hàng
                                        </a>
                                    </p>
                                </li>
                                <li className="footer-widgets__item">
                                    <p className="footer-widgets__support-item">
                                        <a href="#" className="footer-widgets__support-item">
                                            Hệ Thông Đại Lý Sản Phẩm
                                        </a>
                                    </p>
                                </li>
                                <li className="footer-widgets__item">
                                    <p className="footer-widgets__support-item">
                                        <a href="#" className="footer-widgets__support-item">
                                            Chính Sách Bảo Hành
                                        </a>
                                    </p>
                                </li>
                                <li className="footer-widgets__item">
                                    <p className="footer-widgets__support-item">
                                        <a href="#" className="footer-widgets__support-item">
                                            Chính Sách Đổi Trả
                                        </a>
                                    </p>
                                </li>
                                <li className="footer-widgets__item">
                                    <p className="footer-widgets__support-item">
                                        <a href="#" className="footer-widgets__support-item">
                                            Tư Vấn Qua Điện Thoại
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col span={4}>
                        <h3 className="footer-title">CHÍNH SÁCH BÁN HÀNG</h3>
                        <div>
                            <ul className="footer-widgets__list">
                                <li className="footer-widgets__item">
                                    <p>Tư Vấn Và Khảo Sát Miễn Phí</p>
                                </li>
                                <li className="footer-widgets__item">
                                    <p>Vận Chuyển Miễn Phí Mọi Nơi</p>
                                </li>
                                <li className="footer-widgets__item">
                                    <p>Thanh Toán Sau Khi Nhận Được Sản Phẩm Đúng Chất Lượng</p>
                                </li>
                                <li className="footer-widgets__item">
                                    <p>Được Đổi Sản Phẩm Mới Ngay Nếu Do Lỗi Kỹ Thuật</p>
                                </li>
                                <li className="footer-widgets__item">
                                    <p>Bảo Hành Bảo Trì Sản Phẩm Miễn Phí</p>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col span={4}>
                        <h3 className="footer-title">THANH TOÁN</h3>
                        <div>
                            <p>
                                <img decoding="async" loading="lazy" className="alignnone size-full wp-image-181" src="https://nangluongthanhphat.com/wp-content/uploads/2019/12/pay.png" alt="" width="109" height="30" srcSet="https://nangluongthanhphat.com/wp-content/uploads/2019/12/pay.png 109w, https://nangluongthanhphat.com/wp-content/uploads/2019/12/pay-24x7.png 24w, https://nangluongthanhphat.com/wp-content/uploads/2019/12/pay-36x10.png 36w, https://nangluongthanhphat.com/wp-content/uploads/2019/12/pay-48x13.png 48w" sizes="(max-width: 109px) 100vw, 109px" />
                            </p>
                            <h4>Kết nối với chúng tôi</h4>
                            <div className="social-list">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/bonnuocthanhphat/" title="facebook">
                                            <img alt="" src="https://nangluongthanhphat.com/wp-content/themes/flatsome-child/images/face.png" width="25" height="25" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://zalo.me/#" title="zalo">
                                            <img alt="" src="https://nangluongthanhphat.com/wp-content/themes/flatsome-child/images/za.png" width="25" height="25" />
                                        </a>
                                    </li>
                                    <li><a href="#" title="email"><img alt="" src="https://nangluongthanhphat.com/wp-content/themes/flatsome-child/images/mail.png" width="25" height="25" /></a></li>
                                    <li><a href="#" title="google"><img alt="" src="https://nangluongthanhphat.com/wp-content/themes/flatsome-child/images/go.png" width="25" height="25" /></a></li>
                                </ul>
                            </div>
                            <h4>Đăng ký nhận tin</h4>



                            <div className="flex-row medium-flex-wrap">
                                <div className="flex-col flex-grow">
                                    <p><span className="wpcf7-form-control-wrap" data-name="your-email"><input size={40} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Nhập email" value="" type="email" name="your-email" /></span>
                                    </p>
                                </div>
                                <div className="flex-col">
                                    <p><input className="wpcf7-form-control wpcf7-submit has-spinner button" type="submit" value="Đăng ký" /><span className="wpcf7-spinner"></span>
                                    </p>
                                </div>
                            </div><div className="wpcf7-response-output" aria-hidden="true"></div>

                        </div>
                    </Col>
                </Row>
            </div>

            <div className="footer-rights">
                <p className="footer-rights__content">2023 © PHATDAT. All Rights Reserved. Developed By Sam</p>
            </div>
        </footer>
    );
}

export default Footer;