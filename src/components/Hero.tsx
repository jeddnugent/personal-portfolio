import "../styles/components/Hero.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileImg from "../assets/headshot.jpeg";
import { motion } from "framer-motion";

function Hero() {
	return (
		<>
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true, amount: 0.3 }}
			>
				<div className="hero container">
					<img className="hero__img" src={profileImg} alt="Profile Picture Headshot" />
					<h2 className="hero__subtitle">Hi, I'm Jedd 👋</h2>
					<h1 className="hero__title">Software Developer</h1>
					<p className="hero__desc">A passionate <strong>Software Developer</strong> located in Melbourne, Australia with experience working in <strong>front-end mobile app development </strong> as well as <strong>Front-end</strong> and <strong>Full Stack Websites/Applications</strong></p>
					<a className="hero__btn btn" href="mailto:jeddnugent@gmail.com" target="_blank">React out</a>
					<div className="hero__social-stack">
						<a href="https://github.com/jeddnugent" target="_blank">
							<GitHubIcon className="hero__social-stack__icon" />
						</a>
						<a href="https://www.linkedin.com/in/jedd-nugent" target="_blank">
							<LinkedInIcon className="hero__social-stack__icon" />
						</a>
					</div>
				</div>
			</motion.section>
		</>
	);

}

export default Hero;