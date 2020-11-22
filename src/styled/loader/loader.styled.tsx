import React from 'react';
import { Spin } from 'antd';

import './loader.styled.css';

const Loader = () => {
  return (
    <div className='loader-bg'>
      <Spin />
    </div>
  );
};

export { Loader };
