import React, { Component } from 'react';

//Media
import Ionicon from 'react-ionicons';
import logo from "../images/logo.jpg";
import cover from '../images/cover.jpg'

//CSS
import  '../css/style.css';
import  '../css/bootstrap.css';
import  '../css/responsive.css';


class Signup extends Component {
	constructor(){
		super()
		this.state = {
			email: '', save: []
		}
	}
	handleChange(e){
		this.setState({email: e.target.value})
	}
	handleSubmit(e){
		e.preventDefault();
		this.state.save.push(this.state.email);
	}
	render(){
		return(
		<div className="main-area">
 				<div className="container">
 					<section className="left-section full-height">
 						<a className="logo" href="http://thebadasscoder.us"><img src={logo} id="logo"alt="Logo"/></a>
						<div className="display-table">
	 						<div className="display-table-cell">
							<div className="main-content">
									<h1 className="title"><b>The Moment We've All<br/>Been Waiting For!<br/></b></h1>
								<p> Inspired by <strong><i> Jen Sincero’s book: You Are A
	 							Badass</i></strong>, I have been motivated to start applying this same type of 
	 							attitude throughout my journey in tech. Embarking on this path hasn't been the easiest but, I found with just a dose of confidence and a great support group, I have become unstoppable. And guess what, so can you! 
	 							<br/> 
	 							</p>
							<p> This podcast series is all about highlighting 
	 							amazing women who is currently  
	 							making their mark in tech. All the <strong>Go-Getters </strong>, <strong>Fire-Starters </strong>,<strong> Dreamers </strong>, <strong>Side-Hustlers </strong> and <strong>Trendsetters </strong> will be tuning in with me every week. So if you are ready to wake up, be inspired and kick ass going into 2019, join me by subscribing down below!</p>
	 						<div className="email-input-area" id="mc_embed_signup">
	 								<form action="https://thebadasscoder.us19.list-manage.com/subscribe/post?u=fc3f32808fab3b4a58684310d&amp;id=abfc4b4fdc" method="post"  id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
										 
	 									<input type="email" defaultValue={this.state.email} onChange={this.handleChange.bind(this)} name="EMAIL" className="email" id="mce-EMAIL" placeholder="Enter your email address" required/>
	 								    <div className="clear">
	 								    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
	 								    </div>
	 								</form>
	 						</div>
	 							<p className="post-desc">Sign up now to get an early notification for the release of our first episode!</p>
	 						</div> 
		 					</div>
		 				</div>

						<ul className="footer-icons">
							<li><a href="https://www.facebook.com/thebadasscoder/"><Ionicon icon="logo-facebook" color="#2A61D6" fontSize="25px"/></a></li>
							<li><a href="https://twitter.com/thebadasscoder"><Ionicon icon="logo-twitter" color="#3AA4F8" fontSize="25px"/></a></li>
							<li><a href="https://www.instagram.com/thebadasscoder/"><Ionicon icon="logo-instagram" color="#f9ca24" fontSize="25px"/></a></li>
							<li><a href="https://www.apple.com/itunes/podcasts/"><Ionicon icon="logo-rss" beat={true} color="#6ab04c" fontSize="25px"/></a></li>
							<li><a href="mailto:thebadasscoder@gmail.com"><Ionicon icon="md-mail" color="#ED4C67" fontSize="25px"/></a></li>
						</ul>

					</section>
				<section className="right-section">
				<img id="cover"src={cover} alt="cover"/>

				<div className="display-table center-text">
					<div className="display-table-cell">					
					</div>
				</div>
			</section>

				</div>
			</div>

		)
	}
}

export default Signup;