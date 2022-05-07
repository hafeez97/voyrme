import LayoutWrapper from "../../shared/layout/layoutWrapper";
import Aboutwhiteicon from "../../shared/visuals/images/about-white.png";
import TrendingCreators from "../../shared/components/trendingCreators/trendingCreators";
import Icon1 from "../../shared/visuals/images/icon01.png";
import Icon2 from "../../shared/visuals/images/icon02.png";
import Icon3 from "../../shared/visuals/images/icon03.png";
import IconDots from "../../shared/visuals/images/dots.png";
import BannerManIcon from "../../shared/visuals/images/banner-man.jpg";
import SlideIcon from "../../shared/visuals/images/slide.jpg";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <LayoutWrapper>
        <Helmet>
          <script src="  ../../shared/visuals/js/jquery.min.js" />
          <script
            type="text/javascript"
            src="  ../../shared/visuals/js/bootstrap.min.js"
          />
          <script
            type="text/javascript"
            src="  ../../shared/visuals/slick.js"
          />
          <script
            type="text/javascript"
            src="  ../../shared/visuals/js/jquery.fancybox.min.js"
          />
          <script
            type="text/javascript"
            src="  ../../shared/visuals/js/wow.js"
          />
          <script
            type="text/javascript"
            src="  ../../shared/visuals/js/functions.js"
          />
        </Helmet>
        {/*Hero Section Starts*/}
        <section id="hero-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-txt">
                  <img src={IconDots} />
                  <h1>
                    <span>Discover,</span> Collect, And Sell Your{" "}
                    <span>Nft’s</span> In Marketplace
                  </h1>
                  <p>
                    Memories is the world’s first and largest NFT’s &amp;
                    Art-work marketplace
                  </p>
                  <div className="banner-link">
                    <a href="javascript:;" id="explore-link">
                      Explore
                    </a>
                    <a href="javascript:;">Create</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-pic">
                  <img src={BannerManIcon} className="img-fluid men-slider" />
                  <img src={SlideIcon} className="slider-pix" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Hero Section Ends*/}
        {/*Popular Collection Start*/}
        <section id="collection">
          <div className="container">
            <div className="row">
              <div className="main-head">
                <div className="small-head">
                  <h3>
                    <span />
                    <span />
                    <span />
                    <span />
                    Collection
                  </h3>
                </div>
                <h2>Popular Collections</h2>
              </div>
              <div className="both-slider">
                <div className="col-lg-4">
                  <div className="collection-box">
                    <div className="collection-pic">
                      <img
                        src="assets/images/popular-01.png"
                        className="img-fluid"
                      />
                      <img
                        src="assets/images/popular-client01.png"
                        className="collection-client"
                      />
                    </div>
                    <h2>Tiger NFT Marketplace</h2>
                    <h3>
                      <span>By</span>@memories
                    </h3>
                    <p>
                      Memories is the worldâ€™s first and largest NFTâ€™s &amp;
                      Art-work marketplace
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*        Popular Collection End*/}
        {/*Trending Creators Section Starts*/}
        <section id="trending-creators">
          <div className="container">
            <div className="row">
              <div className="main-head">
                <div className="small-head">
                  <h3>
                    <span />
                    <span />
                    <span />
                    <span />
                    Creators
                  </h3>
                </div>
                <h2>Trending Creators</h2>
              </div>
              <TrendingCreators />
            </div>
          </div>
        </section>
        {/*Trending Creators Section Ends*/}

        {/*Easy Steps Section Start*/}
        <section id="easy-steps">
          <div className="container">
            <div className="row">
              <div className="main-head">
                <div className="small-head">
                  <h3>
                    <span />
                    <span />
                    <span />
                    <span />
                    Easy Steps
                  </h3>
                </div>
                <h2>Step To Create &amp; Sell Nft’s</h2>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="step-box">
                    <div className="step-pic">
                      <img src={Icon1} />
                    </div>
                    <h2>
                      <span>Create</span> Your Collection
                    </h2>
                    <p>
                      Memories is the world’s first and largest NFT’s &amp;
                      Art-work marketplace
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="step-box">
                    <div className="step-pic">
                      <img src={Icon2} />
                    </div>
                    <h2>
                      <span>Add</span> Your NFT’s
                    </h2>
                    <p>
                      Memories is the world’s first and largest NFT’s &amp;
                      Art-work marketplace
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="step-box">
                    <div className="step-pic">
                      <img src={Icon3} />
                    </div>
                    <h2>
                      <span>List</span> For Sale
                    </h2>
                    <p>
                      Memories is the world’s first and largest NFT’s &amp;
                      Art-work marketplace
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Easy Steps Section End*/}
        {/*  About Section Starts*/}
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="about-box">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="about-box-txt">
                      <div className="svg-about">
                        <img src={Aboutwhiteicon} />
                      </div>
                      <h2>Create &amp; Sell Your Nft’s</h2>
                      <p>
                        Memories is the world’s first and largest NFT’s &amp;
                        Art-work marketplaceM
                      </p>
                      <div className="banner-link">
                        <a href="javascript:;" id="explore-link">
                          Explore
                        </a>
                        <a href="javascript:;">Create</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="about-pic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="336.764"
                        height="269.411"
                        viewBox="0 0 336.764 269.411"
                      >
                        <path
                          id="About_Us"
                          data-name="About Us"
                          d="M21.574-165.468a8.865,8.865,0,0,1-3.946-5.262,8.907,8.907,0,0,1,.789-6.314l8.419-14.733a7.136,7.136,0,0,1,5-3.946,9.508,9.508,0,0,1,6.577.789l40.517,23.679A95.643,95.643,0,0,0,64.2-141.263ZM69.458-62.334a103.82,103.82,0,0,0,17.364,26.31l1.052,1.579L38.412-5.505a9.508,9.508,0,0,1-6.577.789,7.136,7.136,0,0,1-5-3.946L18.417-23.4a8.907,8.907,0,0,1-.789-6.314,8.865,8.865,0,0,1,3.946-5.262ZM315.19-165.468l-42.1,24.2a115.3,115.3,0,0,0-15.26-29.993l40.517-23.679a9.508,9.508,0,0,1,6.577-.789,7.136,7.136,0,0,1,5,3.946l8.419,14.733a8.907,8.907,0,0,1,.789,6.314A8.865,8.865,0,0,1,315.19-165.468ZM59.46-117.058a98.206,98.206,0,0,0,2.631,33.676H8.419A8.2,8.2,0,0,1,2.368-85.75,8.2,8.2,0,0,1,0-91.8v-16.838a8.2,8.2,0,0,1,2.368-6.051,8.2,8.2,0,0,1,6.051-2.368Zm268.885,0a8.2,8.2,0,0,1,6.051,2.368,8.2,8.2,0,0,1,2.368,6.051V-91.8A8.2,8.2,0,0,1,334.4-85.75a8.2,8.2,0,0,1-6.051,2.368H274.673a117.12,117.12,0,0,0,3.157-20.522q0-5.262-.526-13.155ZM315.19-34.972a8.865,8.865,0,0,1,3.946,5.262,8.907,8.907,0,0,1-.789,6.314L309.928-8.662a7.136,7.136,0,0,1-5,3.946,9.508,9.508,0,0,1-6.577-.789L248.89-34.446l1.579-2.1a106.128,106.128,0,0,0,16.838-26.31ZM167.856-201.25a91.152,91.152,0,0,1,46.568,12.366,93.253,93.253,0,0,1,33.94,33.676,89.693,89.693,0,0,1,12.629,46.568,89.737,89.737,0,0,1-6.051,32.887A94.659,94.659,0,0,1,237.84-47.6a136.409,136.409,0,0,0-14.733,21.048Q214.161-11.82,210.478.283V.809H126.287V.283q-3.683-12.1-12.629-26.836A136.407,136.407,0,0,0,98.925-47.6a94.659,94.659,0,0,1-17.1-28.151,89.738,89.738,0,0,1-6.051-32.887,90.71,90.71,0,0,1,12.1-45.516,93.191,93.191,0,0,1,32.624-33.94A89.241,89.241,0,0,1,167.856-201.25Zm.526,50.515a8.2,8.2,0,0,0,6.051-2.368,8.2,8.2,0,0,0,2.368-6.051,8.2,8.2,0,0,0-2.368-6.051,8.2,8.2,0,0,0-6.051-2.368,57.982,57.982,0,0,0-29.467,7.893,57.883,57.883,0,0,0-21.574,21.574,57.982,57.982,0,0,0-7.893,29.467,8.2,8.2,0,0,0,2.368,6.051,8.2,8.2,0,0,0,6.051,2.368,8.2,8.2,0,0,0,6.051-2.368,8.2,8.2,0,0,0,2.368-6.051,40.535,40.535,0,0,1,12.366-29.73A40.535,40.535,0,0,1,168.382-150.735Zm-42.1,188.378v-20h84.191v20a17.5,17.5,0,0,1-2.631,9.472L198.375,60.8a15.292,15.292,0,0,1-13.681,7.367H152.07A15.292,15.292,0,0,1,138.389,60.8l-9.471-13.681A17.5,17.5,0,0,1,126.287,37.643Z"
                          transform="translate(0 201.25)"
                          fill="#090208"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  About Section Ends*/}
      </LayoutWrapper>
    </>
  );
};

export default HomePage;
