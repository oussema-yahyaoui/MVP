import React, { Component } from "react";
import "../Listephone.css";
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
          <div className="card">
            <img
              src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg"
              style={{ width: 300 }}
              alt=""
            />
            <h1>Tailored Jeans</h1>
            <p className="price">$19.99</p>
            <p>
              Some text about the jeans. Super slim and comfy lorem ipsum lorem
              jeansum. Lorem jeamsun denim lorem jeansum.
            </p>
            <p>
              <button>delete</button>
              <button onClick={this.changecomponent}>update</button>
            </p>
          </div>
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
