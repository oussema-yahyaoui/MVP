import React, { Component } from "react";
import "../Listephone.css";
import axios from "axios";
import UpdateFrom from "../components/Updatefrom.jsx";
export default class Listphone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [],
      newphonename: "",
      newprice: "",
      newimage: "",
      newdescription: "",
      pathlistphone: true,
      pathupdateFrom: false,
      savedId: null,
    };
    this.changecomponent = this.changecomponent.bind(this);
    this.handledel = this.handledel.bind(this);
    this.handleupdate = this.handleupdate.bind(this);
  }
  componentDidMount() {
    axios
      .get("/phones")
      .then((response) => {
        console.log(response);
        this.setState({
          phones: response.data,
        });
      })

      .catch((err) => {
        console.log(err);
      });
  }
  changecomponent(id) {
    this.setState({
      savedId: id,
      pathlistphone: false,
      pathupdateFrom: true,
    });
  }
  handledel(id) {
    axios.delete("/delphones/" + id).then((response) => {
      console.log(response);
      this.componentDidMount();
    });
  }

  handleupdate(id, newphonename, newprice, newimage, newdescription) {
    this.setState({
      newphonename: newphonename,
      newprice: newprice,
      newimage: newimage,
      newdescription: newdescription,
    });
    axios
      .put("/udphones/" + id, {
        newphone: newphonename,
        newprice: newprice,
        newimage: newimage,
        newdescription: newdescription,
      })
      .then((response) => {
        this.componentDidMount();
      });
  }

  render() {
    console.log("listPhonescomponent", this.state.phones);
    if (this.state.pathlistphone === true) {
      return (
        <div>
          {this.state.phones.map((phone, index) => (
            <div className="card" key={index}>
              <img src={phone.image} style={{ width: 300 }} alt="" />
              {/* <h1>{phone.image}</h1> */}
              <h1>{phone.phonename}</h1>
              <p className="price">{phone.price}</p>
              <p>{phone.description}</p>
              <p>
                <button
                  onClick={() => {
                    this.handledel(phone.id);
                  }}
                >
                  delete
                </button>
                <button
                  onClick={() => {
                    this.changecomponent(phone.id);
                  }}
                >
                  update
                </button>
              </p>
            </div>
          ))}
        </div>
      );
    }
    if (this.state.pathupdateFrom === true) {
      return (
        <div>
          <UpdateFrom
            theId={this.state.savedId}
            handleupdate={this.handleupdate}
          />
        </div>
      );
    }
  }
}
