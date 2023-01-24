import React, { useState, useEffect } from "react";
import { Button, Space, Result, message } from "antd";
import LOADING_GIF from "../../public/loading.gif";
import styles from "./styles.module.css";
import { doSQLProduce } from "../../api/doRequest";

const Home = () => {
  const [msg, setMsg] = useState("Happy NewYear!");
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    setTimeout(fetchData, 2000);
  }, []);

  const fetchData = () => {
    setLoading(true);
    doSQLProduce("get_little_cake", {
      mock_id1: "2",
      user: "little_cake",
      mock_id2: "1",
    })
      .then((data) => {
        Array.isArray(data) && setList(data);
      })
      .catch((error) => {
        message.error(error.message);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <img src={LOADING_GIF} />
      ) : isError ? (
        <Result
          status="error"
          title="There are some problems..."
          extra={
            <Button onClick={() => fetchData()} type="primary" key="again">
              Try it again
            </Button>
          }
        />
      ) : (
        <div className={styles.wrap}>
          <h1>{msg}</h1>
          {list.map((item) => (
            <h3 key={item.id}>{item.name}</h3>
          ))}
          <h2>count: {count}</h2>
          <Space>
            <Button type="primary" onClick={() => setCount(count + 1)}>
              add
            </Button>
            <Button danger onClick={() => setCount(count - 1)}>
              reduce
            </Button>
          </Space>
        </div>
      )}
    </>
  );
};

export default Home;
