import React from 'react'

function Footer() {
  return (
    <div className="foot_container">
      <div className="foot_link_container container">
        <div className="footer_link" disabled="true">Unlit for Business</div>
        <div className="footer_link" disabled="true">Dispensaries</div>
        <div className="footer_link" disabled="true">Merchandise</div>
        <div className="footer_link" disabled="true">Support</div>
        <div className="footer_link" disabled="true">Blog</div>
        <div className="footer_link" disabled="true">Badge Voting</div>
        <div className="footer_link" disabled="true">Careers</div>
        <div className="footer_link" disabled="true">API</div>
        <div className="footer_link" disabled="true">Terms</div>
        <div className="footer_link" disabled="true">Privacy</div>
        <div className="footer_link" disabled="true">Cookie Policy</div>
        <div className="footer_link" disabled="true">CCPA Notice</div>
        <div className="footer_link" disabled="true">Do Not Sell My Personal Information</div>
      </div>
      <div className="foot_social_media_container container">
        <img src="./socmed.jpg" className="foot_img" alt="fake social media buttons"/>
      </div>
    </div>
  )
}

export default Footer
