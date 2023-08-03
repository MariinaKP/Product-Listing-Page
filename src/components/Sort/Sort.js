import { useState } from "react";
import { Icons } from "../../assets/Icons";
import styles from "./Sort.module.scss";

export const Sort = () => {
  const [selectedSort, setSelectedSort] = useState(false);

  document.addEventListener("DOMContentLoaded", () => {
    const sortButton = document.getElementById("sortButton");

    sortButton.addEventListener("click", () => {
      const selectedOption = document.querySelector(
        'input[name="sortOption"]:checked'
      );

      if (selectedOption) {
        const selectedValue = selectedOption.value;
        console.log("Selected option:", selectedValue);
      } else {
        console.log("No option selected");
      }
    });
  });

  return (
    <div className={styles.sort}>
      <div className={styles.sort__group}>
        <span>Sort</span>
        {selectedSort ? (
          <Icons.BsChevronUp
            className={styles.icon}
            onClick={() => setSelectedSort(false)}
          />
        ) : (
          <Icons.BsChevronDown
            className={styles.icon}
            onClick={() => setSelectedSort(true)}
          />
        )}
      </div>
      {selectedSort && (
        <div className={styles.sort__dropdown}>
          <div className={styles.sort__dropdown__group}>
            <input type="radio" value="a-z" name="sortOption" /> Alphabetical
            a-z
          </div>
          <div className={styles.sort__dropdown__group}>
            <input type="radio" value="z-a" name="sortOption" /> Alphabetical
            z-a
          </div>
          <div className={styles.sort__dropdown__group}>
            <input type="radio" value="priceAscending" name="sortOption" />{" "}
            Price ascending
          </div>
          <div className={styles.sort__dropdown__group}>
            <input type="radio" value="priceDescending" name="sortOption" />{" "}
            Price descending
          </div>
          <button id="sortButton" className="btn">
            Sort
          </button>
        </div>
      )}
    </div>
  );
};
