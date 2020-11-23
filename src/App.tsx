import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import { Layout, Button, Row, ConfigProvider, Alert, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import './App.css';
import 'antd/dist/antd.css';
import { ProtectedRoute } from '&route/protectedRoute';
import { RootState, history } from '&store/store';

import { LandingComponent } from '&features/landing/landing.component';
import { LoginComponent } from '&features/login/login.component';
import { Loader } from '&styled/loader/loader.styled';
import { loginActions } from '&features/login/login.slice';

type ReduxProps = ConnectedProps<typeof connector>;

const App = (props: ReduxProps) => {
  const { isAuthenticated, isLoading, isError, errorMessage, logoutAPI, token } = props;

  const { i18n } = useTranslation();
  const { t } = useTranslation('common');

  /** This useEffect rerenders dir */
  useEffect(() => {}, [i18n.language]);

  useEffect(() => {
    /** If the user is already logged in take him to landing screen */
    if (isAuthenticated) history.push('/landing');
  }, []);

  axios.interceptors.request.use(async req => {
    req.headers.authorization = `Bearer ${token}`;
    req.headers['Access-Control-Allow-Origin'] = '*';

    /** Important: request interceptors **must** return the request. */
    return req;
  });

  const { Header, Content } = Layout;

  return (
    /* This wrapper handles rtl and ltr directions for i18n */
    <ConfigProvider direction={i18n.dir()}>
      {isLoading ? <Loader /> : null}
      {isError ? <Alert message={t('ERROR_TITLE')} description={errorMessage} type='error' closable className='modal-bg' /> : null}
      <Layout>
        <Row>
          <Col span={22}>
            {isAuthenticated ? (
              <Header className='app-header'>
                <Button
                  className='header-button'
                  onClick={() => {
                    logoutAPI();
                  }}
                >
                  {t('LOGOUT')}
                </Button>
              </Header>
            ) : null}
          </Col>
          <Col span={2} className={isAuthenticated ? 'app-header' : 'app-header-lang'}>
            <Button className='lang-button' onClick={() => i18n.changeLanguage('en')}>
              en
            </Button>
            <Button className='lang-button' onClick={() => i18n.changeLanguage('ar')}>
              ar
            </Button>
          </Col>
        </Row>
        <Content className='main-body'>
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={LoginComponent} />
              <ProtectedRoute exact path='/landing' component={LandingComponent} validator={isAuthenticated} fallBack='/' />

              <Route path='/404' render={() => <div>page not found</div>} />
              <Redirect to='/404' />
            </Switch>
          </Router>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

/**
 * Maps state variables from redux store to props of currect component
 * @param state
 */
const mapStateToProps = (state: RootState) => ({
  // TODO change this to your real auth validator
  isAuthenticated: state.login.isAuthenticated,
  isLoading: state.applicationState.isLoading,
  errorMessage: state.applicationState.errorMessage,
  isError: state.applicationState.isError,
  token: state.login.token,
});

/**
 * Maps actions from slices to props
 */
const mapDispatchToProps = {
  logoutAPI: loginActions.logoutAPI,
};

/**
 * Connects component to redux store
 */
const connector = connect(mapStateToProps, mapDispatchToProps);
const AppRedux = connector(App);

export { AppRedux as App };
