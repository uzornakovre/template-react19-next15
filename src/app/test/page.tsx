"use client";

import { getTestData } from "@/lib/api-endpoints";
import styles from "./page.module.css";

const Test = () => {
  const fetchData = async () => {
    try {
      const data = await getTestData();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.page}>
      <button type="button" onClick={fetchData}>
        Получить данные
      </button>
    </div>
  );
};

export default Test;
