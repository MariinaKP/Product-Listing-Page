import React, { useEffect, useState } from "react";
import styles from "./Toaster.module.scss";

export const Toaster = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return <>{isVisible && <div className={styles.toaster}>{children}</div>}</>;
};
