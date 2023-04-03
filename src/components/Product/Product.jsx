import React from "react";
import { Link } from "react-router-dom";
import styles from "./product.module.css";

const Product = (props) => {
  let product_style;
  if (props.gridView === 4) {
    product_style = styles.card;
  } else if (props.gridView === 2) {
    product_style = styles.card2;
  } else if (props.gridView === 1) {
    product_style = styles["card-list"];
  }

  return (
    // <div className={props.gridView ? styles.card : styles["card-list"]}>
    <div className={product_style}>
      <img src={props.img} alt={props.title} className={styles.img} />
      <div className={styles.info}>
        <Link to={`/catalog/${props.id}`} className={styles.name}>
          {props.title}
        </Link>
        <h4 className={styles.price}>{props.price}</h4>
        <p>{new Date(props.date).toString()}</p>
        {/* <p>{props.date}</p> */}
      </div>
    </div>
  );
};

export default Product;
