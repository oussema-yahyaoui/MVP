import React, { Component } from "react";
import axios from "axios";
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

    this.handlechangePhonename = this.handlechangePhonename.bind(this);
    this.handlechangePrice = this.handlechangePrice.bind(this);
    this.handlechangeImage = this.handlechangeImage.bind(this);
    this.handlechangeDescription = this.handlechangeDescription.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
  handleClick() {
    axios.post("/addphone", this.state).then((response) => {
      console.log(response);
    });
  }
  componentDidMount() {
    axios
      .get("/phones")
      .then((response) => {
        console.log("from the server", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <div>
          <div className="container">
            <h1>Add a phone for sale</h1>
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
            <button onClick={this.handleClick} className="registerbtn">
              validate
            </button>
          </div>
        </div>
      </div>
    );
  }
}
