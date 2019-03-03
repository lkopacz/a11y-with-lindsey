import React from 'react'
import './subscribe.css'

const Subscribe = props => {
  let bgClass
  if (props.hasBackground) {
    bgClass = 'convertkit-signup convertkit-signup--white-bg'
  } else {
    bgClass = 'convertkit-signup'
  }
  return (
    <div className={bgClass}>
      <script src="https://f.convertkit.com/ckjs/ck.5.js" />
      <form
        action="https://app.convertkit.com/forms/866792/subscriptions"
        className="seva-form formkit-form"
        method="post"
        data-sv-form="866792"
        data-uid="4218bd5fb5"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":null,"redirect_url":""},"modal":{"trigger":null,"scroll_percentage":null,"timer":null,"devices":null,"show_once_every":null},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":null},"slide_in":{"display_in":null,"trigger":null,"scroll_percentage":null,"timer":null,"devices":null,"show_once_every":null}}}'
      >
        <h2>Get my blogs first</h2>
        <div data-style="clean">
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          />
          <div
            data-element="fields"
            data-stacked="false"
            className="seva-fields formkit-fields"
          >
            <div className="formkit-field">
              <input
                className="formkit-input"
                aria-label="Your first name"
                name="fields[first_name]"
                required
                placeholder="Your first name"
                type="text"
                style={{
                  color: 'rgb(30, 54, 80)',
                  borderColor: 'rgb(227, 227, 227)',
                  borderRadius: '4px',
                  fontWeight: 400,
                }}
              />
            </div>

            <div className="formkit-field">
              <input
                className="formkit-input"
                name="email_address"
                placeholder="Your email address"
                aria-label="Your email address"
                required=""
                type="email"
                style={{
                  color: 'rgb(30, 54, 80)',
                  borderColor: 'rgb(227, 227, 227)',
                  borderRadius: '4px',
                  fontWeight: 400,
                }}
              />
            </div>

            <button
              data-element="submit"
              className="formkit-submit formkit-submit"
              style={{
                color: 'rgb(255, 255, 255)',
                backgroundColor: 'rgb(192, 55, 17)',
                borderRadius: '4px',
                fontWeight: 700,
              }}
            >
              <div className="formkit-spinner">
                <div />
                <div />
                <div />
              </div>
              <span>Subscribe</span>
            </button>
          </div>
          <a
            href="https://convertkit.com/?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
            className="formkit-powered-by"
            data-element="powered-by"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered By ConvertKit
          </a>
        </div>
      </form>
    </div>
  )
}

export default Subscribe
