import React from "react";
import classes from "./productpreview.module.css";
const ProductPreview = (props) => {
  const currentHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const currentMinute =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();

  return (
    <div className={classes.productpreview}>
      <img src={props.currentPreviewImage} alt="Product Preview" />
      {props.currentSelectedFeature === 1 ? (
        <div className={classes.heartsection}>
          <span class="material-symbols-outlined">ecg_heart</span>
          <p>78</p>
        </div>
      ) : (
        <div className={classes.timesection}>
          <p>{`${currentHour}:${currentMinute}`}</p>
        </div>
      )}
    </div>
  );
};
export default ProductPreview;
