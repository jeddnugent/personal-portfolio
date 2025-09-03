import "../styles/components/ProjectTile.css";

function ProjectTile(props: {
	projectTitle: string;
	propjectId: string;
	projectImg: string;
	projectDesc: string;
	projectLink: string;
}) {
	return (
		<>
			<h3 className="project-tile__title">{props.projectTitle}</h3>
			<div className={`project-tile__img-wrapper project-tile__image${props.propjectId}`}>
				<img src={props.projectImg} alt={props.projectTitle + "website"} />
			</div>
			<div className={`project-tile project-tile__content${props.propjectId}`}>
				<h3 className="project-tile__subtitle">{props.projectTitle}</h3>
				<p className="project-tile__desc">
					{props.projectDesc}
				</p>
				<a href={props.projectLink} target="_blank" className="btn">Website</a>
			</div>
		</>
	);
}

export default ProjectTile;