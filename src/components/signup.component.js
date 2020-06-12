import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            localStorage: false,
        }
    }

    componentWillMount() {
        if (localStorage.getItem('user') !== null) {
            this.setState({
                localStorage: !this.state.localStorage
            })
        } else {
            // this.setState({ localStorage: this.state.localStorage })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let firstName = e.target.firstName.value;
        let lastName = e.target.lastName.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        const user = {
            firstName, lastName, email, password
        }
        localStorage.setItem('user', JSON.stringify(user))
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name="firstName" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name="lastName" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" />
                </div>

                {this.state.localStorage === false ? <button type="submit" className="btn btn-primary btn-block">Sign Up</button> : <button type="submit" className="btn btn-primary btn-block" disabled>Sign Up</button>}
                <p className="forgot-password text-right">
                    Already registered <Link to={"/sign-in"}>sign in?</Link>
                </p>
            </form>
        );
    }
}