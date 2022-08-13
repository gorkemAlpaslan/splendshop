import React, { useState, setState } from "react";
import { render } from "react-dom";
import "./ProductPage.css";
import Colors from "./Colors";
import DetailsThumb from "./DetailsThumb";

class ProductPage extends React.Component {
  state = {
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componenetDidMound() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { index } = this.state;
    const { ProductDetails } = this.props;
    const productDetailsArray = [];
    productDetailsArray.push(ProductDetails);

    return (
      <div className="Product_Page_Card">
        {productDetailsArray.map((item) => (
          <div className="details" key={item._id}>
            <div className="big_img">
              <img src={item.src[index]} alt=""></img>
            </div>
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <Colors colors={item.colors}></Colors>

              <p>{item.description}</p>
              <p>{item.content}</p>
              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              ></DetailsThumb>
              <button className="card">Add To Card</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductPage;