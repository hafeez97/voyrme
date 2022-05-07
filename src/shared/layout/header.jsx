import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../visuals/css/style.css";
import mainLogo from "../visuals/images/logo.png";
import iconUser from "../visuals/images/icon-user.svg";
import metaMask from "../visuals/images/meta-mask.png";
import "../visuals/js/jquery.min.js";
import $ from "jquery";
import { useMoralis } from "react-moralis";

const Header = () => {
  const [loggedAddress, setLoggedAddress] = React.useState();
  const [currentBalance, setCurrentBalance] = React.useState();
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
    }
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
          setLoggedAddress(user.get("ethAddress"));
        })

        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    alert("logged out");
    setLoggedAddress("");
  };

  const handleClick = () => {
    $("#wallet-show").click(function () {
      $("#wallet-box").toggleClass("dsply-blck");
      $(".overlay").toggleClass("dsply-blck");
      $("#wallet-box02").hide();
    });
    $("#show-wallet").click(function () {
      $("#wallet-box02").show();
      $("#wallet-box").hide();
    });
  };

  return (
    <>
      <header className="header-main" id="home-header">
        <div className="nav-area-full">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 logo-area">
                <div className="logo">
                  <Link to="/">
                    <img className="img-fluid" src={mainLogo} alt="img" />
                  </Link>
                  {/*<a href="index.html">*/}
                  {/*  <img className="img-fluid" src={mainLogo} alt="img" />*/}
                  {/*</a>*/}
                </div>
              </div>
              <div className="col-lg-6 d-flex">
                <div className="main-menu align-self-center d-none d-lg-block">
                  <ul>
                    <li>
                      <Link to="/Explore">Explore</Link>
                    </li>
                    <li>
                      <a href="javascript:;">Stats</a>
                    </li>
                    <li>
                      <a href="javascript:;">Create</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 d-flex">
                <div className="top-icon">
                  <ul>
                    <li className={isAuthenticated ? "" : "disabled"}>
                      <a href="javascript:;" id="user-show">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                        >
                          <path
                            id="Path_11060"
                            data-name="Path 11060"
                            d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,2.99A3.308,3.308,0,1,1,6.693,6.3,3.308,3.308,0,0,1,10,2.991Zm0,14.4a7.339,7.339,0,0,1-4.779-1.762,1.41,1.41,0,0,1-.495-1.071,3.336,3.336,0,0,1,3.352-3.335h3.849a3.331,3.331,0,0,1,3.347,3.335,1.406,1.406,0,0,1-.494,1.071A7.336,7.336,0,0,1,10,17.387Z"
                            transform="translate(0 -0.001)"
                            fill="#e3e0db"
                          />
                        </svg>
                      </a>
                      <div id="user-box">
                        <ul>
                          <li>
                            <a href=" javascript:;">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path
                                  id="Path_16293"
                                  data-name="Path 16293"
                                  d="M6,14.889h7.111V6H6ZM6,22h7.111V16.667H6Zm8.889,0H22V13.111H14.889Zm0-16v5.333H22V6Z"
                                  transform="translate(-6 -6)"
                                  fill="#e3e0db"
                                />
                              </svg>
                              <span>My Collections</span>
                            </a>
                          </li>
                          <li>
                            <a href=" javascript:;">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path
                                  id="Path_16293"
                                  data-name="Path 16293"
                                  d="M6,14.889h7.111V6H6ZM6,22h7.111V16.667H6Zm8.889,0H22V13.111H14.889Zm0-16v5.333H22V6Z"
                                  transform="translate(-6 -6)"
                                  fill="#e3e0db"
                                />
                              </svg>
                              {loggedAddress != null ? (
                                <span>{loggedAddress.slice(-6)}</span>
                              ) : (
                                <span>Profile</span>
                              )}
                            </a>
                            {/*<a href=" javascript:;">*/}
                            {/*  <svg*/}
                            {/*    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*    width={20}*/}
                            {/*    height={20}*/}
                            {/*    viewBox="0 0 20 20"*/}
                            {/*  >*/}
                            {/*    <path*/}
                            {/*      id="Path_11060"*/}
                            {/*      data-name="Path 11060"*/}
                            {/*      d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,2.99A3.308,3.308,0,1,1,6.693,6.3,3.308,3.308,0,0,1,10,2.991Zm0,14.4a7.339,7.339,0,0,1-4.779-1.762,1.41,1.41,0,0,1-.495-1.071,3.336,3.336,0,0,1,3.352-3.335h3.849a3.331,3.331,0,0,1,3.347,3.335,1.406,1.406,0,0,1-.494,1.071A7.336,7.336,0,0,1,10,17.387Z"*/}
                            {/*      transform="translate(0 -0.001)"*/}
                            {/*      fill="#e3e0db"*/}
                            {/*    />*/}
                            {/*    <span>Profile</span>*/}
                            {/*  </svg>*/}
                            {/*</a>*/}
                          </li>
                          <li>
                            <a href=" javascript:;">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path
                                  id="Path_16291"
                                  data-name="Path 16291"
                                  d="M16.383,10.784A6.067,6.067,0,0,0,16.441,10a6.068,6.068,0,0,0-.058-.784L18.119,7.9a.4.4,0,0,0,.1-.512L16.572,4.616a.419.419,0,0,0-.5-.176l-2.048.8a6.052,6.052,0,0,0-1.39-.784l-.313-2.12a.4.4,0,0,0-.4-.336H8.628a.4.4,0,0,0-.4.336l-.313,2.12a6.364,6.364,0,0,0-1.39.784l-2.048-.8a.406.406,0,0,0-.5.176L2.328,7.384a.387.387,0,0,0,.1.512l1.735,1.32A6.174,6.174,0,0,0,4.1,10a6.174,6.174,0,0,0,.058.784L2.426,12.1a.4.4,0,0,0-.1.512l1.645,2.768a.419.419,0,0,0,.5.176l2.048-.8a6.052,6.052,0,0,0,1.39.784l.313,2.12a.4.4,0,0,0,.4.336h3.29a.4.4,0,0,0,.4-.336l.313-2.12a6.364,6.364,0,0,0,1.39-.784l2.048.8a.406.406,0,0,0,.5-.176l1.645-2.768a.4.4,0,0,0-.1-.512ZM10.272,12.8A2.8,2.8,0,1,1,13.151,10,2.843,2.843,0,0,1,10.272,12.8Z"
                                  transform="translate(-2.271 -2)"
                                  fill="#e3e0db"
                                />
                              </svg>
                              <span>Settings</span>
                            </a>
                          </li>
                          <li>
                            <a href=" javascript:;" onClick={logOut}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15.994"
                                height={16}
                                viewBox="0 0 15.994 16"
                              >
                                <g
                                  id="exit"
                                  transform="translate(16.003 16) rotate(-180)"
                                >
                                  <path
                                    id="Path_16294"
                                    data-name="Path 16294"
                                    d="M16.333,0H9A2.006,2.006,0,0,0,7,2V6h6a2,2,0,0,1,0,4H7v4a2.006,2.006,0,0,0,2,2h7.333a2.006,2.006,0,0,0,2-2V2A2.006,2.006,0,0,0,16.333,0Z"
                                    transform="translate(-2.33)"
                                    fill="#e3e0db"
                                  />
                                  <path
                                    id="Path_16295"
                                    data-name="Path 16295"
                                    d="M2.276,11.332H10.67a.667.667,0,1,0,0-1.333H2.276l.867-.86A.669.669,0,0,0,2.2,8.192l-2,2a.691.691,0,0,0,0,.947l2,2a.687.687,0,0,0,.947,0,.672.672,0,0,0,0-.947Z"
                                    transform="translate(0 -2.665)"
                                    fill="#e3e0db"
                                  />
                                </g>
                              </svg>
                              <span>Log Out</span>
                            </a>
                          </li>
                          <li>
                            {/*<a href=" javascript:;">*/}
                            {/*  <svg*/}
                            {/*    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*    width="16.185"*/}
                            {/*    height="15.255"*/}
                            {/*    viewBox="0 0 16.185 15.255"*/}
                            {/*  >*/}
                            {/*    <path*/}
                            {/*      id="night-mode"*/}
                            {/*      d="M14.749,13.321A8.346,8.346,0,0,1,8.114,8.11a7.925,7.925,0,0,1-.537-3.843.359.359,0,0,0-.554-.336A8.251,8.251,0,1,0,19.393,13.2a.359.359,0,0,0-.474-.441,8.2,8.2,0,0,1-4.17.559Z"*/}
                            {/*      transform="translate(-3.223 -3.872)"*/}
                            {/*      fill="#e3e0db"*/}
                            {/*    />*/}
                            {/*  </svg>*/}
                            {/*  <span>Night Mode</span>*/}
                            {/*  <div className="ct-toggle">*/}
                            {/*    <label className="switch">*/}
                            {/*      <input type="checkbox" defaultChecked />*/}
                            {/*      <span className="slider round" />*/}
                            {/*    </label>*/}
                            {/*  </div>*/}
                            {/*</a>*/}
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        id="wallet-show"
                        onClick={(e) => {
                          handleClick();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.281"
                          height="18.253"
                          viewBox="0 0 20.281 18.253"
                        >
                          <path
                            id="wallet_2_"
                            data-name="wallet (2)"
                            d="M14.719,0c3.5,0,5.561,2.012,5.561,5.457H15.99v.035a3.561,3.561,0,0,0-3.605,3.515,3.561,3.561,0,0,0,3.605,3.515h4.291v.316c0,3.4-2.064,5.413-5.561,5.413H5.561C2.064,18.253,0,16.24,0,12.839H0V5.413C0,2.012,2.064,0,5.561,0h9.158Zm4.8,6.969a.748.748,0,0,1,.757.738h0v2.566a.757.757,0,0,1-.757.738H16.072a2.136,2.136,0,0,1-2.118-1.617,2.01,2.01,0,0,1,.439-1.675,2.121,2.121,0,0,1,1.6-.75h3.533ZM16.477,8.155h-.334a.777.777,0,0,0-.548.216.738.738,0,0,0-.228.531.774.774,0,0,0,.775.765h.334a.756.756,0,1,0,0-1.512ZM10.528,3.946H4.8a.766.766,0,0,0-.775.747.774.774,0,0,0,.775.765h5.724a.756.756,0,1,0,0-1.512Z"
                            fill="#e3e0db"
                          />
                        </svg>
                      </a>
                      <div id="wallet-box">
                        <div className="wallet-top">
                          <ul>
                            <li>
                              <a href="javascript:;">
                                <img
                                  // src="../visuals/images/icon-user.svg"
                                  src={iconUser}
                                />
                                My Wallet
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="wallet-middle-box">
                          <ul>
                            <li>
                              <a href="javascript:;" onClick={login}>
                                <img
                                  // src="../visuals/images/meta-mask.png"
                                  src={metaMask}
                                />
                                MetaMask
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <img src="../visuals/images/coinbase.png" />
                                Coinbase Wallet
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <img src="../visuals/images/wallet-connect.png" />
                                FortMatic
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <img src="../visuals/images/fortmatic.png" />
                                Dapper
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <img src="../visuals/images/dapper.png" />
                                MetaMask
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="wallet-middle-bottom">
                          <ul>
                            <li>
                              <a href="javascript:;" id="show-wallet">
                                Show More Options
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="wallet-box02">
                  <div className="wallet-top02">
                    <ul>
                      <li>
                        <a href="javascript:;">
                          <img src="../visuals/images/icon-user.svg" />
                          My Wallet
                        </a>
                      </li>
                      <li>
                        <p>xyzcwvypk…</p>
                      </li>
                    </ul>
                  </div>
                  <div className="wallet-middle-box02">
                    <p>Total Fund</p>
                    <h4>$0.00 USD</h4>
                  </div>
                  <div className="wallet-middle-bottom">
                    <ul>
                      <li>
                        <a href="javascript:;">Show More Options</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
