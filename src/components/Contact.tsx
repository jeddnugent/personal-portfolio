import '../styles/components/Contact.css';

function Contact() {
	return (
		<>
			<div className="contact container section">
				<h2 className="contact__title">Get in Contact</h2>
				<p className="contact__desc">
					Whether you are starting a project, have business inquiries or just want to say hi, my inbox is always open so feel free to reach out and I will get back to you as soon as possible.
				</p>
				<a href="mailto:jeddnugent@gmail.com" target="_blank" className="contact__button btn">Reach Out</a>
			</div>
		</>
	);
}

export default Contact;