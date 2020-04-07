import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';


function initializeReactGA() {
    ReactGA.initialize('UA-159216199-2');
    ReactGA.pageview('/');
}

class App extends Component {
	render() {
		initializeReactGA();
		return (
				<div className="App">
					<Header resumeData={resumeData}/>
					<About resumeData={resumeData}/>
					<Resume resumeData={resumeData}/>
					<Portfolio resumeData={resumeData}/>
					{/* <Testimonials resumeData={resumeData}/> */}
					<ContactUs resumeData={resumeData}/>
					<Footer resumeData={resumeData}/>
				</div>
		);
	}
}

export default App;
