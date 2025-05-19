import React from 'react';
import ClassList from './components/ClassList';
import 'antd/dist/antd.css';
import { Button } from 'antd';


const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Gym Management System</h1>
      <Button type="primary">Click me</Button>
      <ClassList />
    </div>
  );
};

export default App;