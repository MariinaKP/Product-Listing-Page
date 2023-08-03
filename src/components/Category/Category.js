import React, { useState, useEffect } from "react";
import { Product } from "../Product/Product";
import { Filter } from "../Filter/Filter";
import { Sort } from "../Sort/Sort";
import { useParams } from "react-router-dom";
import styles from "./Category.module.scss";

export const Category = ({ data }) => {
  const { category, subcategory } = useParams();
  const [openSortAndFilter, setOpenSortAndFilter] = useState(false);
  const [selectedReviews, setSelectedReviews] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);

  const [displayedProducts, setDisplayedProducts] = useState(8);

  const categoryData = data.categories.find(
    (catеgory) => catеgory.slug === category
  );
  const subcategoryData = categoryData
    ? categoryData.subcategories.find(
        (subcatеgory) => subcatеgory.slug === subcategory
      )
    : null;

  const products = subcategoryData ? subcategoryData.products : [];

  useEffect(() => {
    setDisplayedProducts(8);
  }, [subcategory]);

  const handleLoadMore = () => {
    setDisplayedProducts((prevDisplayedProducts) => prevDisplayedProducts + 8);
  };

  const handleFiltersChange = (selectedReviews, selectedPriceRange) => {
    setSelectedReviews(selectedReviews);
    setSelectedPriceRange(selectedPriceRange);
  };

  const handleSortChange = (selectedSort) => {
    setSelectedSort(selectedSort);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedReviews !== null) {
      return product.rating === parseInt(selectedReviews);
    }

    if (selectedPriceRange !== null) {
      const { from, to } = selectedPriceRange;
      return (
        product.price >= parseFloat(from) && product.price <= parseFloat(to)
      );
    }
    return true;
  });

  const sortProducts = (products, selectedSort) => {
    switch (selectedSort) {
      case "a-z":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "z-a":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case "priceAscending":
        return [...products].sort((a, b) => a.price - b.price);
      case "priceDescending":
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts, selectedSort);

  return (
    <main className="container">
      <div className={styles.category}>
        <div
          className={`${styles.category__desktop__filter_sort} ${styles.category__filter}`}
        >
          <Filter onFiltersChange={handleFiltersChange} />
        </div>
        <div className={styles.category__products}>
          <div className={styles.category__heading}>
            <div className={styles.category__heading__title}>
              <h2 className={styles.title}>{category}</h2>
              <div className={styles.subtitle}>{subcategory}</div>
            </div>
            <div className={styles.category__desktop__filter_sort}>
              <Sort onSortChange={handleSortChange} />
            </div>
          </div>
          <div className={styles.category__mobile__filter_sort}>
            <Filter onFiltersChange={handleFiltersChange} />
            <Sort />
            {/* <div onClick={() => setOpenSortAndFilter(!openSortAndFilter)}>
              Sort & Filter
            </div>
            {openSortAndFilter && (
              <div>
                <Filter />
                <Sort />
              </div>
            )} */}
          </div>
          <div className={styles.category__products__list}>
            {sortedProducts.slice(0, displayedProducts).map((product) => (
              <Product key={product.name} product={product} />
            ))}
          </div>
          <div className={styles.category__products__more}>
            {filteredProducts.length === 0 ? (
              <div>No products for this category.</div>
            ) : (
              <div>
                {displayedProducts === filteredProducts.length
                  ? "All products"
                  : `You see ${Math.min(
                      displayedProducts,
                      filteredProducts.length
                    )} out of ${filteredProducts.length}`}
              </div>
            )}
            {displayedProducts < filteredProducts.length && (
              <button className="btn" onClick={handleLoadMore}>
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
