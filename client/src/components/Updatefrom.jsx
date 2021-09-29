import React, { Component } from "react";

export default class Updatefrom extends Component {
  constructor() {
    super();
    this.state = {
      phonename: "",
      price: "",
      image: "",
      description: "",
    };

    this.handlechangePhonename = this.handlechangePhonename.bind(this);
    this.handlechangePrice = this.handlechangePrice.bind(this);
    this.handlechangeImage = this.handlechangeImage.bind(this);
    this.handlechangeDescription = this.handlechangeDescription.bind(this);
  }
  handlechangePhonename(event) {
    this.setState({ phone_name: event.target.value });
  }
  handlechangePrice(event) {
    this.setState({ price: event.target.value });
  }
  handlechangeImage(event) {
    this.setState({ image: event.target.value });
  }
  handlechangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <div className="container">
            <h1>Update your phone for sale</h1>
            <p>Please fill in this form to sale your phone.</p>

            <label>
              <b>Mobile Phone Name:</b>
            </label>
            <input
              onChange={this.handlechangePhonename}
              type="text"
              placeholder="Enter Phone Name "
            />
            <label>
              <b>Mobile Phone Price:</b>
            </label>
            <input
              onChange={this.handlechangePrice}
              type="text"
              placeholder="Enter Phone Price"
            />

            <label>
              <b> Add Mobile Phone image</b>
            </label>
            <input
              onChange={this.handlechangeImage}
              type="text"
              placeholder=" Add Mobile Phone image"
            />

            <label>
              <b> Description</b>
            </label>

            <input
              onChange={this.handlechangeDescription}
              type="text"
              placeholder="Description"
            />
            <button className="registerbtn">update</button>
          </div>
        </div>
      </div>
    );
  }
}
