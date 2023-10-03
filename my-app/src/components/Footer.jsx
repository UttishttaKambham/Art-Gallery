import "./FooterStyles.css"

const Footer= () =>{
    return(
        <div className="Footer">
            <div className="top">
                <div>
                    <h1>ArtLife</h1>
                    <p>Join us for art journey</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Instagram</a>
                    <a href="/">Project</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Support</a>
                    <a href="/">Contact</a>
                </div>

            </div>
        </div>

    )
}
export default Footer;