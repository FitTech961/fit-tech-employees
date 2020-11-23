import React from 'react';
import { Input, Select, DatePicker } from 'antd';
import { InputProps } from 'antd/lib/input';
import moment from 'moment';
import { store } from '&store/store';

import { SelectProps } from 'antd/lib/select';

import './formInput.styled.css';
import { ReactComponent as SearchIcon } from '&assets/images/search-icon.svg';
import { ReactComponent as ArrowIcon } from '&assets/images/arrow-icon.svg';

interface Props {
  setdob: Function;
}

const FormInputText = (props: InputProps) => <Input className='form-input' {...props} />;

const FormInputPassword = (props: InputProps) => <Input.Password className='form-input' visibilityToggle={true} {...props} />;

const FormInputSearch = (props: InputProps) => <Input className='form-input search' size='small' prefix={<SearchIcon />} {...props} />;

const FormInputSelect = ({ children, ...props }: SelectProps<string>) => (
  <Select suffixIcon={<ArrowIcon />} className='input-select' {...props}>
    {children}
  </Select>
);

const disableDates = (current: any) => {
  return current > moment('02-01-2000', 'DD-MM-YYYY');
};

const FormDatePicker = (props: Props) => {
  const { setdob } = props;

  return (
    <DatePicker
      className='form-input'
      format='DD-MM-YYYY'
      disabledDate={disableDates}
      defaultValue={moment(store?.getState()?.employees?.current?.dob, 'DD-MM-YYYY')}
      onChange={(date, dateString) => {
        setdob(dateString);
      }}
    />
  );
};

export { FormInputText, FormInputPassword, FormInputSearch, FormInputSelect, FormDatePicker };
