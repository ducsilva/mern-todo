import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { Row, Col, Menu, Dropdown, Button, message, Avatar } from "antd";
import {
  UserOutlined,
  PlusOutlined,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { UserHeader } from "./style";
import useLocalStorage from "../../hooks/useLocalStorage";

// class Header extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             localStorage: false,
//             user: {}
//         }
//     }
//     componentDidMount() {
//         if (localStorage.getItem('user') !== null) {
//             const user = JSON.parse(localStorage.getItem('user'));
//             this.setState({ user: user, localStorage: !this.state.localStorage })
//         }
//         else {
//             this.setState({
//                 localStorage: this.state.localStorage
//             })
//         }
//     }

//     renderbutton = () => {
//         return (
//             <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <Link className="nav-link" to={"/sign-in"} className="btn btn-success mr-2">Login</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" to={"/sign-up"} className="btn btn-info">Sign up</Link>
//                 </li>
//             </ul>
//         )
//     }

//     render() {
//         return (
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
//                     <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
//                 </a>
//                 <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
//                 <div className="collpase navbar-collapse">
//                     <ul className="navbar-nav mr-auto">
//                         <li className="navbar-item">
//                             {this.state.localStorage === true ? <Link to="/create" className="nav-link">Create Todo</Link> : <Link to="/create" className="nav-link" disabled>Create Todo</Link>}
//                         </li>
//                     </ul>
//                     <ul className="navbar-nav">
//                         {this.state.user === null ?
//                             this.renderbutton() :
//                             <div className="dropdown">
//                                 <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                     <img src="./assets/default.jpg" className="imageDefault mr-2" />
//                                     {this.state.user !== null ? this.state.user.lastName : ''}
//                                 </button>
//                                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
//                                     <Link className="dropdown-item" to="detail">View Profile</Link>
//                                     <Link className="dropdown-item" to="create">Create Todo</Link>
//                                     <button className="dropdown-item" onClick={this.handleLogout} >Logout</button>
//                                 </div>
//                             </div>}
//                     </ul>
//                 </div>
//             </nav>
//         )
//     }
// }

function Header() {
  const [localStore, setLocalStore] = useState(false);
  const [user, setUser] = useState(null);
  const [storedValue] = useLocalStorage();

  //Get user from localStorage

  function handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
  }

  function handleLogout() {
    alert("clicked");
  }

  const renderbutton = () => {
    const menuLogin = (
      <Menu>
        <Menu.Item
          key="1"
          icon={<LoginOutlined />}
          className="btn btn-success mr-2"
        >
          <Link to={"/sign-in"}>Login</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<PlusOutlined />} className="btn btn-info">
          <Link to={"/sign-up"}>Sign up</Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menuLogin} placement="bottomRight">
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    );
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />} className="dropdown-item">
        <Link to="detail">View Profile</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<PlusOutlined />} className="dropdown-item">
        <Link to="create">Create Todo</Link>
      </Menu.Item>
      <Button key="3" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Button>
    </Menu>
  );

  return (
    <Row gutter="16">
      <Col span={16}>
        <a href="https://github.com/DucSilva" target="_blank">
          <img src={logo} width="30" height="30" alt="duc-silva" />
          <Link to="/">ToDo App</Link>
        </a>
      </Col>
      <Col span={8}>
        <UserHeader>
          {user === null ? (
            renderbutton()
          ) : (
            <Dropdown.Button
              overlay={menu}
              placement="bottomCenter"
              icon={<UserOutlined />}
            >
              {user.lastName}
            </Dropdown.Button>
          )}
        </UserHeader>
      </Col>
    </Row>
  );
}

export default Header;
