import "./Navbar.css";
import chewieImg from "./chewiehero.png";
import premium from "./premium.png";


function Navbar() {
    return (

        <div className="contentContainer">
            <div className="titleDiv">
                <h1 className="header">Välkomna till chewmatta.se</h1>
                <h3 className="subHeader">En blogg om<span className="brazilSpan"> brasiliansk</span>
                    <span className="jiuSpan"> jiu </span>
                    -   <span className="jitsuSpan"> jitsu</span>
                </h3>
                <img className="chewieImg" src={chewieImg} alt="hero" />
                <img className="premiumImg" src={premium} alt="hero" />
            </div>

            <div className="navbar">
                <a className="link" href="/">Hem</a>
                <a className="link" href="/">Blog</a>
                <a className="link" href="/">Heroes</a>
                <a className="link" href="/">Kontakt</a>
            </div>
        </div>

    )
}

export default Navbar;