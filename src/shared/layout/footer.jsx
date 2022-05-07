import React from "react";
import mainLogo from "../visuals/images/logo.png";

const Footer = (props) => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-txt">
                <img src={mainLogo} />
                <p>
                  Memories by VOYRME is a digital marketplace for crypto
                  collectibles &amp; non-fungible tokens (NFTs). Buy &amp; Sell
                  discover exclusive digital.
                </p>
                <ul>
                  <li>
                    <a href="javascript:;">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 offset-md-1">
              <div className="row">
                <div className="col-lg-3">
                  <div className="footer-links">
                    <h2>Marketplace</h2>
                    <ul>
                      <li>
                        <a href="javascript:;">Pricing</a>
                      </li>
                      <li>
                        <a href="javascript:;">Teams</a>
                      </li>
                      <li>
                        <a href="javascript:;">Refer a friend</a>
                      </li>
                      <li>
                        <a href="javascript:;">Updates</a>
                      </li>
                      <li>
                        <a href="javascript:;">FAQs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer-links">
                    <h2>Get Started</h2>
                    <ul>
                      <li>
                        <a href="javascript:;">Tutorials</a>
                      </li>
                      <li>
                        <a href="javascript:;">Resources</a>
                      </li>
                      <li>
                        <a href="javascript:;">Guides</a>
                      </li>
                      <li>
                        <a href="javascript:;">Examples</a>
                      </li>
                      <li>
                        <a href="javascript:;">Docs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="footer-links">
                    <h2>Resources</h2>
                    <ul>
                      <li>
                        <a href="javascript:;">Stories</a>
                      </li>
                      <li>
                        <a href="javascript:;">Community</a>
                      </li>
                      <li>
                        <a href="javascript:;">Blog</a>
                      </li>
                      <li>
                        <a href="javascript:;">Careers</a>
                      </li>
                      <li>
                        <a href="javascript:;">Brand Assets</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-links">
                    <h2>Stay Updated</h2>
                    <p>Join our mailing list to stay</p>
                    <div className="subscribe-form">
                      <form>
                        <input
                          type="text"
                          name
                          placeholder="Enter Your Email"
                        />
                        <input type="submit" id="subscribe-btn" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="disclaimer">
              <p>Memories by VOYRME @2015 - 2022.</p>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
    </>
  );
};

export default Footer;
