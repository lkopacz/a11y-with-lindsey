import React from 'react'

const Quote = (props) => (
  <div className="quote">
		<h2>Did you know?</h2>
		<div className="quote__wrapper">    
			<div className="quote__text">Nearly 1 in 5 People Have a Disability in the U.S.</div>
			<div className="quote__source-wrapper">
				<div className="quote__source-label">Source</div>
				<div className="quote__source-item">
					<a href="https://www.census.gov/newsroom/releases/archives/miscellaneous/cb12-134.html">U.S. Census, 2010</a>
				</div>
			</div>	
		</div>
	</div>
);

export default Quote;
