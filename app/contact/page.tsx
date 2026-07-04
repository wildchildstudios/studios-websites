import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | WildChild Studios",
  description: "WildChild Studios - Best use of Technology for creative solutions (Projection Mapping, Virtual Reality, Augmented Reality, Motion Capture)",
};

export default function Page() {
  return (
    <>
      

			
			<section id="page-title">

				<div className="container clearfix">
					<h1>Contact</h1>
					<span>Get in Touch with Us</span>
					<ol className="breadcrumb">
					<li className="breadcrumb-item"><a href="#">Home</a></li>
					<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
				</ol>
				</div>

			</section>

		
		<section id="map-overlay">

			<div className="container clearfix">

				
				<div id="contact-form-overlay-mini" className="clearfix">

					<div className="fancy-title title-dotted-border">
						<h3>Send us an Email</h3>
					</div>

					<div className="form-widget">

						<div className="form-result"></div>

						
						<form className="nobottommargin" id="template-contactform" name="template-contactform" action="include/form.php" method="post">

							<div className="col_full">
								<label htmlFor="template-contactform-name">Name <small>*</small></label>
								<input type="text" id="template-contactform-name" name="template-contactform-name" defaultValue="" className="sm-form-control required" />
							</div>

							<div className="col_full">
								<label htmlFor="template-contactform-email">Email <small>*</small></label>
								<input type="email" id="template-contactform-email" name="template-contactform-email" defaultValue="" className="required email sm-form-control" />
							</div>

							<div className="clear"></div>

							<div className="col_full">
								<label htmlFor="template-contactform-phone">Phone</label>
								<input type="text" id="template-contactform-phone" name="template-contactform-phone" defaultValue="" className="sm-form-control" />
							</div>

							

							<div className="clear"></div>

							<div className="col_full">
								<label htmlFor="template-contactform-subject">Subject <small>*</small></label>
								<input type="text" id="template-contactform-subject" name="subject" defaultValue="" className="required sm-form-control" />
							</div>

							<div className="col_full">
								<label htmlFor="template-contactform-message">Message <small>*</small></label>
								<textarea className="required sm-form-control" id="template-contactform-message" name="template-contactform-message" rows={6} cols={30}></textarea>
							</div>

							<div className="col_full hidden">
								<input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" defaultValue="" className="sm-form-control" />
							</div>

							<div className="col_full">
								<button className="button button-3d nomargin" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit">Send Message</button>
							</div>

							<input type="hidden" name="prefix" defaultValue="template-contactform-" />

						</form>

					</div>


				</div>

			</div>

			
			<section id="google-map" className="gmap"><div id="map"></div></section>

		</section>

		
    </>
  );
}
