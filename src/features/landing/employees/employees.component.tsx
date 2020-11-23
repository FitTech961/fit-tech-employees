import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Row, Col, Form, Select } from 'antd';

import { RootState } from '&store/store';
import { FormInputText, FormInputSelect } from '&styled/form/formInput/formInput.styled';
import { BorderlessButton, FormButton } from '&styled/form/formButton/formButton.styled';

type ReduxProps = ConnectedProps<typeof connector>;

interface Props {
  /** Reset current selected employee and closes modal */
  closeModal: Function;
}

// WIP
const EmployeesComponent = (props: ReduxProps & Props) => {
  const { closeModal } = props;

  const { t } = useTranslation(['common', 'landing']);

  return (
    <>
      <Row justify='center'>
        {/* First Colum */}
        <Col xs={24} sm={24} md={24} lg={11} xl={11}>
          <Form.Item
            name='firstName'
            label={t('landing:FIRSTNAME')}
            rules={[
              {
                required: true,
                message: t('common:REQUIRED_ERROR_MESSAGE', {
                  fieldName: t('landing:FIRSTNAME').toLowerCase(),
                }),
              },
            ]}
          >
            <FormInputText placeholder={t('common:NAME_PLACEHOLDER')}></FormInputText>
          </Form.Item>

          <Form.Item
            name='lastName'
            label={t('landing:LASTNAME')}
            rules={[
              {
                required: true,
                message: t('common:REQUIRED_ERROR_MESSAGE', {
                  fieldName: t('landing:LASTNAME').toLowerCase(),
                }),
              },
            ]}
          >
            <FormInputText placeholder={t('landing:LASTNAME')}></FormInputText>
          </Form.Item>

          <Form.Item
            name='phoneNumber'
            label={t('land:MOBILE')}
            extra={t('common:MOBILE_HINT')}
            rules={[
              {
                required: true,
                pattern: /^\d{8}$/,
                message: t('common:REQUIRED_ERROR_MESSAGE', {
                  fieldName: t('landing:MOBILE').toLowerCase(),
                }),
              },
            ]}
          >
            <FormInputText placeholder={t('common:MOBILE_PLACEHOLDER')}></FormInputText>
          </Form.Item>

          <Form.Item
            name='jobTitle'
            label={t('landing:JOB_TITLE')}
            rules={[
              {
                required: true,
                message: t('common:REQUIRED_ERROR_MESSAGE', {
                  fieldName: t('landing:JOB_TITLE').toLowerCase(),
                }),
              },
            ]}
          >
            <FormInputText></FormInputText>
          </Form.Item>

          <Form.Item
            name='jobDescription'
            label={t('landing:JOB_DESCRIPTION')}
            rules={[
              {
                required: true,
                message: t('common:REQUIRED_ERROR_MESSAGE', {
                  fieldName: t('landing:JOB_DESCRIPTION').toLowerCase(),
                }),
              },
            ]}
          >
            <FormInputText></FormInputText>
          </Form.Item>
        </Col>
        <Col xs={0} sm={0} md={2} lg={2} xl={2} />

        {/* Second Column */}
        <Col xs={24} sm={24} md={24} lg={11} xl={11}>
          <Form.Item
            label={t('landing:EMAIL')}
            name='email'
            rules={[
              {
                type: 'email',
                required: true,
                message: t('common:INVALID_ERROR_MESSAGE', {
                  fieldName: t('landing:EMAIL').toLowerCase(),
                }),
              },
            ]}
          >
            <FormInputText placeholder={t('common:EMAIL_PLACEHOLDER')}></FormInputText>
          </Form.Item>

          <Form.Item
            label={t('landing:DOB')}
            name='dob'
            extra='dd-mm-yyyy'
            rules={[
              {
                pattern: /^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d/,
                required: true,
                message: t('common:INVALID_ERROR_MESSAGE', {
                  fieldName: t('landing:DOB').toLowerCase(),
                }),
              },
            ]}
          >
            <FormInputText placeholder={'dd-mm-yyyy'}></FormInputText>
          </Form.Item>

          <Form.Item
            label={t('landing:address')}
            name='address'
            rules={[
              {
                required: true,
                message: t('common:INVALID_ERROR_MESSAGE', {
                  fieldName: t('landing:address').toLowerCase(),
                }),
              },
            ]}
          >
            <FormInputText placeholder={t('common:ADDRESS_PLACEHOLDER')}></FormInputText>
          </Form.Item>

          <Form.Item
            name='department'
            label={t('landing:DEPARTMENT')}
            rules={[
              {
                required: true,
                message: t('common:REQUIRED_ERROR_MESSAGE', {
                  fieldName: t('landing:DEPARTMENT').toLowerCase(),
                }),
              },
            ]}
          >
            <FormInputText></FormInputText>
          </Form.Item>

          <Form.Item
            name='role'
            label={t('landing:ROLE')}
            rules={[
              {
                required: true,
                message: t('common:REQUIRED_ERROR_MESSAGE', {
                  fieldName: t('landing:ROLE').toLowerCase(),
                }),
              },
            ]}
          >
            <FormInputSelect>
              <Select.Option value='admin'>
                <span>{'admin'}</span>
              </Select.Option>
              <Select.Option value='employee'>
                <span>{'employee'}</span>
              </Select.Option>
            </FormInputSelect>
          </Form.Item>
        </Col>
      </Row>

      <Row className='modal-button-container' justify='center'>
        <Col span={6}></Col>
        <Col span={6}>
          <Form.Item>
            <BorderlessButton
              onClick={() => {
                closeModal();
              }}
            >
              {t('common:CANCEL')}
            </BorderlessButton>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item>
            <FormButton htmlType='submit'>{t('landing:SAVE')}</FormButton>
          </Form.Item>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

/**
 * Maps state variables from redux store to props of currect component
 * @param state
 */
const mapStateToProps = (state: RootState) => ({});

/**
 * Maps actions from slices to props
 */
const mapDispatchToProps = {
  // map your actions here ex:
  // increment : counterActions.increment
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const EmployeesComponentRedux = connector(EmployeesComponent);

export { EmployeesComponentRedux as EmployeesComponent };
