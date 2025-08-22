import "../styles/About.css";

function About() {
	return (
		<>
			<div className="about container section">
				<div className="about__content">
					<h2 className="about__title">About</h2>
					<p className="about__desc">Software Engineer with 2 years experience in mobile app development with a BSc of Computer Science.</p>
					<p className="about__desc">Returning from an extended backpacking trip throughout Europe.</p>
					<p className="about__desc">Experienced in developing mobile applications for iOS and Android. Currently working in React TypeScript building Full Stack Web solutions. Highly adaptable with an eagerness to learn new technologies, languages and frameworks to produce the best products possible.</p>
					<hr className="about__hr" />
					<h3 className="about__subtitle">Technologies</h3>
					<div className="about__ul-container">
						<ul className="about__ul">
							<li>C#</li>
							<li>Typescript</li>
							<li>ReactJS</li>
						</ul>
						<ul className="about__ul">
							<li>HTML + CSS</li>
							<li>SQL (PostgreSQL)</li>
							<li>ExpressJS</li>
						</ul>
					</div>

				</div>
				<div className="about__img-wrapper">
					<img className="about__img" src="/aboutSplash.jpg" alt="Hiking Photo" />
				</div>
			</div>
		</>);
}

export default About;