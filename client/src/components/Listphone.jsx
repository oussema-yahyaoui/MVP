import React, { Component } from "react";
import "../Listephone.css";
import axios from "axios";
import UpdateFrom from "../components/Updatefrom.jsx";
export default class Listphone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [],
      pathlistphone: true,
      pathupdateFrom: false,
    };
    this.changecomponent = this.changecomponent.bind(this);
  }
  componentDidMount() {
    axios
      .get("/phones")
      .then((response) => {
        // console.log(response);
        this.setState({ phones: response.data });
      })

      .catch((err) => {
        console.log(err);
      });
  }
  changecomponent() {
    this.setState({
      pathlistphone: false,
      pathupdateFrom: true,
    });
  }
  render() {
    if (this.state.pathlistphone === true) {
      return (
        <div>
          {this.state.phones.map((phone, index) => (
            <div className="card" key={index}>
              <img src={phone.image} style={{ width: 300 }} alt="" />
              <h1>{phone.name}</h1>
              <p className="price">{phone.price}</p>
              <p>{phone.description}</p>
              <p>
                <button>delete</button>
                <button onClick={this.changecomponent}>update</button>
              </p>
            </div>
          ))}
        </div>
      );
    }
    if (this.state.pathupdateFrom === true) {
      return (
        <div>
          <UpdateFrom />
        </div>
      );
    }
  }
}
