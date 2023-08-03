import { useEffect, useState } from "react";
import { Icons } from "../../assets/Icons";
import styles from "./Filter.module.scss";

export const Filter = ({ onFiltersChange }) => {
  const [selectedReviewsFilter, setSelectedReviewsFilter] = useState(false);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState(false);
  const [selectedRating, setSelectedRating] = useState("");
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(
    window.innerWidth >= 768 // 768px is a breakpoint for desktop view
  );

  // Update isDropdownOpen state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsDropdownOpen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleRatingChange = (event) => {
    const rating =
      event.target.value === selectedRating ? "" : event.target.value;
    setSelectedRating(rating);
  };

  const handlePriceFromChange = (event) => {
    setPriceRange((prevRange) => ({ ...prevRange, from: event.target.value }));
  };

  const handlePriceToChange = (event) => {
    setPriceRange((prevRange) => ({ ...prevRange, to: event.target.value }));
  };

  const handleFilters = () => {
    const noFiltersSelected =
      selectedRating === "" && (priceRange.from === "" || priceRange.to === "");

    if (noFiltersSelected) {
      onFiltersChange(null, null);
    } else {
      onFiltersChange(selectedRating, priceRange);
    }
  };

  useEffect(() => {
    handleFilters();
  }, [selectedRating, priceRange]);

  return (
    <>
      <aside className={styles.filter}>
        <div className={styles.filter__heading}>
          <h3 className={styles.filter__title}>Filter</h3>
          {isDropdownOpen ? (
            <Icons.BsChevronUp
              className={styles.icon}
              onClick={toggleDropdown}
            />
          ) : (
            <Icons.BsChevronDown
              className={styles.icon}
              onClick={toggleDropdown}
            />
          )}
        </div>
        {isDropdownOpen && (
          <div className={styles.filter__dropdown}>
            <div className={styles.filter__group}>
              <span>Reviews</span>
              {selectedReviewsFilter ? (
                <Icons.BsChevronUp
                  className={styles.icon}
                  onClick={() => setSelectedReviewsFilter(false)}
                />
              ) : (
                <Icons.BsChevronDown
                  className={styles.icon}
                  onClick={() => setSelectedReviewsFilter(true)}
                />
              )}
            </div>
            {selectedReviewsFilter && (
              <div>
                <div>
                  <input
                    className={styles.checkbox}
                    value="1"
                    type="checkbox"
                    checked={selectedRating === "1"}
                    onChange={handleRatingChange}
                  />{" "}
                  <Icons.AiFillStar />
                </div>
                <div>
                  <input
                    className={styles.checkbox}
                    value="2"
                    type="checkbox"
                    checked={selectedRating === "2"}
                    onChange={handleRatingChange}
                  />{" "}
                  <Icons.AiFillStar />
                  <Icons.AiFillStar />
                </div>
                <div>
                  <input
                    className={styles.checkbox}
                    value="3"
                    type="checkbox"
                    checked={selectedRating === "3"}
                    onChange={handleRatingChange}
                  />{" "}
                  <Icons.AiFillStar />
                  <Icons.AiFillStar />
                  <Icons.AiFillStar />
                </div>
                <div>
                  <input
                    className={styles.checkbox}
                    value="4"
                    type="checkbox"
                    checked={selectedRating === "4"}
                    onChange={handleRatingChange}
                  />{" "}
                  <Icons.AiFillStar />
                  <Icons.AiFillStar />
                  <Icons.AiFillStar />
                  <Icons.AiFillStar />
                </div>
                <div>
                  <input
                    className={styles.checkbox}
                    value="5"
                    type="checkbox"
                    checked={selectedRating === "5"}
                    onChange={handleRatingChange}
                  />{" "}
                  <Icons.AiFillStar />
                  <Icons.AiFillStar />
                  <Icons.AiFillStar />
                  <Icons.AiFillStar />
                  <Icons.AiFillStar />
                </div>
              </div>
            )}{" "}
            <div className={styles.filter__group}>
              <span>Price</span>
              {selectedPriceFilter ? (
                <Icons.BsChevronUp
                  className={styles.icon}
                  onClick={() => setSelectedPriceFilter(false)}
                />
              ) : (
                <Icons.BsChevronDown
                  className={styles.icon}
                  onClick={() => setSelectedPriceFilter(true)}
                />
              )}
            </div>
            {selectedPriceFilter && (
              <div>
                <div>
                  <input
                    className={styles.field}
                    type="text"
                    placeholder="From"
                    value={priceRange.from}
                    onChange={handlePriceFromChange}
                    // onClick={handleFilters}
                  />{" "}
                </div>
                <div>
                  <input
                    className={styles.field}
                    type="text"
                    placeholder="To"
                    value={priceRange.to}
                    onChange={handlePriceToChange}
                    // onClick={handleFilters}
                  />{" "}
                </div>
              </div>
            )}{" "}
          </div>
        )}
      </aside>
    </>
  );
};
