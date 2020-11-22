import React from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import './formInput.styled.css';
import { ReactComponent as SearchIcon } from '&assets/images/search-icon.svg';

const FormInputText = (props: InputProps) => <Input className='form-input' {...props} />;

const FormInputPassword = (props: InputProps) => <Input.Password className='form-input' visibilityToggle={true} {...props} />;

const FormInputSearch = (props: InputProps) => <Input className='form-input search' size='small' prefix={<SearchIcon />} {...props} />;

export { FormInputText, FormInputPassword, FormInputSearch };
