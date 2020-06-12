import React, { Component } from "react";

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = { user: {} }
    }
    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.setState({ user })
    }

    handleLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        if (this.state.user.email === email && this.state.user.password === password) {
            alert("Login successfully");
            window.location.assign('/')
        } else {
            alert("Sth wrong! Please login again")
        }
    }
    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}