import React from 'react'

const Subscribe = () => (
  <div id="mc_embed_signup">
		<form action="https://twitter.us12.list-manage.com/subscribe/post?u=f3d8a4a93db24975a2da9565b&amp;id=1e7e011a5b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate="" _lpchecked="1">
		  <div id="mc_embed_signup_scroll">
			<h2>Get Updates</h2>
	    	<div className="mc-field-group">
			    <label htmlFor="mce-EMAIL">Email Address </label>
			    <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
		    </div>
		    <div className="mc-field-group">
			    <label htmlFor="mce-FNAME">First Name </label>
			    <input type="text" value="" name="FNAME" className="required" id="mce-FNAME" />
		    </div>
			  <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{ display: "none"}} ></div>
          <div className="response" id="mce-success-response" style={{ display: "none"}} ></div>
			  </div>    
        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
				<div style={{position: "absolute", left: -5000}} aria-hidden="true">
					<label htmlFor="test">Name:</label>
					<input id="test" type="text" name="b_f3d8a4a93db24975a2da9565b_1e7e011a5b" tabindex="-1" value="" />
        </div>
				<div className="clear">
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
        </div>
			</div>
		</form>
	</div>
);

export default Subscribe;
