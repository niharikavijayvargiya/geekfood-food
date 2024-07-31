import './Footer.css'
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <h3>logoipsum</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
                <div className="atag">
                    <a href="https://github.com/Raj01Patel">About</a>
                    <a href="https://github.com/Raj01Patel">Careers</a>
                    <a href="https://github.com/Raj01Patel">History</a>
                    <a href="https://github.com/Raj01Patel">Services</a>
                    <a href="https://github.com/Raj01Patel">Projects</a>
                    <a href="https://github.com/Raj01Patel">Blog</a>
                </div>
                <div className="icon">
                    <div>
                        <i><FaFacebook /></i>
                        <i><GrInstagram /></i>
                        <i><FaTwitter /></i>
                        <i><FaGithub /></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer