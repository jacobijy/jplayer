import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import rootReducer from '../reducer';
import MainPlayer from '../..';
import { render } from 'react-dom';

const store = createStore(rootReducer)

const Root = ({ store }) => (
    <Provider store={store}>
        <MainPlayer />
    </Provider>
)

render(<Root store={store} />, document.querySelector('#app'));