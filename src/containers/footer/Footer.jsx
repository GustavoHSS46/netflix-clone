import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="netflix__footer">
      <div className="netflix__footer-call">
        <h1>Questions? Call 1-844-505-2993</h1>
      </div>
      <div className="netflix__footer-more">
        <div className="netflix__footer-more_faq">
          <h1>FAQ</h1>
          <h1>Investor Relations</h1>
          <h1>Ways to Watch</h1>
          <h1>Corporate Infomartion</h1>
          <h1>Netflix Originals</h1>
        </div>
        <div className="netflix__footer-more_help">
          <h1>Help Center</h1>
          <h1>Jobs</h1>
          <h1>Terms of Use</h1>
          <h1>Contact Us</h1>
        </div>
        <div className="netflix__footer-more_account">
          <h1>Account</h1>
          <h1>Redeem Gift Cards</h1>
          <h1>Privacy</h1>
          <h1>Speed Test</h1>
        </div>
        <div className="netflix__footer-more_media">
          <h1>Media Center</h1>
          <h1>Buy Gift Cards</h1>
          <h1>Cookie Preferences</h1>
          <h1>Legal Notices</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer