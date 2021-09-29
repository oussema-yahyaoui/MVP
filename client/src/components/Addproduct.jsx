import React, { Component } from "react";
import "../index.css";

export default class Addproduct extends Component {
  constructor() {
    super();
    this.state = {
      phonename: "",
      price: "",
      image: "",
      description: "",
    };

    this.hundlechangePhonename = this.hundlechangePhonename.bind(this);
    this.hundlechangePrice = this.hundlechangePrice.bind(this);
    this.hundlechangeImage = this.hundlechangeImage.bind(this);
    this.hundlechangeDescription = this.hundlechangeDescription.bind(this);
    // this.hundleClick = this.hundleClick.bind(this);
  }
  hundlechangePhonename(event) {
    this.setState({ phone_name: event.target.value });
  }
  hundlechangePrice(event) {
    this.setState({ price: event.target.value });
  }
  hundlechangeImage(event) {
    this.setState({ image: event.target.value });
  }
  hundlechangeDescription(event) {
    this.setState({ description: event.target.value });
  }
  render() {
    return (
      <div>
        <form>
          <div className="container">
            <h1>Add a phone for sale</h1>
            <p>Please fill in this form to sale your phone.</p>

            <label>
              <b>Mobile Phone Name:</b>
            </label>
            <input
              onChange={this.hundlechangePhonename}
              type="text"
              placeholder="Enter Phone Name "
            />
            <label>
              <b>Mobile Phone Price:</b>
            </label>
            <input
              onChange={this.hundlechangePrice}
              type="text"
              placeholder="Enter Phone Price"
            />

            <label>
              <b> Add Mobile Phone image</b>
            </label>
            <input
              onChange={this.hundlechangeImage}
              type="text"
              placeholder=" Add Mobile Phone image"
            />

            <label>
              <b> Description</b>
            </label>

            <input
              onChange={this.hundlechangeDescription}
              type="text"
              placeholder="Description"
            />
            <button type="submit" className="registerbtn">
              validate
            </button>
          </div>
        </form>
      </div>
    );
  }
}
