import React from 'react'

const Quote = (props) => (
  <div className="quote">
		<h2>{props.header}</h2>
		<div className="quote__wrapper">    
			<div className="quote__text">{props.text}</div>
			<div className="quote__source-wrapper">
				<div className="quote__source-label">Source</div>
				<div className="quote__source-item">
					<a href="{props.link}">{props.linkText}</a>
				</div>
			</div>	
		</div>
	</div>
);

export default Quote;
