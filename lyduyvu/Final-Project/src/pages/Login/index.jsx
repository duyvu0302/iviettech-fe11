import React, { useEffect,useState } from "react";
import "./styleLogin.css";
import { connect } from "react-redux";
import history from "../../util/history";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { getUserAccount } from "../../redux/actions";
import panner from "../../images/panner_logInOut.webp";

function SignUp({ props, userList, getUserAccount }) {

  // useEffect(()=>{
  //   getUserAccount()
  // },[])

  const [isEmail,setIsEmail] = useState();
  const [form] = Form.useForm();
 
  const handelSubmitLogin =(value) => {
    console.log("onFinish -> value", value);
    getUserAccount({
      email: value.email,
      password: value.password,
    });
  };
  const  checkSignUp = () => {
  //   if (JSON.parse(localStorage.getItem("user"))) {
  //    history.push("/hotels");
  //  }
 };
  return (
    <>
      <div className="login-form-container">
        <img src={panner} alt=""/>
        <div className='login-form-wrapper'>
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={(value) => handelSubmitLogin(value)}
        >
          <div><h3>ĐĂNG NHẬP</h3></div>
          <div className='register-form-login' >Chưa có tài khoản ? <span>Đăng ký</span> ngay</div>
          <Form.Item
            name="email"
            className="child-item"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <div>TÀI KHOẢN</div>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            className="child-item"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
                min: 8,
                message: "Mật khẩu phải lớn hơn 8 kí tự",
              },
            ]}
          >
            <div>MẬT KHẨU</div>

            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <div className='save-account' >
          <Form.Item className="child-item remember-forgot">
            <Form.Item
              name="remember"
              className="child-item"
              valuePropName="checked"
              noStyle
            >
              <Checkbox className="checked-remember">Lưu tài khoản</Checkbox>
            </Form.Item>
            <div className="login-form-forgot" href="">
              Quên mật khẩu
            </div>
          </Form.Item>
          </div>

          <Form.Item className="child-item">
            <Button
              onClick={() => checkSignUp()}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  const { userList } = state.registerReducer;
  return {
    userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAccount: (params) => dispatch(getUserAccount(params)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
