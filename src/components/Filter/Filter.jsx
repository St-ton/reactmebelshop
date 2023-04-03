import React from "react";
import styles from "./filter.module.css";

const Filter = ({ setGridView, sort, setSort }) => {
  return (
    <div className={styles.filter}>
      <div className={styles.wrapper}>
        <div className={styles["icon-wrapper"]}>
          <img src="./images/filter-icon.png" alt="" />
          <p className={styles["filter-text"]}>Filter</p>
          <img
            onClick={() => setGridView(4)}
            src="./images/grid-view-icon.png"
            alt=""
          />
          <img
            onClick={() => setGridView(2)}
            src="./images/grid2-view-icon.png"
            width={22}
            height={22}
            alt=""
          />
          <img
            onClick={() => setGridView(1)}
            src="./images/list-view-icon.png"
            alt=""
          />
          <p className={styles["amount-text"]}>Showing 1-16 of 32 results</p>
        </div>
        <div className={styles.controls}>
          <p className={styles.amount}>
            Show
            <input type="number" className={styles["amount-number"]} />
          </p>
          <p>
            Sort by
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="pricedown">Price Down</option>
              <option value="priceup">Price Up</option>
            </select>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
