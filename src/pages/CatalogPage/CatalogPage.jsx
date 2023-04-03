import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Filter from "../../components/Filter/Filter";
import Info from "../../components/Info/Info";
import Product from "../../components/Product/Product";
import productService from "../../services/products";

import styles from "./catalogpage.module.css";

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [gridView, setGridView] = useState(4);
  const [sort, setSort] = useState("pricedown");

  useEffect(() => {
    productService.getProducts().then((res) => {
      const sortedByPrice = res.data.sort((a, b) => a.price - b.price);
      setProducts(sortedByPrice);
    });
  }, []);

  useEffect(() => {
    if (sort === "pricedown") {
      const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedByPrice);
    } else if (sort === "priceup") {
      const sortedByPrice = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedByPrice);
    } else if (sort === "newest") {
      const sortedByDate = [...products].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setProducts(sortedByDate);
    } else if (sort === "oldest") {
      const sortedByDate = [...products].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      setProducts(sortedByDate);
    }
  }, [sort]);

  return (
    <div>
      <Breadcrumbs title="Shop" />
      <Filter setGridView={setGridView} sort={sort} setSort={setSort} />
      <div className={styles["products-wrapper"]}>
        {products.map((product) => {
          return (
            <Product
              key={product._id}
              id={product._id}
              img={product.img}
              title={product.title}
              price={product.price}
              date={product.createdAt}
              gridView={gridView}
            />
          );
        })}
      </div>
      <Info />
    </div>
  );
};

export default CatalogPage;
