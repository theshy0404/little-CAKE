import React, { useState, useEffect } from 'react';
import { Button, Space, Result } from 'antd';
import axios from 'axios';
import LOADING_GIF from './public/loading.gif';
import './App.css';

const App = () => {
  const [msg, setMsg] = useState('');
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setTimeout(fetchData, 2000)
  }, []);

  const fetchData = () => {
    axios('http://127.0.0.1:5000/', {
      method: 'GET', // or 'POST'
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log(res)
        setMsg(res.data);
      })
      .catch((error) => {
        console.log(error)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      });
  }

  return (
    <>
      {
        isLoading ? <img src={LOADING_GIF} /> : (
          isError ? <Result
            status="error"
            title="There are some problems..."
            extra={
              <Button type="primary" key="again">
                Try it again
              </Button>
            }
          /> : (
            <>
              <h1>{msg}</h1>
              <h2>count: {count}</h2>
              <Space>
                <Button onClick={() => setCount(count + 1)}>add</Button>
                <Button onClick={() => setCount(count - 1)}>reduce</Button>
              </Space>
            </>)
        )
      }
    </>
  )
};

export default App;