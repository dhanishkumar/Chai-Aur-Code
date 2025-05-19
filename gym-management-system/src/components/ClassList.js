import React, { useEffect } from 'react';
import { List, Typography, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClasses } from '../redux/classSlice';

const ClassList = () => {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classes.classes);
  const classStatus = useSelector((state) => state.classes.status);

  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  if (classStatus === 'loading') {
    return <Spin />;
  }

  return (
    <List
      bordered
      dataSource={classes}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text>{item.name}</Typography.Text>
        </List.Item>
      )}
    />
  );
};

export default ClassList;