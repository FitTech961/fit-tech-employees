import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState } from '&store/store';
/**
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
import { loginActions } from './login.slice';

type ReduxProps = ConnectedProps<typeof connector>;

const LoginComponent = (props: ReduxProps) => {
  /**
   * i18n translation function.
   * Takes namespace/s as params and nothing for default.
   */
  const { t } = useTranslation(['login']); // Make sure namespace is added to locales

  /**
   * useEffect performs side-effects on component rendering.
   * It takes a function for side-effects and a dependency list.
   * When dependency list is empty, useEffect runs each time the component rerenders
   * Adding variables to the dependency list will cause useEffect to run each time a variable changes
   */
  useEffect(() => {
    // Write your side-effects here
  }, []);

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

/**
 * Maps state variables from redux store to props of currect component
 * @param state
 */
const mapStateToProps = (state: RootState) => ({
  // Map your redux state to your props here
});

/**
 * Maps actions from slices to props
 */
const mapDispatchToProps = {
  // map your actions here ex:
  // increment : counterActions.increment
};

/**
 * Connects component to redux store
 */
const connector = connect(mapStateToProps, mapDispatchToProps);
const LoginComponentRedux = connector(LoginComponent);

export { LoginComponentRedux as LoginComponent };
