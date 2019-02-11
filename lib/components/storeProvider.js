import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (Component) => {
  const withStore = (props, { store }) => {
    return <Component {...props} store={store} />;
  };
  // we describe what withStore want to access in the context API
  withStore.contextTypes = {
    store: PropTypes.object
  };
  return withStore;
};


export default storeProvider;