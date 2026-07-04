import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | WildChild Studios",
  description: "WildChild Studios - Best use of Technology for creative solutions (Projection Mapping, Virtual Reality, Augmented Reality, Motion Capture)",
};

export default function Page() {
  return (
    <>
      

		<section id="slider" className="slider-element slider-parallax swiper_wrapper full-screen clearfix">

			<div className="slider-parallax-inner">

				<div className="swiper-container swiper-parent">
					<div className="swiper-wrapper">
						<div className="swiper-slide dark" style={{"backgroundImage":"url('/images/slider/swiper/1.jpg')"}}>
							<div className="container clearfix">
								<div className="slider-caption slider-caption-center">
									<h2 data-animate="fadeInUp"></h2>
									<p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200"></p>
								</div>
							</div>
						</div>
						<div className="swiper-slide dark">
							<div className="container clearfix">
								<div className="slider-caption slider-caption-center">
									<h2 data-animate="fadeInUp">Projection Mapping</h2>
									<p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">Election campaign for a political party in Gujarat, well executed by us.</p>
								</div>
							</div>
							<div className="video-wrap">
								<video poster="/images/videos/explore.jpg" preload="auto" loop autoPlay muted>
									<source src='/images/videos/modi.mp4' type='video/mp4' />
									<source src='/images/videos/modi.webm' type='video/webm' />
								</video>
								<div className="video-overlay" style={{"backgroundColor":"rgba(0,0,0,0.55)"}}></div>
							</div>
						</div>
						<div className="swiper-slide dark" style={{"backgroundImage":"url('/images/slider/swiper/2.jpg')"}}>
							<div className="container clearfix">
								<div className="slider-caption slider-caption-center">
									<h2 data-animate="fadeInUp"></h2>
									<p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200"></p>
								</div>
							</div>
						</div>
						<div className="swiper-slide dark" style={{"backgroundImage":"url('/images/slider/swiper/3.jpg')"}}>
							<div className="container clearfix">
								<div className="slider-caption slider-caption-center">
									<h2 data-animate="fadeInUp"></h2>
									<p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200"></p>
								</div>
							</div>
						</div>
						<div className="swiper-slide dark" style={{"backgroundImage":"url('/images/slider/swiper/4.jpg')"}}>
							<div className="container clearfix">
								<div className="slider-caption slider-caption-center">
									<h2 data-animate="fadeInUp"></h2>
									<p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200"></p>
								</div>
							</div>
						</div>
						<div className="swiper-slide dark" style={{"backgroundImage":"url('/images/slider/swiper/5.jpg')"}}>
							<div className="container clearfix">
								<div className="slider-caption slider-caption-center">
									<h2 data-animate="fadeInUp"></h2>
									<p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200"></p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-arrow-left"><i className="icon-angle-left"></i></div>
					<div className="slider-arrow-right"><i className="icon-angle-right"></i></div>
					<div className="slide-number"><div className="slide-number-current"></div><span>/</span><div className="slide-number-total"></div></div>
				</div>

			</div>

		</section>

		
		<section id="content">

			<div className="content-wrap">

				<div className="promo promo-light promo-full bottommargin-lg header-stick notopborder">
					<div className="container clearfix">
						<h3>Call us at <span>+91 92274 28262</span> or Email us at <span>info@wildchildstudios.com</span></h3>
						<span>A PERFECT MIX OF TECHNOLOGY KNOWHOW, CONCEPT EXPLORERS, NEVER GIVE UP SPIRIT AND HARDWORK, <br/>WE ARE A TEAM OF POEPLE WHO DELIVERS THE BEST, IN TIME AND PRECISE</span>
						<a href="#" className="button button-dark button-xlarge button-rounded">Showreel</a>
					</div>
				</div>

				<div className="container clearfix">

					<div className="col_one_fourth nobottommargin">
						<div className="feature-box fbox-center fbox-light fbox-effect nobottomborder">
							<div className="fbox-icon">
								<a href="#"><i className="i-alt noborder icon-shop"></i></a>
							</div>
							<h3>Digital Museums<span className="subtitle">Add life to the muesum and let the charaters tell their own stories</span></h3>
						</div>
					</div>

					<div className="col_one_fourth nobottommargin">
						<div className="feature-box fbox-center fbox-light fbox-effect nobottomborder">
							<div className="fbox-icon">
								<a href="#"><i className="i-alt noborder icon-wallet"></i></a>
							</div>
							<h3>Virtual Tours<span className="subtitle">Take the people where it is not possible to take them easily "May be to moon and back"</span></h3>
						</div>
					</div>

					<div className="col_one_fourth nobottommargin">
						<div className="feature-box fbox-center fbox-light fbox-effect nobottomborder">
							<div className="fbox-icon">
								<a href="#"><i className="i-alt noborder icon-megaphone"></i></a>
							</div>
							<h3>Exhibitions<span className="subtitle">Product display is easy but making them interesting and interactive is our job</span></h3>
						</div>
					</div>

					<div className="col_one_fourth nobottommargin col_last">
						<div className="feature-box fbox-center fbox-light fbox-effect nobottomborder">
							<div className="fbox-icon">
								<a href="#"><i className="i-alt noborder icon-fire"></i></a>
							</div>
							<h3>Events<span className="subtitle">Let's make your events more engaging and worth charishing experience for all</span></h3>
						</div>
					</div>

					<div className="clear"></div><div className="line bottommargin-lg"></div>

					<div className="col_two_fifth nobottommargin">
						
							<img src="/images/others/1.jpg" alt="Image" />
						
					</div>

					<div className="col_three_fifth nobottommargin col_last">

						<div className="heading-block">
							<h2>Awards & Achievements</h2>
						</div>

						<p>We have been honoured for our concepts and work done at many glorious and prestigious events.</p>

						<div className="col_half nobottommargin">
							<ul className="iconlist iconlist-color nobottommargin">
								<li><i className="icon-caret-right"></i> Chalo India 2018</li>
								<li><i className="icon-caret-right"></i> Light & Sound Show on Narendra Modi</li>
								<li><i className="icon-caret-right"></i> Vibrant Gujarat 2018</li>
								<li><i className="icon-caret-right"></i> Pradhan Mantri Awas Yojana Stall</li>
							</ul>
						</div>

						<div className="col_half nobottommargin col_last">
							<ul className="iconlist iconlist-color nobottommargin">
								<li><i className="icon-caret-right"></i> 64th National Conference of ABVP</li>
								<li><i className="icon-caret-right"></i> Ahmedabad Metro Stall</li>
								<li><i className="icon-caret-right"></i> Gujarat Mining Department Stall</li>
								<li><i className="icon-caret-right"></i> Dholera City Interactive Book Mapping</li>
							</ul>
						</div>

					</div>

					<div className="clear"></div>

				</div>

				<div className="section topmargin-lg">
					<div className="container clearfix">

						<div className="heading-block center">
							<h2>Technologies we Master</h2>
							<span>Our experience of working with following technologies has grown so much that we have become one of the best creative solution providers. </span>
						</div>

						<div className="clear bottommargin-sm"></div>

						<div className="col_one_third">
							<div className="feature-box fbox-small fbox-plain" data-animate="fadeIn">
								<div className="fbox-icon">
									<a href="#"><i className="icon-phone2"></i></a>
								</div>
								<h3>3D Projection Mapping</h3>
								<p>is a technology that is used for video projection on a various structures instead of flat screen.</p>
							</div>
						</div>

						<div className="col_one_third">
							<div className="feature-box fbox-small fbox-plain" data-animate="fadeIn" data-delay="200">
								<div className="fbox-icon">
									<a href="#"><i className="icon-eye"></i></a>
								</div>
								<h3>Virtual Reality</h3>
								<p>is creating a real like experience through HMD devices. users are immersed and able to interact with 3D worlds.</p>
							</div>
						</div>

						<div className="col_one_third col_last">
							<div className="feature-box fbox-small fbox-plain" data-animate="fadeIn" data-delay="400">
								<div className="fbox-icon">
									<a href="#"><i className="icon-star2"></i></a>
								</div>
								<h3>Augmented Reality</h3>
								<p>brings the non existance to existance  and creates interactive experince of real world on screen via supported applications through hand held devices mostly.</p>
							</div>
						</div>

						<div className="clear"></div>

						<div className="col_one_third">
							<div className="feature-box fbox-small fbox-plain" data-animate="fadeIn" data-delay="600">
								<div className="fbox-icon">
									<a href="#"><i className="icon-video"></i></a>
								</div>
								<h3>LIDAR Scanning</h3>
								<p>is a surveying method for calculating distance to object which would result in to accurate 3D model of the object and would save time.</p>
							</div>
						</div>

						<div className="col_one_third">
							<div className="feature-box fbox-small fbox-plain" data-animate="fadeIn" data-delay="800">
								<div className="fbox-icon">
									<a href="#"><i className="icon-params"></i></a>
								</div>
								<h3>Motion Capture</h3>
								<p>is an advanced and most accurate way of captruing real object motions using specific sensors for CG models.</p>
							</div>
						</div>

						<div className="col_one_third col_last">
							<div className="feature-box fbox-small fbox-plain" data-animate="fadeIn" data-delay="1000">
								<div className="fbox-icon">
									<a href="#"><i className="icon-fire"></i></a>
								</div>
								<h3>3D Stereoscopic Film</h3>
								<p>stimulates the stereoscopic vision which renders the scene in 3 dimensions for human brains.</p>
							</div>
						</div>

						<div className="clear"></div>

						<div className="col_one_third nobottommargin">
							<div className="feature-box fbox-small fbox-plain" data-animate="fadeIn" data-delay="1200">
								<div className="fbox-icon">
									<a href="#"><i className="icon-bulb"></i></a>
								</div>
								<h3>Holographic Projection</h3>
								<p>is a real world experience Augmented with Computer generated perceptual information.</p>
							</div>
						</div>

						<div className="col_one_third nobottommargin">
							<div className="feature-box fbox-small fbox-plain" data-animate="fadeIn" data-delay="1400">
								<div className="fbox-icon">
									<a href="#"><i className="icon-heart2"></i></a>
								</div>
								<h3>Interactive Projection Mapping</h3>
								<p>is the art of using projectors to map light onto any surface, turning common 3D objects into interactive displays.</p>
							</div>
						</div>

						<div className="col_one_third nobottommargin col_last">
							<div className="feature-box fbox-small fbox-plain" data-animate="fadeIn" data-delay="1600">
								<div className="fbox-icon">
									<a href="#"><i className="icon-note"></i></a>
								</div>
								<h3>Touch Kiosk</h3>
								<p>is commonly used for information collection and engaging people. It will give some unusual experience to the user.</p>
							</div>
						</div>

						<div className="clear"></div>

					</div>
				</div>

				<div className="container clearfix">

					<div className="heading-block center">
						<h3>Some of our <span>Featured</span> Works</h3>
						<span>We have worked on some Awesome Projects that are worth boasting of.</span>
					</div>

					<div id="oc-portfolio" className="owl-carousel portfolio-carousel portfolio-nomargin carousel-widget" data-margin="1" data-pagi="false" data-autoplay="5000" data-items-xs="1" data-items-sm="2" data-items-md="3" data-items-xl="4">

						<div className="oc-item">
							<div className="iportfolio">
								<div className="portfolio-image">
									<a href="/portfolio-single">
										<img src="/images/portfolio/4/1.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="/images/portfolio/full/1.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-plus"></i></a>
										<a href="/portfolio-single" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/portfolio-single">Open Imagination</a></h3>
									<span><a href="#">Media</a>, <a href="#">Icons</a></span>
								</div>
							</div>
						</div>

						<div className="oc-item">
							<div className="iportfolio">
								<div className="portfolio-image">
									<a href="/portfolio-single">
										<img src="/images/portfolio/4/2.jpg" alt="Locked Steel Gate" />
									</a>
									<div className="portfolio-overlay">
										<a href="/images/portfolio/full/2.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-plus"></i></a>
										<a href="/portfolio-single" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/portfolio-single">Locked Steel Gate</a></h3>
									<span><a href="#">Illustrations</a></span>
								</div>
							</div>
						</div>

						<div className="oc-item">
							<div className="iportfolio">
								<div className="portfolio-image">
									<a href="#">
										<img src="/images/portfolio/4/3.jpg" alt="Mac Sunglasses" />
									</a>
									<div className="portfolio-overlay">
										<a href="http://vimeo.com/89396394" className="left-icon" data-lightbox="iframe"><i className="icon-line-play"></i></a>
										<a href="/portfolio-single-video" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/portfolio-single-video">Mac Sunglasses</a></h3>
									<span><a href="#">Graphics</a>, <a href="#">UI Elements</a></span>
								</div>
							</div>
						</div>

						<div className="oc-item">
							<div className="iportfolio">
								<div className="portfolio-image">
									<a href="/portfolio-single">
										<img src="/images/portfolio/4/5.jpg" alt="Console Activity" />
									</a>
									<div className="portfolio-overlay">
										<a href="/images/portfolio/full/5.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-plus"></i></a>
										<a href="/portfolio-single" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/portfolio-single">Console Activity</a></h3>
									<span><a href="#">UI Elements</a>, <a href="#">Media</a></span>
								</div>
							</div>
						</div>

						<div className="oc-item">
							<div className="iportfolio">
								<div className="portfolio-image">
									<a href="/portfolio-single-video">
										<img src="/images/portfolio/4/7.jpg" alt="Backpack Contents" />
									</a>
									<div className="portfolio-overlay">
										<a href="http://www.youtube.com/watch?v=kuceVNBTJio" className="left-icon" data-lightbox="iframe"><i className="icon-line-play"></i></a>
										<a href="/portfolio-single-video" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/portfolio-single-video">Backpack Contents</a></h3>
									<span><a href="#">UI Elements</a>, <a href="#">Icons</a></span>
								</div>
							</div>
						</div>

						<div className="oc-item">
							<div className="iportfolio">
								<div className="portfolio-image">
									<a href="/portfolio-single">
										<img src="/images/portfolio/4/8.jpg" alt="Sunset Bulb Glow" />
									</a>
									<div className="portfolio-overlay">
										<a href="/images/portfolio/full/8.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-plus"></i></a>
										<a href="/portfolio-single" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/portfolio-single">Sunset Bulb Glow</a></h3>
									<span><a href="#">Graphics</a></span>
								</div>
							</div>
						</div>

						<div className="oc-item">
							<div className="iportfolio">
								<div className="portfolio-image">
									<a href="/portfolio-single-video">
										<img src="/images/portfolio/4/10.jpg" alt="Study Table" />
									</a>
									<div className="portfolio-overlay">
										<a href="http://vimeo.com/91973305" className="left-icon" data-lightbox="iframe"><i className="icon-line-play"></i></a>
										<a href="/portfolio-single-video" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/portfolio-single-video">Study Table</a></h3>
									<span><a href="#">Graphics</a>, <a href="#">Media</a></span>
								</div>
							</div>
						</div>

						<div className="oc-item">
							<div className="iportfolio">
								<div className="portfolio-image">
									<a href="/portfolio-single">
										<img src="/images/portfolio/4/11.jpg" alt="Workspace Stuff" />
									</a>
									<div className="portfolio-overlay">
										<a href="/images/portfolio/full/11.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-plus"></i></a>
										<a href="/portfolio-single" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/portfolio-single">Workspace Stuff</a></h3>
									<span><a href="#">Media</a>, <a href="#">Icons</a></span>
								</div>
							</div>
						</div>

					</div>

				</div>

				<div className="section topmargin-sm nobottommargin">

					<div className="container clearfix">

						<div className="heading-block center">
							<h3>Testimonials</h3>
							<span>Check out some of our Client Reviews</span>
						</div>

						<ul className="testimonials-grid grid-3 clearfix nobottommargin">
							<li>
								<div className="testimonial">
									<div className="testi-image">
										<a href="#"><img src="/images/testimonials/1.jpg" alt="Customer Testimonails" /></a>
									</div>
									<div className="testi-content">
										<p>We are pleased to associate with WildChild Studios for our Chalo India 2018 event as Technological & Creative solution provider.</p>
										<div className="testi-meta">
											Sunil Nayak
											<span>AIANA.</span>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="testimonial">
									<div className="testi-image">
										<a href="#"><img src="/images/testimonials/2.jpg" alt="Customer Testimonails" /></a>
									</div>
									<div className="testi-content">
										<p>Outstanding technical quality, visual appeal and customer support. It can't get any better than this! Company quickly responded to a question I had about customization and provided a modified version of the template for my specific needs within 1 day.</p>
										<div className="testi-meta">
											Rick S
											<span>NFusionVideo</span>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="testimonial">
									<div className="testi-image">
										<a href="#"><img src="/images/testimonials/3.jpg" alt="Customer Testimonails" /></a>
									</div>
									<div className="testi-content">
										<p>My overall experience was phenomenal!!! From the customer service to the template quality, it was simply a stress free process. I enjoyed working with this amazing vendor and will definitely return whenever I need this kind of service again!</p>
										<div className="testi-meta">
											Susan Kelly
											<span>Comcast</span>
										</div>
									</div>
								</div>
							</li>
							
						</ul>

					</div>

				</div>

				<div className="container clearfix">

					<div id="oc-clients" className="owl-carousel owl-carousel-full image-carousel carousel-widget" data-margin="30" data-loop="true" data-nav="false" data-autoplay="5000" data-pagi="false" data-items-xs="2" data-items-sm="3" data-items-md="4" data-items-lg="5" data-items-xl="6" style={{"padding":"20px 0"}}>

						<div className="oc-item"><img src="/images/clients/1.png" alt="Hindu Spiritual and Service Fair - HSSF" /></div>
						<div className="oc-item"><img src="/images/clients/2.png" alt="Daxini Cha Raja" /></div>
						<div className="oc-item"><img src="/images/clients/3.png" alt="ADK Engineering & Solutions" /></div>
						<div className="oc-item"><img src="/images/clients/4.png" alt="Dev Dye Chem Industries" /></div>
						<div className="oc-item"><img src="/images/clients/5.png" alt="Dholera SIR" /></div>
						<div className="oc-item"><img src="/images/clients/6.png" alt="Bharatiya Janata Party - BJP" /></div>
						<div className="oc-item"><img src="/images/clients/7.png" alt="ABVP" /></div>
						<div className="oc-item"><img src="/images/clients/8.png" alt="Acticon Life Sciences" /></div>
						<div className="oc-item"><img src="/images/clients/9.png" alt="Chalo India 2018" /></div>
						<div className="oc-item"><img src="/images/clients/10.png" alt="Commissioner of Geology & Mining - CGM" /></div>
						<div className="oc-item"><img src="/images/clients/11.png" alt="Vibrant Gujarat 2019" /></div>
						<div className="oc-item"><img src="/images/clients/12.png" alt="Flocare" /></div>
						<div className="oc-item"><img src="/images/clients/13.png" alt="Ahmedabad Metro" /></div>
						<div className="oc-item"><img src="/images/clients/14.png" alt="Vama Communications" /></div>

					</div>

				</div>

				<a href="/contact" className="button button-full center tright topmargin footer-stick">
					<div className="container clearfix">
						Best use of Technology for creative solutions...
					</div>
				</a>
				
			</div>

		</section>

		
    </>
  );
}
