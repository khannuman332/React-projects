import React from "react";

import classes from "./Productdetail.module.css";
const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.productimage];
    if (pos === props.currentPreviewImagePos) {
      classArr.push(classes.selctedborderimage);
    }
    return (
      <img
        key={pos}
        src={item.imageUrl}
        alt=""
        className={classArr.join(" ")}
        onClick={() => props.onColorOptionClick(pos)}
      />
    );
  });

  const featurelist = props.data.featureList.map((item, pos) => {
    const classArr = [classes.featureitem];
    if (pos === props.currentSelectedFeature) {
      classArr.push(classes.slectedfeatureitem);
    }
    return (
      <button
        onClick={() => props.onFeatureItemClick(pos)}
        key={pos}
        className={classArr.join(" ")}
      >
        {item}
      </button>
    );
  });

  return (
    <div className={classes.productdata}>
      <h1 className={classes.producttitle}>{props.data.title}</h1>
      <p className={classes.productdescription}>{props.data.description}</p>
      <h3 className={classes.sectionheading}>Select Color</h3>
      <div>{colorOptions}</div>
      <h3 className={classes.sectionheading}>Features</h3>
      <div>{featurelist}</div>
      <button className={classes.primarybutton}>Buy Now</button>
    </div>
  );
};

export default ProductDetails;
