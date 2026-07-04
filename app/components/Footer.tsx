import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="container">
        {/* Footer Widgets */}
        <div className="footer-widgets-wrap clearfix">
          <div className="col_two_third">
            <div className="col_one_third">
              <div className="widget clearfix">
                <img src="/images/footer-widget-logo.png" alt="" className="footer-logo" />
                <p><strong>We merge Technology, Creativity, Content.</strong></p>
              </div>
            </div>

            <div className="col_one_third">
              <div className="widget widget_links clearfix">
                <h4>Reach Us at</h4>
                <div style={{ background: "url('/images/world-map.png') no-repeat center center", backgroundSize: "100%" }}>
                  <address>
                    <strong>Head Office:</strong><br />
                    511 Satyamev Eminence,<br />
                    Science City Road,<br />
                    Sola, Ahmedabad 380 060<br />
                    Gujarat, India
                  </address>
                  <address>
                    <strong>USA Office:</strong><br />
                    1437 Jason CT<br />
                    Carol Stream<br />
                    Bartlett, illinois 60103, USA<br />
                  </address>
                  <abbr title="Phone Number"><strong>Phone:</strong></abbr> (91) 92274 28262<br />
                  <abbr title="Email Address"><strong>Email:</strong></abbr> info@wildchildstudios.com
                </div>
              </div>
            </div>

            <div className="col_one_third col_last">
              <div className="widget clearfix">
                <h4>Recent Events</h4>
                <div id="post-list-footer">
                  <div className="spost clearfix">
                    <div className="entry-c">
                      <div className="entry-title">
                        <h4><a href="#">3D Projection Mapping on 30 feet Height Narendra Modi & India Cutout Structure.</a></h4>
                      </div>
                      <ul className="entry-meta">
                        <li>16th March 2019</li>
                      </ul>
                    </div>
                  </div>

                  <div className="spost clearfix">
                    <div className="entry-c">
                      <div className="entry-title">
                        <h4><a href="#">Vibrant Gujarat 2019</a></h4>
                      </div>
                      <ul className="entry-meta">
                        <li>18th January 2019</li>
                      </ul>
                    </div>
                  </div>

                  <div className="spost clearfix">
                    <div className="entry-c">
                      <div className="entry-title">
                        <h4><a href="#">ABVP 64th National Conference</a></h4>
                      </div>
                      <ul className="entry-meta">
                        <li>27th December 2018</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col_one_third col_last">
            <div className="widget clearfix" style={{ marginBottom: "-20px" }}>
              <div className="row">
                <div className="col-lg-6 bottommargin-sm">
                  <div className="counter counter-small">
                    <span data-from="300" data-to="550" data-refresh-interval="80" data-speed="3000" data-comma="true"></span>+
                  </div>
                  <h5 className="nobottommargin">Projects</h5>
                </div>

                <div className="col-lg-6 bottommargin-sm">
                  <div className="counter counter-small">
                    <span data-from="10" data-to="55" data-refresh-interval="50" data-speed="2000" data-comma="true"></span>+
                  </div>
                  <h5 className="nobottommargin">Clients</h5>
                </div>
              </div>
            </div>

            <div className="widget subscribe-widget clearfix">
              <h5><strong>Subscribe</strong> to Our Newsletter to get Important News, Amazing Offers &amp; Inside Scoops:</h5>
              <div className="widget-subscribe-form-result"></div>
              <form id="widget-subscribe-form" action="include/subscribe.php" method="post" className="nobottommargin">
                <div className="input-group divcenter">
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="icon-email2"></i></div>
                  </div>
                  <input type="email" id="widget-subscribe-form-email" name="widget-subscribe-form-email" className="form-control required email" placeholder="Enter your Email" />
                  <div className="input-group-append">
                    <button className="btn btn-success" type="submit">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="widget clearfix" style={{ marginBottom: "-20px" }}>
              <div className="row">
                <div className="col-lg-6 clearfix bottommargin-sm">
                  <a href="#" className="social-icon si-dark si-colored si-facebook nobottommargin" style={{ marginRight: "10px" }}>
                    <i className="icon-facebook"></i>
                    <i className="icon-facebook"></i>
                  </a>
                  <a href="#"><small style={{ display: "block", marginTop: "3px" }}><strong>Like us</strong><br />on Facebook</small></a>
                </div>
                <div className="col-lg-6 clearfix">
                  <a href="#" className="social-icon si-dark si-colored si-rss nobottommargin" style={{ marginRight: "10px" }}>
                    <i className="icon-rss"></i>
                    <i className="icon-rss"></i>
                  </a>
                  <a href="#"><small style={{ display: "block", marginTop: "3px" }}><strong>Subscribe</strong><br />to RSS Feeds</small></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyrights */}
      <div id="copyrights">
        <div className="container clearfix">
          <div className="col_half">
            Copyrights &copy; 2018 All Rights Reserved by WILDCHILD STUDIOS.<br />
            <div className="copyright-links"><a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a></div>
          </div>

          <div className="col_half col_last tright">
            <div className="fright clearfix">
              <a href="#" className="social-icon si-small si-borderless si-facebook">
                <i className="icon-facebook"></i>
                <i className="icon-facebook"></i>
              </a>
              <a href="#" className="social-icon si-small si-borderless si-twitter">
                <i className="icon-twitter"></i>
                <i className="icon-twitter"></i>
              </a>
              <a href="#" className="social-icon si-small si-borderless si-gplus">
                <i className="icon-gplus"></i>
                <i className="icon-gplus"></i>
              </a>
              <a href="#" className="social-icon si-small si-borderless si-pinterest">
                <i className="icon-pinterest"></i>
                <i className="icon-pinterest"></i>
              </a>
              <a href="#" className="social-icon si-small si-borderless si-vimeo">
                <i className="icon-vimeo"></i>
                <i className="icon-vimeo"></i>
              </a>
              <a href="#" className="social-icon si-small si-borderless si-github">
                <i className="icon-github"></i>
                <i className="icon-github"></i>
              </a>
              <a href="#" className="social-icon si-small si-borderless si-yahoo">
                <i className="icon-yahoo"></i>
                <i className="icon-yahoo"></i>
              </a>
              <a href="#" className="social-icon si-small si-borderless si-linkedin">
                <i className="icon-linkedin"></i>
                <i className="icon-linkedin"></i>
              </a>
            </div>

            <div className="clear"></div>
            <i className="icon-envelope2"></i> info@wildchildstudios.com <span className="middot">&middot;</span> <i className="icon-headphones"></i> +91-9227-428-262 <span className="middot">&middot;</span> <i className="icon-skype2"></i> WildChild On Skype
          </div>
        </div>
      </div>
    </footer>
  );
}
