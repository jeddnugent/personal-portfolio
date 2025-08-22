import "../styles/Hero.css";

function Hero() {
	return (
		<>
			<div className="hero container">
				<img className="hero__img" src="/headshot.jpeg" alt="Profile Picture Headshot" />
				<h2 className="hero__subtitle">Hi, I'm Jedd 👋</h2>
				<h1 className="hero__title">Software Developer</h1>
				<p className="hero__desc">A passionate <strong>Software Developer</strong> with experience working in <strong>front-end mobile app development </strong>
					as well as <strong>Front-end and Full Stack Websites/Applications</strong></p>
				<a className="hero__btn btn" href="#">React out</a>
			</div>
		</>
	);

}

export default Hero;