import React from 'react'
import './quote.css'

const Quote = (props) => {
	const { header, text, link, linkText } = props;
	return (
		<div className="quote">
			<div className="quote__wrapper">  
				<h2>{header}</h2>  
				<div className="quote__text">{text}</div>
				<div className="quote__source-wrapper">
					<div className="quote__source-label">Source</div>
					<div className="quote__source-item">
						<a href={link}>{linkText}</a>
					</div>
				</div>	
			</div>
		</div>
	);
}
 

export default Quote;
