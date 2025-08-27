import "../styles/components/Header.css";
import "../styles/components/MobileHeader.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
function Header(props: {
	isLightMode: boolean;
	setLightMode: Dispatch<SetStateAction<boolean>>;
}) {
	const [isMobileMenuVisable, setMobileMenuVisable] = useState(false);

	return (
		<>
			<div className="container header">
				<nav>
					<ul className="header__menu">
						<li>
							<a className="header__link" href="#about">About</a>
						</li>
						<li>
							<a className="header__link" href="#featured">Work</a>
						</li>
						<li>
							<a className="header__link" href="#contact">Contact</a>
						</li>
						<li className="header__line"></li>
						<li>
							<button className="header__sun" onClick={() => props.setLightMode(!props.isLightMode)}>
								<SunnyIcon />
							</button>
						</li>
						<li>
							<a className="header__resume btn" href="/Jedd_Nugent_Resume.pdf" target="_blank">Resume</a>
						</li>
					</ul>
					<button className="header__bars" onClick={() => setMobileMenuVisable(!isMobileMenuVisable)}>
						<MenuIcon />
					</button>
				</nav>
			</div>
			<div className={`mobile-nav ${isMobileMenuVisable ? "show" : "hide"}`}>
				<nav>
					<ul className="mobile-nav__menu">
						<li>
							<a href="#about" className="mobile-nav__link" onClick={() => setMobileMenuVisable(false)}>About</a>
						</li>
						<li>
							<a href="#featured" className="mobile-nav__link" onClick={() => setMobileMenuVisable(false)}>Work</a>
						</li>
						<li>
							<a href="#contact" className="mobile-nav__link" onClick={() => setMobileMenuVisable(false)}>Contact</a>
						</li>
						<li className="mobile-nav__link-line"></li>
						<li>
							<button className="mobile-nav__sun" onClick={() => props.setLightMode(!props.isLightMode)}>
								<SunnyIcon />
							</button>
						</li>
						<li>
							<a className="mobile-nav__button btn" href="/Jedd_Nugent_Resume.pdf" target="_blank">Resume</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}

export default Header;