import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import { Layout, Button, Row, ConfigProvider, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import './App.css';
import 'antd/dist/antd.css';
import { ProtectedRoute } from '&route/protectedRoute';
import { RootState, history, store } from '&store/store';

import { LandingComponent } from '&features/landing/landing.component';
import { LoginComponent } from '&features/login/login.component';
import { Loader } from '&styled/loader/loader.styled';
import { loginActions } from '&features/login/login.slice';

type ReduxProps = ConnectedProps<typeof connector>;

const App = (props: ReduxProps) => {
  const { isAuthenticated, isLoading, logoutAPI } = props;

  const { i18n } = useTranslation();
  const { t } = useTranslation('common');

  /** This useEffect rerenders dir */
  useEffect(() => {}, [i18n.language]);

  useEffect(() => {
    /** If the user is already logged in take him to landing screen */
    if (isAuthenticated) history.push('/landing');
  }, []);

  axios.interceptors.request.use(async req => {
    req.headers.authorization = `Bearer ${store?.getState()?.login?.token}`;
    req.headers['Access-Control-Allow-Origin'] = '*';

    /** Important: request interceptors **must** return the request. */
    return req;
  });

  const { Content } = Layout;

  return (
    /* This wrapper handles rtl and ltr directions for i18n */
    <ConfigProvider direction={i18n.dir()}>
      {isLoading ? <Loader /> : null}
      <Layout>
        <Row className={isAuthenticated ? 'app-header' : '.app-header-noBg'}>
          <Col xs={10} sm={10} md={6} lg={4} xl={4} className='lang-container'>
            {isAuthenticated ? <span className='header-button'>{store?.getState()?.login?.fullName}</span> : null}
          </Col>
          <Col xs={2} sm={2} md={10} lg={14} xl={14}></Col>
          <Col xs={6} sm={6} md={4} lg={3} xl={3} className='lang-container'>
            {isAuthenticated ? (
              <Button
                className='header-button'
                onClick={() => {
                  logoutAPI();
                }}
              >
                {t('LOGOUT')}
              </Button>
            ) : null}
          </Col>
          <Col xs={6} sm={6} md={4} lg={3} xl={3} className='lang-container'>
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
