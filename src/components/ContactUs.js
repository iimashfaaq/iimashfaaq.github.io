import React, { Component } from 'react';

export default class ContactUs extends Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: ""
		};
	}
	render() {
		const { status } = this.state;
		return (
			<section id="contact">
				<div class="main-content">
					<div>
						<h2>Contact Me</h2>
					</div><br></br>
					<div class="content-body">
						<form onSubmit={this.submitForm} method="POST" action="https://formspree.io/mjvoyegg">
							<input type="email" name="email" placeholder="Your email" required />
							<textarea name="message" placeholder="Your message" required></textarea>
							{status === "SUCCESS" ? <p style={{ color: "white" }} >Thanks!</p> : <button>Submit</button>}
        					{status === "ERROR" && <p style={{ color: "white" }} >Ooops! There was an error.</p>}
						</form>
					</div>
				</div>
			</section>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
			form.reset();
			this.setState({ status: "SUCCESS" });
			} else {
			this.setState({ status: "ERROR" });
			}
		};
		xhr.send(data);
	}
}