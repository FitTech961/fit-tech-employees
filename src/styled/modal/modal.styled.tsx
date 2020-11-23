import React, { PropsWithChildren } from 'react';
import Modal, { ModalProps } from 'antd/lib/modal/Modal';
import { Col, Row } from 'antd';

import { FormButton, BorderlessButton } from '&styled/form/formButton/formButton.styled';

import './modal.styled.css';
import { ShorthandPropertyAssignment } from 'typescript';

interface Props {
  /** Borderless button title */
  borderlessTitle: string;

  /** Triggered when borderless button is clicked */
  borderlessHandler: Function;

  /** Title for submit button */
  buttonTitle: string;

  /** Handler for submit button */
  buttonHandler: Function;
}

const EmployeeModal = ({ children, ...props }: ModalProps & PropsWithChildren<any> & Props) => {
  const { borderlessTitle, borderlessHandler, buttonTitle, buttonHandler } = props;

  return (
    <Modal width={800} className='modal-employee' title={null} zIndex={900} closable={false} footer={null} {...props}>
      <Row className='modal-header'>
        <Col span={23}></Col>
        <Col span={23}></Col>
      </Row>

      {children}
    </Modal>
  );
};

export { EmployeeModal };
