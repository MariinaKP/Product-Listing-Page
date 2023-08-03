import { useState, useEffect } from "react";
import { Icons } from "../../assets/Icons";
import styles from "./Sort.module.scss";
export const Sort = ({ onSortChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSort = () => {
    onSortChange(selectedSort);
    setIsDropdownOpen(false);
  };

  const handleClear = () => {
    setSelectedSort(null);
    onSortChange(null); // Notify parent component of cleared sort
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sort__group}>
        <span>Sort</span>
        {isDropdownOpen ? (
          <Icons.BsChevronUp className={styles.icon} onClick={toggleDropdown} />
        ) : (
          <Icons.BsChevronDown
            className={styles.icon}
            onClick={toggleDropdown}
          />
        )}
      </div>
      {isDropdownOpen && (
        <div className={styles.sort__dropdown}>
          <div className={styles.sort__dropdown__group}>
            <input
              type="radio"
              value="a-z"
              name="sortOption"
              checked={selectedSort === "a-z"}
              onChange={() => setSelectedSort("a-z")}
            />{" "}
            Alphabetical a-z
          </div>
          <div className={styles.sort__dropdown__group}>
            <input
              type="radio"
              value="z-a"
              name="sortOption"
              checked={selectedSort === "z-a"}
              onChange={() => setSelectedSort("z-a")}
            />{" "}
            Alphabetical z-a
          </div>
          <div className={styles.sort__dropdown__group}>
            <input
              type="radio"
              value="priceAscending"
              name="sortOption"
              checked={selectedSort === "priceAscending"}
              onChange={() => setSelectedSort("priceAscending")}
            />{" "}
            Price ascending
          </div>
          <div className={styles.sort__dropdown__group}>
            <input
              type="radio"
              value="priceDescending"
              name="sortOption"
              checked={selectedSort === "priceDescending"}
              onChange={() => setSelectedSort("priceDescending")}
            />{" "}
            Price descending
          </div>
          <button className="btn" onClick={handleSort}>
            Sort
          </button>
          <button className="btn" onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
