import React from "react";
import "./header.css";
import Netfilxlogo from "../../assets/Images/NetflixLogo.png"
// importing the icons in header 
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

const Header = () => {
	return (
		<div className="main-header-wrapper">
			<div className="header-continer">
				<div className="left-header-wrapper">
					<ul>
						<li>
							<img src={Netfilxlogo} alt="Netfilx Logo" width={"100px"} />
						</li>
						<li>Netflix</li>
						<li>Home</li>
						<li>TvShows</li>
						<li>Movies</li>
						<li>Latest</li>
						<li>MyList</li>
						<li>Browse by Languages</li>
					</ul>
				</div>
				<div className="right-header-wrapper">
					<ul>
						<li>
							<SearchIcon />
						</li>
						<li>
							<NotificationsNoneIcon />
						</li>
						<li>
							<AccountCircleIcon />
						</li>
						<li>
							<ArrowDropDownCircleIcon />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
