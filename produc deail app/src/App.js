import React, { Component } from "react";
import classes from "./App.module.css";
import ProductPreview from "./productpreview/ProductPreview";
import ProductDetails from "./ProductDetail/ProductDetails";
import TopBar from "./topbar/TopBar";
import ProductData from "./Porductdata";

class App extends Component {
  state = {
    productdata: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  };
  onColorOptionClick = (pos) => {
    this.setState({ currentPreviewImagePos: pos });
  };
  onFeatureItemClick = (pos) => {
    console.log(pos);
    this.setState({ currentSelectedFeature: pos });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar />
        </header>
        <div className={classes.maincontainer}>
          <div className={classes.productpreview}>
            <ProductPreview
              currentPreviewImage={
                this.state.productdata.colorOptions[
                  this.state.currentPreviewImagePos
                ].imageUrl
              }
              currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>
          <div className={classes.productdata}>
            <ProductDetails
              data={this.state.productdata}
              onColorOptionClick={this.onColorOptionClick}
              currentPreviewImagePos={this.state.currentPreviewImagePos}
              onFeatureItemClick={this.onFeatureItemClick}
              currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
