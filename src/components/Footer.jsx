import "./Footer.scss";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import iiitbLogo from "../assets/iiitb-logo.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-sm">
                    <div className="footer-content">
                        <div className="row">
                            {/* bootstrap class to center in col */}
                            {/* <div className="col-sm-2">
                                </div> */}
                            <div className="col-sm">
                                <span>
                                    <h1 className="footer-logo">Logo</h1>
                                </span>
                                <span>
                                    <h1 className="footer-logo">
                                        <img src={iiitbLogo} alt="" />
                                    </h1>
                                </span>
                                <p className="footer-c">© Synergy 2023, IIIT Bangalore</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ! mobile content not shown in mobile view */}
                {!isMobile &&
                    <div className="col-sm mobile">
                        <div className="footer-content">
                            <div className="row">
                                <div className="col-sm">
                                    <h1 className="footer-heading">Social</h1>
                                    <h1 className="footer-subheading">Handles</h1>
                                </div>
                                <div className="col-sm">
                                    <div className="row">
                                        {/* space items evenly in column */}
                                        <div className="col-sm foot-icon-list">
                                            <a href="https://www.instagram.com/iiitb_official/" target="_blank" rel="noreferrer" className="footer-icon">
                                                <AiFillInstagram style={{ color: "white", fontSize: "2.5em" }} />
                                            </a>
                                            <a href="https://www.facebook.com/IIITBofficial/" target="_blank" rel="noreferrer" className="footer-icon">
                                                <BsFacebook style={{ color: "white", fontSize: "2.3em" }} />
                                            </a>
                                            <a href="https://in.linkedin.com/school/iiit-bangalore/" target="_blank" rel="noreferrer" className="footer-icon">
                                                <BsLinkedin style={{ color: "white", fontSize: "2.3em" }} />
                                            </a>
                                            <a href="https://twitter.com/IIITB_official" target="_blank" rel="noreferrer" className="footer-icon">
                                                <FaTwitter style={{ color: "white", fontSize: "2.3em" }} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row handles-sub">
                                        Connect and Don't miss a thing.
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default Footer;