import React, { useState } from 'react';
import { Button, Space } from 'antd';
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>count: {count}</h1>
      <Space>
        <Button onClick={() => setCount(count + 1)}>add</Button>
        <Button onClick={() => setCount(count - 1)}>reduce</Button>
      </Space>
    </>
  )
};

export default App;