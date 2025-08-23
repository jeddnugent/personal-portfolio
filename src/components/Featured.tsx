import LinkIcon from '@mui/icons-material/Link';
import "../styles/components/Featured.css";

function Featured() {
	return (
		<>
			<div className="featured container section">
				<h3 className="featured__subtitle">Featured Project</h3>
				<div className='featured__title-wrapper'>
					<h2 className="featured__title">SMI Food Journal</h2>
					<a className='featured__link'>
						<LinkIcon />
					</a>
				</div>
				<p className="featured__desc">
					SMI Food Journal is a full stack prototype created for Successful Minds Institute.
					The purpose of the journal is to allow clients of SMI to track each meal they eat over the course of a week.
					After each meal they will answer a series of prompts regarding their mood and the enviroment around the meal.
					This will then be accessed by practitioners on a subsequent consultation. The information gained by these surveys will be help inform futher advice and treatment from the practitioners regarding the clients weight loss journey.
				</p>
				<div className='featured__info-container'>
					<div>
						<h3 className='featured__label'>Tech Stack</h3>
						<ul className='featured__tech-stack'>
							<li className='featured__info'>ReactJS Frontend (TypeScript)</li>
							<li className='featured__info'>React-Router (Client side page routing)</li>
							<li className='featured__info'>Axios (for API requests)</li>
							<li className='featured__info'>Express.js API Backend</li>
							<li className='featured__info'>Passport.js (For Authentication Stratergy)</li>
							<li className='featured__info'>bcrypt (For Password Hashing and Salting)</li>
							<li className='featured__info'>PostgreSQL Backend Database</li>
						</ul>
					</div>
					<div>
						<h3 className='featured__label'>Project Type</h3>
						<p className='featured__info'>Full Stack</p>
					</div>
					<div>
						<h3 className='featured__label'>Timeline</h3>
						<p className='featured__info'>April 2025 - June 2025</p>
					</div>
				</div>
				<div className='featured__img-container'>
					<div className='featured__img-wrapper'>
						<img src="/SMI_Journal_login.png" alt="SMI Food Journal Login" />
					</div>
					<div className='featured__img-wrapper'>
						<img src="/SMI_Journal_new_entry.png" alt="SMI Food Journal New Entry" />
					</div>
					<div className='featured__img-wrapper'>
						<img src="/SMI_Journal_overview.png" alt="SMI Food Journal Overview" />
					</div>
					<div className='featured__img-wrapper'>
						<img src="/SMI_Journal_edit.png" alt="SMI Food Journal Edit Entry" />
					</div>
				</div>
			</div>
		</>
	);
}


export default Featured;