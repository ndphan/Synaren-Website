import React, { PureComponent } from 'react';
import { RootApp } from './App.styles';
import WorkCarousel from '../WorkCarousel/WorkCarousel';
import SynarenBanner from '../SynarenBanner';

class App extends PureComponent {
	render() {
		return (
			<RootApp className="primary-colour">
				<SynarenBanner/>
				<WorkCarousel/>
			</RootApp>
		);
	}
}

export default App;
