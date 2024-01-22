import React from "react";
import "./fotter.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
	return (
		<div className="main-footer-wrapper">
      <div className="frist-section-wrapper">
        <ul className="sm-icons">
          <li><FacebookRoundedIcon/></li>
          <li><InstagramIcon/></li>
          <li><YouTubeIcon/></li>
        </ul>
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notice</li>
          <p className="service-code">Service Code</p>
          <p className="copy-w">
            &copy; 1997-2024 Netflix, Inc.
          </p>
        </ul>
      </div>
      <div className="three-sections">
      <div className="second-section-wrapper">
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
      </div>
      <div className="third-section-wrapper">
      <ul>
        <li>Gift Cards</li>
        <li>Terms of Use</li>
        <li>Corporate Information</li>
      </ul>
        
      </div>
      <div className="fourth-section-wrapper">
      <ul>
        <li>Media Center</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>
        </div>
        </div>
		</div>
	);
};

export default Footer;
