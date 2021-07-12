import React from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './app/navigation';
import store from './app/store';

const App = () => (
	<Provider store={store}>
		<AppNavigator />
	</Provider>
);

export default App;
