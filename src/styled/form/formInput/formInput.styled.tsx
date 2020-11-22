import React from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import './formInput.styled.css';

const FormInputText = (props: InputProps) => <Input className='form-input' {...props} />;

const FormInputPassword = (props: InputProps) => <Input.Password className='form-input' visibilityToggle={true} {...props} />;

export { FormInputText, FormInputPassword };
