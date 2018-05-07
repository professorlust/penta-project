import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import renderer from 'react-test-renderer';
import configureStore from '../../src/js/ui/store';
import history from '../../src/js/ui/store/history';
import Start from '../../src/js/ui/containers/Start';
import { finalizeStart } from '../../src/js/ui/actions/start';

describe('<Start />', () => {
  test('Should renders', () => {
    const store = configureStore();

    const tree = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <Start />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should switch to Await loader', () => {
    const store = configureStore();
    store.dispatch(finalizeStart(true));

    const tree = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <Start />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
