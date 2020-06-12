import React from "react";

class DetailProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  // UNSAFE_componentWillMount() {
  //     if (localStorage.getItem('user') !== null) {
  //         var user = JSON.parse(localStorage.getItem('user'));
  //         this.setState({
  //             firstName: user.firstName,
  //             lastName: user.lastName,
  //             email: user.email,
  //             password: user.password,
  //             clear: false
  //         })
  //     }

  // }

  updateProfile = (e) => {
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    // this.setState({
    //     clear: !this.state.clear
    // }, () => {
    //     // localStorage.clear();
    //     localStorage.setItem("user", JSON.stringify(user))
    //     console.log('data===>>>', user)
    // })
    localStorage.clear();
    localStorage.setItem("user", JSON.stringify(user));
  };

  handleOnchangeFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleOnchangeLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  handleOnchangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleOnchangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  render() {
    const { lastName, firstName, password, email } = this.state;
    return (
      <div className="container">
        <div className="row well mt-4">
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <a href="#aboutModal" data-toggle="modal" data-target="#myModal">
              <img
                src="./assets/myface.jpg"
                name="aboutme"
                width="140"
                height="140"
                className="img-circle"
              />
            </a>
            <h3>{lastName}</h3>
            <em>click Your face to update Your Profile</em>
          </div>
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="firstName">First Name: </label>
              <p className="form-control">{firstName}</p>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name: </label>
              <p className="form-control">{lastName}</p>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address: </label>
              <p className="form-control">{email}</p>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <p className="form-control">{password}</p>
            </div>
          </div>
        </div>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="myModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header title-modal center">
                <button
                  type="button"
                  className=" btn btn-primary close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  X
                </button>
                <h4 className="modal-title" id="myModalLabel">
                  Update Profile {lastName}
                </h4>
              </div>
              <form className="modal-body" onSubmit={this.updateProfile}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name: </label>
                  <input
                    value={firstName}
                    name="firstName"
                    className="form-control"
                    onChange={this.handleOnchangeFirstName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name: </label>
                  <input
                    value={lastName}
                    name="lastName"
                    className="form-control"
                    onChange={this.handleOnchangeLastName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address: </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={this.handleOnchangeEmail}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={this.handleOnchangePassword}
                  />
                </div>
                <div className="btnControl">
                  <button type="submit" className="btn btn-secondary mr-2">
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailProfile;
