import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import { Layout, Button, Row, ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';

import './App.css';
import 'antd/dist/antd.css';
import { ProtectedRoute } from '&route/protectedRoute';
import { RootState, history } from '&store/store';

import { LandingComponent } from '&features/landing/landing.component';
import { LoginComponent } from '&features/login/login.component';
import { Loader } from '&styled/loader/loader.styled';

type ReduxProps = ConnectedProps<typeof connector>;

const App = (props: ReduxProps) => {
  const { isAuthenticated, isLoading } = props;

  const { i18n } = useTranslation();

  /** This useEffect rerenders dir */
  useEffect(() => {}, [i18n.language]);


  const { Header, Footer,  Content } = Layout;

  return (
    /* This wrapper handles rtl and ltr directions for i18n */
    <ConfigProvider direction={i18n.dir()}>
      {console.log('isAuthenticated ', isAuthenticated)}
      {isLoading ? <Loader /> : null}
      <Layout>
        <Header>
          {/* This block is for changing language */}
          <Row justify={'center'}>
            <Button onClick={() => i18n.changeLanguage('en')}>en </Button>
            <Button onClick={() => i18n.changeLanguage('ar')}>ar</Button>
          </Row>
        </Header>
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
        <Footer className='footer'>footer</Footer>
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
const mapDispatchToProps = {};

/**
 * Connects component to redux store
 */
const connector = connect(mapStateToProps, mapDispatchToProps);
const AppRedux = connector(App);

export { AppRedux as App };
