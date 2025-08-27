import "../styles/components/Hero.css";

function Hero() {
	return (
		<>
			<div className="hero container">
				<img className="hero__img" src="/headshot.jpeg" alt="Profile Picture Headshot" />
				<h2 className="hero__subtitle">Hi, I'm Jedd 👋</h2>
				<h1 className="hero__title">Software Developer</h1>
				<p className="hero__desc">A passionate <strong>Software Developer</strong> located in Melbourne, Australia with experience working in <strong>front-end mobile app development </strong> as well as <strong>Front-end</strong> and <strong>Full Stack Websites/Applications</strong></p>
				<a className="hero__btn btn" href="mailto:jeddnugent@gmail.com" target="_blank">React out</a>
			</div>
		</>
	);

}

export default Hero;