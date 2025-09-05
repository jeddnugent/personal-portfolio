import "../styles/components/About.css";
import { motion } from "framer-motion";

function About() {
	return (
		<>
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true, amount: 0.3 }}
			>
				<div id="about" className="about container section">
					<div className="about__content">
						<h2 className="about__title">About</h2>
						<p className="about__desc">Hello there! My name is Jedd. I am a Software Developer based in Melbourne, Australia with a BSc of Computer Science. I have two years experience working in mobile app development and am currently working as a freelance web developer.</p>
						<p className="about__desc">After completing a long term personal goal of mine and backpacking throughout Europe (20+ countries) I am returning to Melbourne and am looking for new opportunities. I am open to front-end / full stack based work or something completely new, I am always excited to learn and tackle new challenges so please feel free to reach out.</p>
						<p className="about__desc">I have developed new features for clients in cross platform C# mobile apps as well as native iOS and Android, I have introduced and implemented testing methodologies, trained up interns, identified and resolved bugs and collaborated within a team to meet project deadlines. I am a fast learner and a passionate people person who will do all I can to hit the ground running in any opportunity that comes my way.</p>
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
			</motion.section>
		</>);
}

export default About;