import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import './Login.scss';
// import { FormattedMessage } from 'react-intl';
// import { DiagnosticCategory } from 'typescript';

// trong class login extends Component gọi trỏ this.state = { tên đăng nhập : "" , password : "",}
// second : khai giá trị ( value trong input ) -> value={this.state.username} 2. bắt sự kiện onChange = {(event) => this.handleOnChangeInput(event)}
// third : gọi hàm handleOnChangeInput = (event) =>{ set setState : this.setState({ username : event.target.value }) console.log(event.target.value)} Lưu ý setState trong phần này


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isShowPassword: false,
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = () => {
        console.log(' username : ', this.state.username, 'password : ', this.state.password)
        // console.log(' username : ' + this.state.username)
        // console.log(' password : ' + this.state.password)
        console.log(' all state ', this.state) /* State là kiểu dạng object this.state sẽ consolog tất cả mọi cái state gọi trong hàm kh càn phải gọi tới gọi lui */
    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword // Lưu ý xem phân tích lại phần này
        })
    }

    render() {
        return (
            <div className='login__background'>
                <div className='login__container'>
                    <div className='login__cotent'>
                        <h1> LOGIN </h1>
                        <div className='col-12 form-group'>
                            <label> Username</label>
                            <input placeholder='Enter your username'
                                type='text' className="form-control"
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)} />
                        </div>
                        <div className='col-12 form-group'>
                            <label> Password</label>
                            <div className='custom-input-password'>
                                <input placeholder='Enter your password'
                                    type={this.state.isShowPassword ? 'text' : 'password'} // ( nếu type = {this.state.password ? 'text' : ' password'})
                                    className="form-control password"
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)} />
                                <span onClick={() => { this.handleShowHidePassword() }}> <i class={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i> </span>
                            </div>


                        </div>

                        <div className='col-12 btn-login' onClick={() => { this.handleLogin() }}>
                            <button> Login</button>
                        </div> {/* gọi sự kiên onClick = {() => {trỏ về hàm của mình khai báo :  this.handleLogin ()}} */}

                        <div className='col-12 forgot-login'>
                            <a> Forgot your password ? </a>
                        </div>
                        <div className='col-12 text-center'> <span>Or Login with :</span> </div>
                        <div className='col-12 icon'>
                            <i className='fab fa-google-plus-g'></i>
                            <i className='fab fa-facebook-f'></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language // Nơi lấy hàm chuyển đổi ngôn ngữ
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
