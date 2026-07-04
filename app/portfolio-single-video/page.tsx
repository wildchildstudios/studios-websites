import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Single - Video | Canvas",
  description: "WildChild Studios - Best use of Technology for creative solutions (Projection Mapping, Virtual Reality, Augmented Reality, Motion Capture)",
};

export default function Page() {
  return (
    <>
      

		
		<section id="page-title">

			<div className="container clearfix">
				<h1>Portfolio Single - Video</h1>
				<div id="portfolio-navigation">
					<a href="#"><i className="icon-angle-left"></i></a>
					<a href="#"><i className="icon-line-grid"></i></a>
					<a href="#"><i className="icon-angle-right"></i></a>
				</div>
			</div>

		</section>

		
		<section id="content">

			<div className="content-wrap">

				<div className="container clearfix">

					
					<div className="col_two_third portfolio-single-image nobottommargin">
						<iframe src="http://player.vimeo.com/video/80975867" width="500" height="281" frameBorder="0"   allowFullScreen></iframe>
					</div>

					
					<div className="col_one_third portfolio-single-content col_last nobottommargin">

						
						<div className="fancy-title title-bottom-border">
							<h2>Project Info:</h2>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dolores, facere, corrupti delectus ex quidem adipisci tempore.</p>
						<p>Illum molestias cupiditate eveniet dolore obcaecati voluptatibus est quos eos id recusandae officia.</p>
						

						<div className="line"></div>

						
						<ul className="portfolio-meta bottommargin">
							<li><span><i className="icon-user"></i>Created by:</span> John Doe</li>
							<li><span><i className="icon-calendar3"></i>Completed on:</span> 17th March 2014</li>
							<li><span><i className="icon-link"></i>Client:</span> <a href="#">Google</a></li>
						</ul>
						

						
						<div className="si-share clearfix">
							<span>Share:</span>
							<div>
								<a href="#" className="social-icon si-borderless si-facebook">
									<i className="icon-facebook"></i>
									<i className="icon-facebook"></i>
								</a>
								<a href="#" className="social-icon si-borderless si-twitter">
									<i className="icon-twitter"></i>
									<i className="icon-twitter"></i>
								</a>
								<a href="#" className="social-icon si-borderless si-pinterest">
									<i className="icon-pinterest"></i>
									<i className="icon-pinterest"></i>
								</a>
								<a href="#" className="social-icon si-borderless si-gplus">
									<i className="icon-gplus"></i>
									<i className="icon-gplus"></i>
								</a>
								<a href="#" className="social-icon si-borderless si-rss">
									<i className="icon-rss"></i>
									<i className="icon-rss"></i>
								</a>
								<a href="#" className="social-icon si-borderless si-email3">
									<i className="icon-email3"></i>
									<i className="icon-email3"></i>
								</a>
							</div>
						</div>
						

					</div>

					<div className="clear"></div>

					<div className="divider divider-center"><i className="icon-circle"></i></div>

					
					<h4>Related Projects:</h4>

					<div id="related-portfolio" className="owl-carousel portfolio-carousel carousel-widget" data-margin="20" data-nav="false" data-autoplay="5000" data-items-xs="1" data-items-sm="2" data-items-md="3" data-items-xl="4">

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
									<a href="#">
										<img src="/images/portfolio/4/4.jpg" alt="Mac Sunglasses" />
									</a>
									<div className="portfolio-overlay" data-lightbox="gallery">
										<a href="/images/portfolio/full/4.jpg" className="left-icon" data-lightbox="gallery-item"><i className="icon-line-stack-2"></i></a>
										<a href="/images/portfolio/full/4-1.jpg" className="hidden" data-lightbox="gallery-item"></a>
										<a href="/portfolio-single-gallery" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/portfolio-single-gallery">Morning Dew</a></h3>
									<span><a href="#">Icons</a>, <a href="#">Illustrations</a></span>
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
									<a href="/portfolio-single-gallery">
										<img src="/images/portfolio/4/6.jpg" alt="Shake It!" />
									</a>
									<div className="portfolio-overlay" data-lightbox="gallery">
										<a href="/images/portfolio/full/6.jpg" className="left-icon" data-lightbox="gallery-item"><i className="icon-line-stack-2"></i></a>
										<a href="/images/portfolio/full/6-1.jpg" className="hidden" data-lightbox="gallery-item"></a>
										<a href="/images/portfolio/full/6-2.jpg" className="hidden" data-lightbox="gallery-item"></a>
										<a href="/images/portfolio/full/6-3.jpg" className="hidden" data-lightbox="gallery-item"></a>
										<a href="/portfolio-single-gallery" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/portfolio-single-gallery">Shake It!</a></h3>
									<span><a href="#">Illustrations</a>, <a href="#">Graphics</a></span>
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
									<a href="/portfolio-single">
										<img src="/images/portfolio/4/9.jpg" alt="Bridge Side" />
									</a>
									<div className="portfolio-overlay" data-lightbox="gallery">
										<a href="/images/portfolio/full/9.jpg" className="left-icon" data-lightbox="gallery-item"><i className="icon-line-stack-2"></i></a>
										<a href="/images/portfolio/full/9-1.jpg" className="hidden" data-lightbox="gallery-item"></a>
										<a href="/images/portfolio/full/9-2.jpg" className="hidden" data-lightbox="gallery-item"></a>
										<a href="/portfolio-single-gallery" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/portfolio-single">Bridge Side</a></h3>
									<span><a href="#">Illustrations</a>, <a href="#">Icons</a></span>
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

					</div>

				</div>

			</div>

		</section>

		
    </>
  );
}
