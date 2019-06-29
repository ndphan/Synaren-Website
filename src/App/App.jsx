import React, { PureComponent } from 'react';
import { RootApp, FooterVersion } from './App.styles';
import WorkCarousel from '../WorkCarousel/WorkCarousel';
import SynarenBanner from '../SynarenBanner';

class App extends PureComponent {
	render() {
		return (
			<RootApp className="primary-colour">
				<SynarenBanner/>
				<WorkCarousel/>
				<FooterVersion>© Nam Phan; v:{process.env.REACT_APP_API_VERSION_NUMBER}</FooterVersion>
			</RootApp>
		);
	}
}

export default App;
