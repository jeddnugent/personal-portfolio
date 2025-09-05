import "../styles/components/Projects.css";
import { motion } from "framer-motion";
import ProjectTile from "./ProjectTile";

function Projects() {
	return (
		<>
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true, amount: 0.3 }}
			>
				<div className="projects container section">
					<h2 className="projects__title">Projects</h2>
					<p className="projects__desc">A brief overview of work, mainly web development, I have completed for clients. A more extensive look at these projects can be found on my GitHub profile linked above. This section will be updated once new work is completed.</p>
					<div className="project-tile__container">
						<ProjectTile
							projectTitle="Helen Yospeh Portfolio"
							propjectId="1"
							projectImg="/helen_website_prev.png"
							projectDesc="Single page react website created for concert photographer Helen Yoseph. This website is intended to serve as a landing page and portfolio of her work and more dynamically and professionally display her photos in the effort to attract new clients and opportunities"
							projectLink="https://helenyoseph.vercel.app"
						/>
					</div>
				</div>
			</motion.section>
		</>
	);
}

export default Projects;