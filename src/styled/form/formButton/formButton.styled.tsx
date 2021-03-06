import React from 'react';
import { Button } from 'antd';
import { NativeButtonProps } from 'antd/lib/button/button';

import './formButton.styled.css';

const FormButton = (props: NativeButtonProps) => (
  <Button type='primary' shape='round' block={true} className='form-button primary-button' {...props} />
);

const BorderlessButton = (props: NativeButtonProps) => <Button type='text' className='borderless' {...props} />;

export { FormButton, BorderlessButton };
