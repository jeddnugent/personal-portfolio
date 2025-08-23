import "../styles/components/Header.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
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
							<button className="header__sun">
								<SunnyIcon />
							</button>
						</li>
						<li>
							<a className="header__resume btn" href="#">Resume</a>
						</li>
					</ul>
					<button className="header__bars">
						<MenuIcon />
					</button>
				</nav>
			</div>

		</>
	);
}

export default Header;