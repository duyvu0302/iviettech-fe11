import React from "react";
import history from "../../util/history";
import logo from "../../images/logo.webp";
import call from "../../images/call.webp";
import chat from "../../images/speech-bubble.png";
import noti from "../../images/notification (2).png"; 
import notification from "../../images/notifination.png";
import user from "../../images/user.png";
import "./styles.css";
import { Menu, Dropdown, Avatar } from "antd";
import { DownOutlined, UserOutlined, WechatOutlined } from "@ant-design/icons";

function Header() {
  const menu = JSON.parse(localStorage.getItem("user")) ? (
    <Menu>
      <Menu.Item key="0" c>
        <a href="#" onClick={() => history.push("/login")}>
          Đăng xuất
        </a>
      </Menu.Item>
    </Menu>
  ) : (
    <Menu>
      <Menu.Item key="0" c>
        <a href="#" onClick={() => history.push("/login")}>
          Đăng nhập
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#" onClick={() => history.push("/register")}>
          Đăng ký
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Tài khoản cá nhân</Menu.Item>
    </Menu>
  );
  return (
    <>
      <div>
        <div className="header-container">
          <div className="container-content">
            <div className="img-logo" onClick={() => history.push("/")}>
              <img src={logo} alt="logo" />
            </div>
            <nav className="nav-header">
              <ul className="nav-item-header">
                <li>Khách sạn</li>
                <li>Ưu đãi</li>
                <li>Tin tức</li>
                <li>Dịch vụ</li>
                <li>Cẩm nang du lịch</li>
              </ul>
            </nav>
          </div>
          <div className="container-content-left">
            <div class="working-time">
              <div class="wrapper">
                <div class="mytour-phone">
                  <p class="ha-noi">
                    <img src={call} alt="" />
                    <strong>Hà Nội:</strong>
                    <a href="tel:+024 7109 9999">024 7109 9999</a>
                  </p>
                  <p className="sai-gon">
                    <strong>24/7</strong>
                    <strong>TPHCM:</strong>
                    <a href="tel:+028 7109 9998">028 7109 9998</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="icon">
              <img src={chat} alt="" />
              <img src={noti} alt="" />
              {JSON.parse(localStorage.getItem("user")) ? (
                <>
                  <span>
                    <div
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Avatar icon={<UserOutlined />} />
                      <Dropdown overlay={menu} arrow>
                        <a>
                          {JSON.parse(localStorage.getItem("user"))[0].nickname}
                          <DownOutlined />
                        </a>
                      </Dropdown>
                    </div>
                  </span>
                </>
              ) : (
                <>
                  <div>
                    <Dropdown overlay={menu} arrow>
                      <a>
                        <img src={user} alt="" />
                        <DownOutlined />
                      </a>
                    </Dropdown>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
