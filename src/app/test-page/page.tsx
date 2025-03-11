"use client";

import { getTestData } from "@/lib/api-endpoints";
import styles from "./page.module.css";
import { useGetTestQuery } from "@/services/api";
import { useEffect } from "react";

const TestPage = () => {
  // пример загрузки данных черех RTK Query
  const { data } = useGetTestQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  // пример загрузки данных через fetch
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
      {/* <Preloader /> */}
      <button type="button" onClick={fetchData}>
        Получить данные
      </button>
    </div>
  );
};

export default TestPage;
