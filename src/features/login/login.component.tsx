import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Row, Col, Form } from 'antd';

import { RootState } from '&store/store';
import { FormInputText, FormInputPassword } from '&styled/form/formInput/formInput.styled';
import { FormButton } from '&styled/form/formButton/formButton.styled';
import { loginActions } from './login.slice';
import { history } from '&store/store';
import { applicationStateActions } from '&features/applicationState/applicationState.slice';

type ReduxProps = ConnectedProps<typeof connector>;

const LoginComponent = (props: ReduxProps) => {
  const { loginAPI, setLoading, setApplicationState } = props;

  const { t } = useTranslation(['login', 'common']);

  const handleLoginSubmit = async (values: any) => {
    setLoading(true);

    const username = values.email.trim().toLowerCase();
    const password = values.password.trim();

    const { payload } = await loginAPI({ username, password });
    setLoading(false);

    if (payload?.status === 201) {
      setApplicationState({ successMessage: 'Successfully logged in', isSuccess: true, isError: false });
      history.push('/landing');
    } else {
      setApplicationState({ errorMessage: payload?.message, isError: true, isSuccess: false });
    }
  };

  return (
    <>
      <div className='login'>
        <Row className='main-row'>
          <Col className='left-col' xs={24} sm={10} md={12} lg={14} xl={14}>
            <div className='title-container'>
              <p className='title'>FitTech</p>
              <p className='description'>{t('DESCRIPTION')}</p>
            </div>
          </Col>
          <Col className='right-col' xs={24} sm={14} md={12} lg={10} xl={10}>
            <Row className='welcome-container'>
              <Col span={24}>
                <p className='login-text'>{t('HEY_THERE')}</p>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <p className='login-text'>
                  {t('WELCOME_MESSAGE')} <br /> {t('LOGIN_MESSAGE')}
                </p>
              </Col>
            </Row>

            <Row className='form-container'>
              <Col span={24}>
                <Form
                  name='login'
                  layout='vertical'
                  initialValues={{
                    mobile: undefined,
                    email: undefined,
                  }}
                  onFinish={handleLoginSubmit}
                >
                  <Form.Item
                    label={t('common:YOUR_EMAIL_LABEL')}
                    name='email'
                    rules={[
                      {
                        required: true,
                        message: t('common:REQUIRED_ERROR_MESSAGE', {
                          fieldName: t('EMAIL_LABEL').toLowerCase(),
                        }),
                      },
                      {
                        type: 'email',
                        message: t('common:INVALID_ERROR_MESSAGE', {
                          fieldName: t('EMAIL_LABEL').toLowerCase(),
                        }),
                      },
                    ]}
                  >
                    <FormInputText autoComplete='email' placeholder={t('common:EMAIL_PLACEHOLDER')} />
                  </Form.Item>

                  <Form.Item
                    label={t('common:YOUR_PASSWORD_LABEL')}
                    name='password'
                    rules={[
                      {
                        required: true,
                        message: t('common:REQUIRED_ERROR_MESSAGE', {
                          fieldName: t('common:YOUR_PASSWORD_LABEL'),
                        }),
                      },
                    ]}
                  >
                    <FormInputPassword autoComplete='current-password' placeholder={t('common:PASSWORD_PLACEHOLDER')}></FormInputPassword>
                  </Form.Item>

                  <Form.Item>
                    <FormButton htmlType='submit'>{t('LOGIN')}</FormButton>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

/**
 * Maps state variables from redux store to props of currect component
 * @param state
 */
const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {
  loginAPI: loginActions.loginAPI,
  setLoading: applicationStateActions.setIsLoading,
  setApplicationState: applicationStateActions.setApplicationState,
};

/**
 * Connects component to redux store
 */
const connector = connect(mapStateToProps, mapDispatchToProps);
const LoginComponentRedux = connector(LoginComponent);

export { LoginComponentRedux as LoginComponent };
