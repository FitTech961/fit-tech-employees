import React from 'react';
import { Input, Select } from 'antd';
import { InputProps } from 'antd/lib/input';
import { SelectProps } from 'antd/lib/select';

import './formInput.styled.css';
import { ReactComponent as SearchIcon } from '&assets/images/search-icon.svg';
import { ReactComponent as ArrowIcon } from '&assets/images/arrow-icon.svg';

const FormInputText = (props: InputProps) => <Input className='form-input' {...props} />;

const FormInputPassword = (props: InputProps) => <Input.Password className='form-input' visibilityToggle={true} {...props} />;

const FormInputSearch = (props: InputProps) => <Input className='form-input search' size='small' prefix={<SearchIcon />} {...props} />;

const FormInputSelect = ({ children, ...props }: SelectProps<string>) => (
  <Select suffixIcon={<ArrowIcon />} className='input-select' {...props}>
    {children}
  </Select>
);

export { FormInputText, FormInputPassword, FormInputSearch, FormInputSelect };
