import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.svg";


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            localStorage: false,
            user: {}
        }
    }
    componentDidMount() {
        if (localStorage.getItem('user') !== null) {
            const user = JSON.parse(localStorage.getItem('user'));
            this.setState({ user: user, localStorage: !this.state.localStorage })
        }
        else {
            this.setState({
                localStorage: this.state.localStorage
            })
        }
    }


    renderbutton = () => {
        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"} className="btn btn-success mr-2">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"} className="btn btn-info">Sign up</Link>
                </li>
            </ul>
        )
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                    <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                </a>
                <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            {this.state.localStorage === true ? <Link to="/create" className="nav-link">Create Todo</Link> : <Link to="/create" className="nav-link" disabled>Create Todo</Link>}
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {this.state.user === null ?
                            this.renderbutton() :
                            <div className="dropdown">
                                <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="./assets/default.jpg" className="imageDefault mr-2" />
                                    {this.state.user !== null ? this.state.user.lastName : ''}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <Link className="dropdown-item" to="detail">View Profile</Link>
                                    <Link className="dropdown-item" to="create">Create Todo</Link>
                                    <button className="dropdown-item" onClick={this.handleLogout} >Logout</button>
                                </div>
                            </div>}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;