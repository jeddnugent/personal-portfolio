import '../styles/components/Footer.css';

function Footer() {
	return (
		<>
			<footer className='footer container section'>
				<h3 className="footer__title">~ © {new Date().getFullYear()} Jedd Nugent ~</h3>
			</footer>
		</>
	);
}

export default Footer;