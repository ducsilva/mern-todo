import React from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { navigate: false }
    }

    handleLogout = () => {
        localStorage.clear("user");
        this.setState({ navigate: true })
    }

    render() {

        const { navigate } = this.state;
        if (navigate) {
            return <Redirect to="/" push={true} />
        }
        return (
            <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
        )
    }
}

export default Logout;